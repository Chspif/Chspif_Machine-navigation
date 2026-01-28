import { useMemo, useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import Card from './Card';
import EmptyState, { SearchIcon } from './EmptyState';
import './CardsContainer.css';
import data from '../data/tools.json';
import type { Tool, Category } from '../types';
import { toolComparators, seededShuffle, type SortKey } from '../utils/sorting';

const ITEMS_PER_PAGE = 32;

interface ToolWithCategory extends Tool {
    category: string;
}

const fuseOptions = {
    keys: [
        { name: 'title', weight: 0.4 },
        { name: 'body', weight: 0.3 },
        { name: 'category', weight: 0.2 },
        { name: 'tag', weight: 0.1 }
    ],
    threshold: 0.3,
    includeScore: true,
    minMatchCharLength: 2,
    ignoreLocation: true
};

interface CardsContainerProps {
    filter: string;
    sort?: SortKey;
    randomSeed?: number;
    searchQuery?: string;
}

async function loadCategoryData(category: string, file: string) {
    try {
        const module = await import(`../data/${file}`);
        return module.default;
    } catch (error) {
        console.error(`Failed to load category data for ${category}:`, error);
        return [];
    }
}

export default function CardsContainer({
    filter,
    sort = 'nameAsc',
    randomSeed = 0,
    searchQuery = '',
}: CardsContainerProps) {
    const [displayedCount, setDisplayedCount] = useState(ITEMS_PER_PAGE);
    const [isLoading, setIsLoading] = useState(false);
    const [allTools, setAllTools] = useState<ToolWithCategory[]>([]);
    const loaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loadAllData = async () => {
            const categories = data.tools as Category[];
            const loadedData: ToolWithCategory[] = [];

            for (const category of categories) {
                if (category.source === 'auto') {
                    continue;
                } else if (category.file) {
                    const tools = await loadCategoryData(category.category, category.file);
                    tools.forEach((tool: any) => {
                        loadedData.push({
                            ...tool,
                            category: category.category,
                        });
                    });
                } else if (category.content) {
                    category.content.forEach((tool: any) => {
                        loadedData.push({
                            ...tool,
                            category: category.category,
                        });
                    });
                }
            }

            setAllTools(loadedData);
        };

        loadAllData();
    }, []);

    useEffect(() => {
        try {
            const raw = sessionStorage.getItem('toolsState');
            if (raw) {
                const state = JSON.parse(raw);
                if (state && state.filter === filter) {
                    if (state.displayedCount && state.displayedCount > displayedCount) {
                        setDisplayedCount(state.displayedCount);
                    }
                    setTimeout(() => {
                        if (typeof window !== 'undefined' && typeof state.scrollY !== 'undefined') {
                            window.scrollTo(0, state.scrollY);
                        }
                    }, 50);
                }
                sessionStorage.removeItem('toolsState');
            }
        } catch (err) { }
    }, []);

    const fuse = useMemo(() => {
        return new Fuse(allTools, fuseOptions);
    }, [allTools]);

    const filteredCards = useMemo((): ToolWithCategory[] => {
        let base: ToolWithCategory[];

        if (searchQuery && searchQuery.length >= 2) {
            const results = fuse.search(searchQuery);
            base = results.map(result => result.item);
            if (filter !== 'all-worlds') {
                base = base.filter(tool => tool.category === filter);
            }
        } else {
            if (filter === 'all-worlds') {
                base = allTools;
            } else {
                base = allTools.filter(tool => tool.category === filter);
            }
        }

        if (sort === 'random') {
            const DEFAULT_SEED = 42;
            return seededShuffle(base, randomSeed || DEFAULT_SEED);
        } else {
            const comparator = toolComparators[sort] || toolComparators.nameAsc;
            return [...base].sort(comparator);
        }
    }, [filter, sort, randomSeed, searchQuery, fuse]);

    useEffect(() => {
        setDisplayedCount(ITEMS_PER_PAGE);
    }, [filter, searchQuery]);

    useEffect(() => {
        const handleSaveState = () => {
            try {
                const state = {
                    filter,
                    displayedCount,
                    scrollY: typeof window !== 'undefined' ? window.scrollY || window.pageYOffset : 0,
                };
                sessionStorage.setItem('toolsState', JSON.stringify(state));
            } catch (err) { }
        };

        window.addEventListener('tools:save-state', handleSaveState);
        return () => window.removeEventListener('tools:save-state', handleSaveState);
    }, [displayedCount, filter]);

    useEffect(() => {
        const tryRestore = () => {
            try {
                const raw = sessionStorage.getItem('toolsState');
                if (!raw) return;
                const state = JSON.parse(raw);
                if (state && state.filter === filter) {
                    if (state.displayedCount && state.displayedCount > displayedCount) {
                        setDisplayedCount(state.displayedCount);
                    }
                    setTimeout(() => {
                        if (typeof window !== 'undefined' && typeof state.scrollY !== 'undefined') {
                            window.scrollTo(0, state.scrollY);
                        }
                    }, 50);
                }
                sessionStorage.removeItem('toolsState');
            } catch (err) { }
        };

        window.addEventListener('pageshow', tryRestore);
        window.addEventListener('astro:page-load', tryRestore);
        return () => {
            window.removeEventListener('pageshow', tryRestore);
            window.removeEventListener('astro:page-load', tryRestore);
        };
    }, [filter]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
            if (entries[0]?.isIntersecting && !isLoading && displayedCount < filteredCards.length) {
                    setIsLoading(true);
                    setTimeout(() => {
                        setDisplayedCount((prev) => Math.min(prev + ITEMS_PER_PAGE, filteredCards.length));
                        setIsLoading(false);
                    }, 300);
                }
            },
            { threshold: 0.1 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => observer.disconnect();
    }, [displayedCount, isLoading, filteredCards.length]);

    const displayedCards = filteredCards.slice(0, displayedCount);

    // Check if searching with no results in a specific category
    const isSearchingInCategory = searchQuery && searchQuery.length >= 2;
    const hasNoSearchResults = isSearchingInCategory && filteredCards.length === 0;

    if (hasNoSearchResults) {
        return (
            <section>
                <EmptyState
                    icon={<SearchIcon />}
                    message={`No results found for "${searchQuery}" in this category.`}
                    actionText="Search All Tools"
                    actionHref="/"
                />
            </section>
        );
    }

    return (
        <section>
            <ul role="list" className="link-card-grid">
                {displayedCards.map(({ title, body, tag, slug, category }, i) => (
                    <Card
                        key={`${title}-${i}`}
                        title={title}
                        body={body}
                        tag={tag}
                        slug={slug}
                        category={category}
                    />
                ))}
            </ul>

            {displayedCount < filteredCards.length && (
                <div ref={loaderRef} className="infinite-scroll-loader">
                    {isLoading && (
                        <p className="loading-text">Loading more...</p>
                    )}
                </div>
            )}
        </section>
    );
}

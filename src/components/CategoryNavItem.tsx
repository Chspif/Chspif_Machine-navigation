import { navigate } from 'astro:transitions/client';
import { useState, useEffect, useRef, useMemo } from 'react';
import data from '../data/tools.json';
import overworldData from '../data/overworld.json';
import endData from '../data/end.json';
import netherData from '../data/nether.json';
import './CategoryNavItem.css';
import type { Category } from '../types';

const categoryDataMap: Record<string, any[]> = {
    'overworld.json': overworldData,
    'end.json': endData,
    'nether.json': netherData
};

interface CategoryNavItemProps {
    title: string;
    category: string;
    filter: string;
}

export default function CategoryNavItem({
    title,
    category,
    filter,
}: CategoryNavItemProps) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isActive, setIsActive] = useState(false);
    const [categoryCount, setCategoryCount] = useState(0);

    const handleNavigation = (e: React.MouseEvent) => {
        e.preventDefault();
        const path = category === 'all' ? '/' : `/${category}`;
        navigate(path, {
            history: 'push',
            state: { category },
        });
    };

    useEffect(() => {
        const loadCount = () => {
            if (category === 'all' || category === 'all-worlds') {
                const categories = data.tools as Category[];
                let total = 0;
                for (const item of categories) {
                    if (item.source === 'auto' && item.category === 'all-worlds') {
                        continue;
                    }
                    if (item.content) {
                        total += item.content.length;
                    } else if (item.file) {
                        const tools = categoryDataMap[item.file] || [];
                        total += tools.length;
                    }
                }
                setCategoryCount(total);
            } else {
                const cat = (data.tools as Category[]).find((item) => item.category === category);
                if (cat?.content) {
                    setCategoryCount(cat.content.length);
                } else if (cat?.file) {
                    const tools = categoryDataMap[cat.file] || [];
                    setCategoryCount(tools.length);
                } else {
                    setCategoryCount(0);
                }
            }
        };

        loadCount();
    }, [category]);

    useEffect(() => {
        setIsActive(filter === category);
    }, [filter, category]);

    useEffect(() => {
        if (isActive && buttonRef.current) {
            buttonRef.current.scrollIntoView({
                behavior: 'instant',
                block: 'nearest',
                inline: 'center',
            });
        }
    }, [isActive]);

    return (
        <button
            ref={buttonRef}
            onClick={handleNavigation}
            className={`nav__item nu-u-text--secondary-alt nu-c-fs-small nav__item--filter ${isActive ? 'is-active' : ''}`}
            aria-label={`Navigate to ${title} category with ${categoryCount} items`}
        >
            {title} <span className="category-count">{categoryCount}</span>
        </button>
    );
}

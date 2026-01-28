import { useEffect, useState } from 'react';
import CategoryNav from './CategoryNav';
import CardsContainer from './CardsContainer';

interface DashboardProps {
    category: string;
}

interface SearchEventDetail {
    query?: string;
}

export default function Dashboard({ category }: DashboardProps) {
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const handleSearch = (e: Event) => {
            const detail = (e as CustomEvent<SearchEventDetail>)?.detail || {};
            if (typeof detail.query !== 'undefined') {
                setSearchQuery(detail.query);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('tools:search', handleSearch);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('tools:search', handleSearch);
            }
        };
    }, []);

    return (
        <>
            <CategoryNav filter={category} />
            <CardsContainer
                filter={category}
                searchQuery={searchQuery}
            />
        </>
    );
}

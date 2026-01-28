import './Card.css';
import BookmarkButton from './BookmarkButton';

interface CardProps {
    title: string;
    body: string;
    tag?: string | undefined;
    slug?: string | undefined;
    category?: string | undefined;
}

export default function Card({
    title,
    body,
    tag,
    slug,
}: CardProps) {
    return (
        <li className="link-card">
            <div className="card-content">
                <strong className="nu-c-fs-normal nu-u-mt-1 nu-u-mb-1">{title}</strong>
                <p className="card-body nu-u-mt-1 nu-u-mb-1">{body}</p>
                <p className="distribution">
                    <span className="tag">{tag}</span>
                </p>
            </div>
            {slug && (
                <div className="card-bookmark">
                    <BookmarkButton slug={slug} title={title} variant="small" />
                </div>
            )}
        </li>
    );
}

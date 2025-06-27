import React from 'react';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
    id: string;
    title: string;
    date: string;
    content: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ id, title, date, content }) => {
    const isXiaohongshu = id === 'all-on-xiaohongshu';
    const linkPath =
        id === 'green-card-process'
            ? '/articles/green-card-process'
            : id === 'citizenship-interview'
            ? '/articles/citizenship-interview'
            : id === 'common-questions'
            ? '/articles/common-questions'
            : id === 'rednote-gallery'
            ? '/articles/rednote-gallery'
            : null;
    const cardContent = (
        <div className={`article-card${isXiaohongshu ? ' xiaohongshu-card' : ''}`} tabIndex={0}>
            <h2>{title}</h2>
            <div className="article-meta">
                <span>{date}</span>
            </div>
            <div className="article-summary">{content}</div>
        </div>
    );
    return isXiaohongshu || !linkPath ? cardContent : (
        <Link to={linkPath} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            {cardContent}
        </Link>
    );
};

export default ArticleCard;
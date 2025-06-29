import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';

const initialArticles = [
    {
        id: 'interview-process-summary',
        title: '超全庇护面谈流程总结',
        date: '2025-06-28',
        content: '根据我的经验给大家聊聊整个面谈大概会分成几个板块...（点击查看全文）',
        link: '/articles/interview-process-summary',
    },
    {
        id: 'green-card-process',
        title: '聊聊USCIS 婚姻面谈 - 原帖在小红书',
        date: '2025-06-24',
        content: '每次客人问我婚姻面谈会被问到什么问题，大概多久...（点击查看全文）',
    },
    {
        id: 'citizenship-interview',
        title: '公民入籍面谈经验',
        date: '2025-06-24',
        content: '分享公民入籍面谈的流程和注意事项...（点击查看全文）',
    },
    {
        id: 'common-questions',
        title: '移民常见问题解答',
        date: '2025-06-24',
        content: '针对移民过程中常见的问题进行详细解答...（点击查看全文）',
    },
    {
        id: 'rednote-gallery',
        title: '小红书过往信息',
        date: '2025-06-27',
        content: '点击查看小红书过往信息图片集。',
    },
];

const Articles: React.FC = () => {
    const [articles, setArticles] = useState(initialArticles);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="articles-page">
            <Header />
            <main>
                <h1>文章列表</h1>
                <div className="articles-container">
                    {articles.map((article) => (
                        <ArticleCard
                            key={article.id}
                            id={article.id}
                            title={article.title}
                            date={article.date}
                            content={article.content}
                            link={article.link}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Articles;
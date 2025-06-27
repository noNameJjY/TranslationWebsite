import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const ArticleDetail: React.FC = () => (
  <div className="article-detail-page">
    <Header />
    <main>
      <article className="article-content">
        <h1>未找到文章</h1>
        <div className="article-body">
          <p>您访问的文章不存在或已移至其他页面。</p>
          <Link to="/articles" className="back-button">返回文章列表</Link>
        </div>
      </article>
    </main>
    <Footer />
  </div>
);

export default ArticleDetail;

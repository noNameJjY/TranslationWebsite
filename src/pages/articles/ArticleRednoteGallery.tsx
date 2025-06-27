import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const imageNames = [
  'IMG_0741.PNG', 'IMG_0742.PNG', 'IMG_0743.PNG', 'IMG_0744.PNG', 'IMG_0745.PNG',
  'IMG_0746.PNG', 'IMG_0747.PNG', 'IMG_0748.PNG', 'IMG_0749.PNG', 'IMG_0750.PNG',
  'IMG_0751.PNG', 'IMG_0752.PNG', 'IMG_0753.PNG', 'IMG_0754.PNG', 'IMG_0755.PNG', 'IMG_0756.PNG'
];

const ArticleRednoteGallery: React.FC = () => {
  const [enlarged, setEnlarged] = useState<string | null>(null);

  return (
    <div className="article-detail-page">
      <Header />
      <main>
        <article className="article-content">
          <h1>小红书过往信息图片集</h1>
          <div className="rednote-gallery-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', justifyItems: 'center' }}>
            {imageNames.map((name) => (
              <img
                key={name}
                src={process.env.PUBLIC_URL + '/images/' + name}
                alt={name}
                className="rednote-gallery-img"
                style={{ width: '100%', maxWidth: '420px', cursor: 'pointer', borderRadius: '12px', boxShadow: '0 2px 12px #bbb' }}
                onClick={() => setEnlarged(name)}
              />
            ))}
          </div>
          {enlarged && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(0,0,0,0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
              }}
              onClick={() => setEnlarged(null)}
            >
              <img
                src={process.env.PUBLIC_URL + '/images/' + enlarged}
                alt={enlarged}
                style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: '16px', boxShadow: '0 4px 32px #000' }}
              />
            </div>
          )}
          <div className="article-navigation">
            <Link to="/articles" className="back-button">返回文章列表</Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleRednoteGallery;

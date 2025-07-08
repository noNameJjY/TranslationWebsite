import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Contact.css';
import xiaohongshuQR from '../images/xiaohongshu-qr.jpg';

const Contact: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="contact-page">
            <Header />
            <main>
                <h1>联系我</h1>
                <div className="contact-info">
                    <section className="contact-methods">
                        <h2>联系方式</h2>
                        <p>
                            <strong>微信：</strong> winnieaaaaa111
                        </p>
                        <p>
                            <strong>邮箱：</strong> wentranslate@gmail.com
                        </p>
                        <p>
                            <strong>小红书号:西雅图翻译💫（无法回私信）/ 西雅图翻译💫 winfanyi：</strong> winnieaaaaa111 / 95650817554
                        </p>
                        <p>
                        欢迎浏览之前写的帖子
                        因为平台问题，写的文章随时可能被下架，且大号：西雅图翻译💫 无法回私信。敬请谅解。
                        </p>
                        <div className="qr-code-container">
                            <img 
                                src={xiaohongshuQR}
                                alt="小红书二维码" 
                                className="qr-code"
                                title="点击图片放大二维码"
                                onClick={() => setIsModalOpen(true)}
                            />
                            <p className="qr-hint">点击图片放大查看二维码</p>
                        </div>
                        {isModalOpen && (
                            <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                                <div className="modal-content" onClick={e => e.stopPropagation()}>
                                    <img 
                                        src={xiaohongshuQR}
                                        alt="小红书二维码" 
                                        className="qr-code-large"
                                    />
                                    <button 
                                        className="close-button"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        关闭
                                    </button>
                                </div>
                            </div>
                        )}
                    </section>
                    <section className="business-hours">
                        <h2>工作时间</h2>
                        <p>每天查看微信，邮件，回信息迅速</p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
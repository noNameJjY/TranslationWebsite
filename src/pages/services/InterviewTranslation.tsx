import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/Services.css';

const InterviewTranslation: React.FC = () => {
    return (
        <div className="services-page">
            <Header />
            <main>
                <h1>绿卡&入籍面试翻译</h1>
                <div className="service-detail">
                    <section className="service-intro">
                        <h2>服务简介</h2>
                        <p>我提供专业的绿卡和入籍面试翻译服务，帮助您顺利拿到绿卡。</p>
                    </section>

                    <section className="service-pricing">
                        <h2>服务价格</h2>
                        <p>价格根据具体服务内容而定，请联系微信或邮箱获取详细报价。</p>
                    </section>
                    
                    <section className="service-features">
                        <h2>服务特点</h2>
                        <ul>
                            <li>价格包括专业<Link to="/services/interview-coaching" style={{textDecoration: 'underline'}}>面谈辅导</Link></li>
                            <li>面谈当天提供准确，专业的翻译</li>
                            <li>熟悉移民局面谈流程</li>
                        </ul>
                    </section>
                        <section className="service-note">
                        <h2>温馨提示</h2>
                        <p>在定下来面谈日期之后越早预约越好，让我们能有时间磨合</p>
                        <p>联系我时请提前提供面谈的具体时间和日期，以便我给您留出时间。</p>
                    </section>
                    <section className="service-contact">
                        <h2>预约咨询</h2>
                        <div className="contact-info-preview">
                            <p><strong>微信：</strong>winnieaaaaa111</p>
                            <p><strong>邮箱：</strong>winfanyi1@gmail.com</p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default InterviewTranslation;

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import '../styles/Services.css';

const Services: React.FC = () => {

    return (
        <div className="services-page">
            <Header />
            <main>
                <h1>诚信，负责，高效 - 温妮在西雅图地区为您提供专业面谈翻译服务</h1>
                <section className="contact-info">
                    <h2>联系方式</h2>
                    <div className="contact-grid">
                        <p><strong>微信：</strong>winnieaaaaa111</p>
                        <p><strong>邮箱：</strong>wentranslate@gmail.com</p>
                        <p><strong>小红书号：</strong>3814236872</p>
                    </div>
                </section>
                <section className="services">
                    <h2>提供服务</h2>
                    <div className="service-list">
                        <ServiceCard 
                            title="绿卡&入籍面试翻译" 
                            description="经验丰富，提供专业的面试翻译服务，确保您的面试顺利进行。"
                            path="/services/interview-translation"
                        />
                        <ServiceCard 
                            title="面试辅导" 
                            description="用实战经验，以翻译的视角提供面谈前的准备和指导，让您充满信心地面对面谈。"
                            path="/services/interview-coaching"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Services;
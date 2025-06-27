import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/Services.css';

const InterviewCoaching: React.FC = () => {
    return (
        <div className="services-page">
            <Header />
            <main>
                <h1>面谈辅导</h1>
                <div className="service-detail">
                    <section className="service-intro">
                        <h2>服务简介</h2>
                        <p>基于丰富的翻译经验，我提供专业的面谈&上庭培训和指导，帮助您充分应对面谈。</p>
                    </section>

                    <section className="service-pricing">
                        <h2>服务价格</h2>
                        <p>一小时起，价格根据辅导时长和内容而定，请联系微信或小红书或邮箱获取详细报价。</p>
                    </section>
                    
                    <section className="service-features">
                        <h2>辅导内容</h2>
                        <ul>
                            <li>西雅图面谈/上庭流程详细讲解</li>
                            <li>根据您的案件细节模拟面试</li>
                            <li>答题技巧和注意事项</li>
                            <li>常见问题解析</li>
                            <li>辅导结束后提供文字版资料，供您复习</li>
                        </ul>
                    </section>

                    <section className="service-note">
                        <h2>温馨提示</h2>
                        <p>在定下来面谈或者上庭日期之后越早预约越好，给自己充分的时间调整答案</p>
                    </section>

                    <section className="service-contact">
                        <h2>预约咨询</h2>
                        <div className="contact-info-preview">
                            <p><strong>微信：</strong>winnieaaaaa111</p>
                            <p><strong>邮箱：</strong>wentranslate@gmail.com</p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default InterviewCoaching;

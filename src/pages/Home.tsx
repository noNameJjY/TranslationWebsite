import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactInfo from '../components/ContactInfo';
import ServiceCard from '../components/ServiceCard';
import '../styles/Home.css';

const Home: React.FC = () => {
    return (
        <div className="home">
            <Header />
            <main>
                <h1>诚信，负责，高效 - winfanyi为您提供专业翻译服务</h1>
                <p>主营西雅图地区翻译，也可以去到其他城市为您服务！</p>
                <ContactInfo showAdditionalInfo={true} />
                <section id="services" className="services">
                    <h2>提供服务</h2>
                    <div className="service-list">
                        <ServiceCard 
                            title="USCIS 面谈翻译" 
                            description="提供专业的面试翻译服务。包括庇护，婚绿，入籍面谈"
                            path="/services/interview-translation"
                        />
                        <ServiceCard 
                            title="面试前培训" 
                            description="从翻译的角度提供面试前培训。"
                            path="/services/interview-coaching"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
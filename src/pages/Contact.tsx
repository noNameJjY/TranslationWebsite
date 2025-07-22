import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactInfo from '../components/ContactInfo';
import '../styles/Contact.css';

const Contact: React.FC = () => {
    return (
        <div className="contact-page">
            <Header />
            <main>
                <h1>联系我</h1>
                <ContactInfo showQRCodes={true} showExtendedDescription={true} />
                <div className="contact-info">
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
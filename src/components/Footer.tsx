import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-info">
                    <div className="footer-contacts">
                        <p><strong>联系方式</strong></p>
                        <p>微信：winnieaaaaa111</p>
                        <p>邮箱：wentranslate@gmail.com</p>
                    </div>
                </div>
                <p className="copyright">© {new Date().getFullYear()} 西雅图翻译💫. 保留所有权利.</p>
            </div>
        </footer>
    );
};

export default Footer;
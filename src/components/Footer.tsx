import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-info">
                    <div className="footer-contacts">
                        <p><strong>联系方式</strong></p>
                        <p>微信：winnieaaaaa111</p>
                        <p>邮箱：winfanyi1@gmail.com</p>
                        <p>Youtube：<a href="https://www.youtube.com/channel/UChMp_dAhFOPTm0mylbyGMoA" target="_blank" rel="noopener noreferrer">@winfanyi面谈翻译</a></p>
                    </div>
                </div>
                <p className="copyright">© {new Date().getFullYear()} winfanyi 保留所有权利.</p>
            </div>
        </footer>
    );
};

export default Footer;
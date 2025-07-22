import React, { useState } from 'react';

interface ContactInfoProps {
    showQRCodes?: boolean;
    showAdditionalInfo?: boolean;
    showExtendedDescription?: boolean;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ 
    showQRCodes = false, 
    showAdditionalInfo = false,
    showExtendedDescription = false
}) => {
    const [isModalOpen, setIsModalOpen] = useState<string | null>(null);

    return (
        <section className="contact-info">
            <h2>联系方式</h2>
            {showAdditionalInfo && (
                <p>如您已经收到面谈日期和时间，请包括在好友申请或者邮件中</p>
            )}
            <p><strong>微信：</strong>winnieaaaaa111</p>
            <p><strong>邮箱：</strong>winfanyi1@gmail.com</p>
            <p><strong>Youtube：</strong> <a href="https://www.youtube.com/channel/UChMp_dAhFOPTm0mylbyGMoA" target="_blank" rel="noopener noreferrer">@winfanyi面谈翻译</a></p>
            {showExtendedDescription ? (
                <p><strong>小红书号:西雅图翻译 winfanyi（无法回私信）/ 西雅图翻译💫 winfanyi：</strong> winnieaaaaa111 / 95650817554</p>
            ) : (
                <p><strong>小红书号：</strong>95650817554 或者 winnieaaaaa111</p>
            )}
            
            {showQRCodes && (
                <>
                    <p>
                        欢迎浏览之前写的帖子
                        因为平台问题，写的文章随时可能被下架，且大号：西雅图翻译 winfanyi 无法回私信。敬请谅解。
                    </p>
                    <div className="qr-code-container">
                        <img 
                            src="/images/winfanyi1_xhs.JPG"
                            alt="小红书二维码" 
                            className="qr-code"
                            title="点击图片放大二维码"
                            onClick={() => setIsModalOpen('xiaohongshuQR')}
                        />
                        <img 
                            src="/images/winfanyi2_xhs.JPG"
                            alt="小红书 winfanyi2"
                            className="qr-code"
                            title="点击图片放大二维码"
                            onClick={() => setIsModalOpen('winfanyi2QR')}
                        />
                        <p className="qr-hint">点击图片放大查看二维码</p>
                    </div>
                    {isModalOpen && (
                        <div className="modal-overlay" onClick={() => setIsModalOpen(null)}>
                            <div className="modal-content" onClick={e => e.stopPropagation()}>
                                <img 
                                    src={isModalOpen === 'xiaohongshuQR' ? '/images/winfanyi1_xhs.JPG' : '/images/winfanyi2_xhs.JPG'}
                                    alt={isModalOpen === 'xiaohongshuQR' ? '小红书二维码' : '小红书 winfanyi2'}
                                    className="qr-code-large"
                                />
                                <button 
                                    className="close-button"
                                    onClick={() => setIsModalOpen(null)}
                                >
                                    关闭
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </section>
    );
};

export default ContactInfo;

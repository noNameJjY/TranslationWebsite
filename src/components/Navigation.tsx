import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleServicesClick = (e: React.MouseEvent) => {
        e.preventDefault();
        
        if (location.pathname !== '/') {
            navigate('/');
        }
        
        setTimeout(() => {
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">主页</Link>
                </li>
                <li>
                    <a href="#services" onClick={handleServicesClick}>提供服务</a>
                </li>
                <li>
                    <Link to="/articles">面谈资讯分享</Link>
                </li>
                <li>
                    <Link to="/contact">联系我</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
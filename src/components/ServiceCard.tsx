import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
    title: string;
    description: string;
    path: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, path }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    };

    return (
        <div className="service-card" onClick={handleClick} role="button" tabIndex={0}>
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="read-more">点击查看详情 →</span>
        </div>
    );
};

export default ServiceCard;
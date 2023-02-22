import { Link } from 'react-router-dom';

export function Links({ title }) {
    return (
        <ul className="links">
            <Link to="/Severyanocha-Online-Shop">
                <li>Главная</li>
            </Link>
            <li>
                <img src="/Severyanocha-Online-Shop/img/shape.svg" height={12} alt=">" />
            </li>
            <li>{title}</li>
        </ul>
    );
}

import { Link } from 'react-router-dom';
import menu from './menu.css';

function Menu() {
    return (
        <div className="menu">
            <nav className="menu__nav">
                <ul className="menu__list">
                    <li className="menu__item"><Link to={`/`}>Главная</Link></li>
                    <li className="menu__item"><Link to={`/account`}>Аккаунт</Link></li>
                    <li className="menu__item"><Link to={`/type`}>Типы</Link></li>
                    <li className="menu__item"><Link to={`/stat`}>Статистика</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;

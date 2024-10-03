import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/basic-grid">Basic Grid</Link>
                </li>
                <li>
                    <Link to="/sorting-grid">Sorting Grid</Link>
                </li>
                <li>
                    <Link to="/filtering-grid">Filtering Grid</Link>
                </li>
                <li>
                    <Link to="/custom-grid">Custom Grid</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;

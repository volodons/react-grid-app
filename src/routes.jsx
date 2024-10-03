import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import BasicGridPage from './pages/BasicGridPage';
import CustomGridPage from './pages/CustomGridPage';
import FilteringGridPage from './pages/FilteringGridPage';
import SortingGridPage from './pages/SortingGridPage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/basic-grid" element={<BasicGridPage />} />
                <Route path="/custom-grid" element={<CustomGridPage />} />
                <Route path="/filtering-grid" element={<FilteringGridPage />} />
                <Route path="/sorting-grid" element={<SortingGridPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;

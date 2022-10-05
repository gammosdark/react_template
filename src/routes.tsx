import { Route, Routes } from 'react-router-dom';

import { NotFoundPage } from './pages/notfound';
import { WelcomePage } from './pages/welcome';

export const routes = (
    <Routes>
        <Route path="/" element={<WelcomePage/>}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
    </Routes>
);
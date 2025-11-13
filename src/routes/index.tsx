import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home';
import { Blog } from '../pages/blog';
import { ROUTES } from '../constants';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path='/Home' element={<HomePage />} />
      <Route path={ROUTES.BLOG} element={<Blog />} />
    </Routes>
  );
};

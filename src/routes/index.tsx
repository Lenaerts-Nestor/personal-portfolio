import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home';
import { Blog } from '../pages/blog';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/Home' element={<HomePage />} />
      <Route path='/Blog' element={<Blog />} />
    </Routes>
  );
};

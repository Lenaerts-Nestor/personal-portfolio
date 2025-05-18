import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home'; // Changed to default import
import { Blog } from '../pages/blog';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} /> // Changed to HomePage
      <Route path='/Home' element={<HomePage />} /> // Changed to HomePage
      <Route path='/Blog' element={<Blog />} />
    </Routes>
  );
};

import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { About } from '../pages/about';
import { Blog } from '../pages/blog';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Blog' element={<Blog />} />
      {/* Placeholder for project details */}
      <Route
        path='/projects/:id'
        element={
          <div className='p-8 text-center'>
            Project detail page coming soon!
          </div>
        }
      />
    </Routes>
  );
};

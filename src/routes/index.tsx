import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Home' element={<Home />} />
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

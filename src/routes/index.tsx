import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import HomePage from '../pages/home';
import { Blog } from '../pages/blog';
import { ROUTES } from '../constants';

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

// Wrapper component for page transitions
const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
  >
    {children}
  </motion.div>
);

export const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path={ROUTES.HOME} element={<PageTransition><HomePage /></PageTransition>} />
        <Route path='/Home' element={<PageTransition><HomePage /></PageTransition>} />
        <Route path={ROUTES.BLOG} element={<PageTransition><Blog /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

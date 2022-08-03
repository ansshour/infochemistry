import { Suspense, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { AppRoutes } from './components/AppRoutes';
import { useLocation } from 'react-router-dom';
import { Loader } from './components/UI/Loader/Loader';

function App() {

  const { pathname } = useLocation();

  return (
    <>
      <Suspense fallback={<Loader />}>
        {pathname.includes("auth") || pathname.includes("register") || pathname.includes("restore") ? (
          <AppRoutes />
        ) : (
          <>
            <Header />
            <AppRoutes />
            <Footer />
          </>
        )}
      </Suspense>
    </>
  );
}

export default App;

import { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { AppRoutes } from './components/AppRoutes';
import { useLocation } from 'react-router-dom';

function App() {

  const { pathname } = useLocation();

  return (
    <>
      {pathname.includes("auth") || pathname.includes("register") || pathname.includes("restore") ? (
        <AppRoutes />
      ) : (
        <>
          <Header />
          <AppRoutes />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;

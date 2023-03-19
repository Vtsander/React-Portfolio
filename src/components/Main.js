import { useState, useEffect } from 'react';
import 'bootstrap/js/dist/alert';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './Header';
import Footer from './Footer';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import Home from '../pages/Home';

const pages = {
    Home: Home,
    About: About,
    Projects: Projects,
    Contact: Contact,
    Resume: Resume,
  };
  

const Main = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && pages[hash]) {
      setCurrentPage(hash);
    }
  }, []);

  const PageComponent = pages[currentPage];

  return (
    <div className="container">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <PageComponent />
      <Footer />
    </div>
  );
}

export default Main;

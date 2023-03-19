import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import Home from '../pages/Home';

const pages = {
  Home,
  about: About,
  portfolio: Projects,
  contact: Contact,
  resume: Resume,
};

function Main() {
  const [currentPage, setCurrentPage] = useState('about');
  
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

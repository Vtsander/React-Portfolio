import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Samples from './Samples';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import Home from '../pages/Home';

function Main() {
  const hash = window.location.hash.slice(1) || 'about';
  const [currentPage, setCurrentPage] = useState(hash);

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'about':
        return <About />;
      case 'portfolio':
        return <Projects />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="container">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default Main;
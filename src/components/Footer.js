import 'bootstrap/js/dist/alert';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from 'react';
import socials from '../components/Samples';

const List = ({ social }) => {
  const [isHover, setIsHover] = useState(false);
  const styles = {
    socialLink: {
      width: '60px',
      height: '70px',
      margin: '0px 30px',
      opacity: isHover ? 1 : 0.5,
    },
  };

  const handleEvent = ({ type }) =>
    type === 'mouseenter' ? setIsHover(true) : setIsHover(false);

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={handleEvent}
      onMouseLeave={handleEvent}
    >
      <img
        src={social.img.src}
        alt={social.img.alt}
        style={styles.socialLink}
      />
    </a>
  );
};

function Footer() {
  return (
    <footer className="text-center m-5">
      {socials.map((social) => (
        <List key={social.href} social={social} />
      ))}
    </footer>
  );
}

export default Footer;
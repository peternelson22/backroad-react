import { socialLinks } from '../data';
import PageLinks from './PageLinks';

const Footer = () => {
  return (
    <footer className='section footer'>
      <PageLinks classLinks='footer-links' classLink='footer-link' />

      <ul className='footer-icons'>
        {socialLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              target='_blank'
              className='footer-icon'
              rel='noreferrer'
            >
              <i className={link.icon}></i>
            </a>
          </li>
        ))}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'></span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;

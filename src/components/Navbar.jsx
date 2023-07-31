import logo from '../assets/images/logo.svg';
import { socialLinks } from '../data';
import PageLinks from './PageLinks';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <PageLinks id='nav-links' classLinks='nav-links' classLink='nav-link' />

        <ul className='nav-icons'>
          {socialLinks.map((icon) => (
            <li key={icon.id}>
              <a
                href={icon.href}
                target='_blank'
                className='nav-icon'
                rel='noreferrer'
              >
                <i className={icon.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

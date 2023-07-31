import { pageLinks } from '../data';

// eslint-disable-next-line react/prop-types
const PageLinks = ({ id, classLinks, classLink }) => {
  return (
    <ul className={classLinks} id={id}>
      {pageLinks.map((link) => (
        <li key={link.id}>
          <a href={link.href} className={classLink}>
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default PageLinks;

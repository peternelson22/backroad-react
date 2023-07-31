// eslint-disable-next-line react/prop-types
const Tour = ({ img, date, title, info, country, duration, cost }) => {
  return (
    <article className='tour-card'>
      <div className='tour-img-container'>
        <img src={img} className='tour-img' alt='' />
        <p className='tour-date'>{date}</p>
      </div>
      <div className='tour-info'>
        <div className='tour-title'>
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className='tour-footer'>
          <p>
            <span>
              <i className='fas fa-map'></i>
            </span>{' '}
            {country}
          </p>
          <p>{duration}</p>
          <p>{cost}</p>
        </div>
      </div>
    </article>
  );
};
export default Tour;

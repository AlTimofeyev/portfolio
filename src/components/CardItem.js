import React from 'react';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <a 
          className='cards__item__link' 
          href={props.url}
          target='_blank'
          rel='noopener noreferrer'
        >
          <figure className='cards__item__pic-wrap' data-category={props.lable}>
            <img 
              className='cards__item__img'
              src={process.env.PUBLIC_URL + props.src}
              alt={props.alt} 
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
};

export default CardItem;
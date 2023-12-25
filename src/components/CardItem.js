import React from 'react';
import './CardItem.scss';

function CardItem(props) {
    return (
        <div className='card-item'>
            <div className='card-item-container'>
                <a
                    className='card-link'
                    href={props.url}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <figure className='image-container' data-tech={props.label}>
                        <img
                            className='project-sample'
                            src={process.env.PUBLIC_URL + props.src}
                            alt={props.alt}
                        />
                    </figure>
                    <div className='title-container'>
                        <h3 className='title'>{props.title}</h3>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default CardItem
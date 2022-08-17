import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Projects</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src='/images/FirPinecones.JPG'
                        text='Explore The Pinecones'
                        label='Tree'
                        path='/contacts'
                    />
                    <CardItem 
                        src='/images/Gemi-TimeToDyeWithYou.jpeg'
                        text='Explore The Pinecones'
                        label='Tree'
                        path='/'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/FirPinecones.JPG'
                        text='Explore The Pinecones'
                        label='Tree'
                        path='/contacts'
                    />
                    <CardItem 
                        src='images/ALZi-Departure.jpeg'
                        text='Explore The Pinecones'
                        label='Tree'
                        path='/contacts'
                    />
                    <CardItem 
                        src='images/FirPinecones.JPG'
                        text='Explore The Pinecones'
                        label='Tree'
                        path='/contacts'
                    />
                    <CardItem 
                        src='images/FirPinecones.JPG'
                        text='Explore The Pinecones'
                        label='plee'
                        path='/contacts'
                    />
                    <CardItem 
                        src='images/FirPinecones.JPG'
                        text='Explore The Pinecones'
                        label='fro'
                        path='/contacts'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Cards;
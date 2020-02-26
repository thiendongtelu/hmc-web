import React from 'react';

import './carousel-item.style.scss';

const CarouselItem = (props) => {
    return (
        <div className='carousel-container'>
            <div className='carousel-bg-image'>
                <img src={props.bg} alt='carousel' />
            </div>
            <div className='carousel-inner'>
                <h3 className='title'>{props.title}</h3>
                <p className='sub'>{props.sub}</p>
            </div>
        </div>
    );
};

export default CarouselItem;
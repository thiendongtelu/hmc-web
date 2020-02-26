import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './carousel-item.style.scss';

const CarouselItem = (props) => {
    return (
        <div className='carousel-container'>
            <div className='carousel-bg-image'>
                <img src={props.bg} alt='carousel' />
            </div>
            <div className='carousel-inner'>
                <h2 className='title'>{props.title}</h2>
                <p className='sub'>{props.sub}</p>
            </div>
            <div className='button'>
                <CustomButton >Xem thêm</CustomButton>
            </div>
        </div>
    );
};

export default CarouselItem;
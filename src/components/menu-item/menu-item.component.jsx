import React from 'react';

import * as ROUTES from '../../constants/routes';

import {Link} from 'react-router-dom';

import './menu-item.style.scss';

export const Menu = () => {
    return (
        <div className='menu'>
            <Link to ={ROUTES.HOME}>
                HOME
            </Link>
            <Link to ={ROUTES.ABOUT_US}>
                ABOUT US
            </Link>
            <Link to ={ROUTES.PROJECT}>
                PROJECT
            </Link>
            <Link to ={ROUTES.CONTACT}>
                CONTACT
            </Link>
        </div>
    )
};

export default Menu;


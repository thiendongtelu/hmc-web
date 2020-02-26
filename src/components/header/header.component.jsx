import React from 'react';

import HeaderInfo from '../header-info/header-info.component';
import logo from '../../assets/image/logo.jpg';

import './header.style.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img src={logo} alt='logo' className='logo-image' />
            </div>
            <div className='info'>
                <HeaderInfo type="phone" theme="filled" title='Phone' sub='0375.800.833' border='true' />
                <HeaderInfo type="mail" theme="filled" title='Email' sub='hustmediaclub@gmail.com' border='true'/>
                <HeaderInfo type="environment" theme="filled" title='Address' sub='No.1 Dai Co Viet street'/>
            </div>
        </div>
    );
};

export default Header;
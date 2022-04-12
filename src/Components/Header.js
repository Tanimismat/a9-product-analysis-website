import React from 'react';

import CustomLink from './CustomLink';

const Header = () => {
    return (
        <div className='d-flex justify-content-center'>
            <CustomLink className='link' to='/'>HOME</CustomLink>
            <CustomLink className='link' to='/reviews'>REVIEWS</CustomLink>
            <CustomLink className='link' to='/dashboard'>DASHBOARD</CustomLink>
            <CustomLink className='link' to='/blogs'>BLOGS</CustomLink>
            <CustomLink className='link' to='/about'>ABOUT</CustomLink>
            <CustomLink className='link' to='/contact'>CONTACT</CustomLink>

        </div>
    );
};

export default Header;
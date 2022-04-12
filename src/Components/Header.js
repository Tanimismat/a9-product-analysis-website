import React from 'react';

import CustomLink from './CustomLink';

const Header = () => {
    return (
        <div className='d-flex justify-content-center'>
            <CustomLink className='link' to='/'>Home</CustomLink>
            <CustomLink className='link' to='/reviews'>Reviews</CustomLink>
            <CustomLink className='link' to='/dashboard'>Dashboard</CustomLink>
            <CustomLink className='link' to='/blogs'>Blogs</CustomLink>
            <CustomLink className='link' to='/about'>About</CustomLink>
            <CustomLink className='link' to='/contact'>Contact</CustomLink>

        </div>
    );
};

export default Header;
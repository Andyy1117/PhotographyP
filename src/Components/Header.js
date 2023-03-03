import React from 'react';
import Logo from '../img/Header/logo2.svg';
import Socials from './Socials';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';

const Header = () => {
// const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* logo */}
        <Link
   //       onMouseEnter={mouseEnterHandler}
    //      onMouseLeave={mouseLeaveHandler}
          to={'/'}
          className='max-w-[200px]'
        >
          <img src={Logo} alt='' />
        </Link>
        {/* nav - initially hidden - show on desktop mode */}
        <nav
          className='hidden xl:flex gap-x-12 font-semibold'
       //   onMouseEnter={mouseEnterHandler}
        //  onMouseLeave={mouseLeaveHandler}
        >
          <Link
            to={'/'}
            className='text-[#696c6d] hover:text-primary transition'
          >
            Home
          </Link>
          <Link
            to={'/about'}
            className='text-[#696c6d] hover:text-primary transition'
          >
            About
          </Link>
          <Link
            to={'/portfolio'}
            className='text-[#696c6d] hover:text-primary transition'
          >
            Porftolio
          </Link>
          <Link
            to={'/contact'}
            className='text-[#696c6d] hover:text-primary transition'
          >
            Contact
          </Link>
        </nav>
      </div>
      {/* socials */}
      <Socials />
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
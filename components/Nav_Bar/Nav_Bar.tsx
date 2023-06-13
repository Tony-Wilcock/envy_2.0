import Image from 'next/image';
import './Nav_Bar.css';
import logo from '@/public/logo-transparent.png';
import Nav_Bar_Socials from './Nav_Bar_Socials';
import Hamburger from './Hamburger';
import Nav_List from './Nav_List';
import Button from '../Globals/Button';

const Navbar = () => {
  return (
    <>
      <header className='w-full h-[100px] fixed top-0 z-50 bg-light-gold'>
        <div className=' max-w-[1440px] flex justify-around items-center m-auto'>
          <div className='w-[100px] h-[100px] flex justify-center items-center'>
            <Button />
          </div>
          <a href='/'>
            <Image
              src={logo}
              alt='Envy logo'
              className='w-[90px] h-[90px] border-2 border-medium-gold rounded-full'
            />
          </a>
          <div className='w-[100px] h-[100px] invisible md:visible flex justify-center items-center'>
            <Nav_Bar_Socials />
          </div>
        </div>
      </header>

      {/* Mobile nav */}
      <div className='z-50 fixed top-0 right-0 flex justify-center items-center md:hidden overflow-hidden'>
        <Hamburger />
        <div className='flex flex-col justify-around items-center pt-24 bg-light-transparent border-l-2 border-b-2 border-medium-gold backdrop-blur-sm h-[80vh] w-[70vw] ease-in-out duration-[400ms] mob-nav-list'>
          <nav>
            <ul className='flex flex-col gap-10 items-center justify-around h-full w-full text-medium-gold font-bold'>
              <Nav_List />
            </ul>
          </nav>
          <Nav_Bar_Socials />
        </div>
      </div>

      {/* Desktop nav */}
      <div className='z-40 w-full hidden md:block fixed mt-[100px] bg-gradient-to-r from-medium-gold from-30% via-bg-gold to-medium-gold to-70%'>
        <nav>
          <ul className='max-w-[1000px] m-auto px-40 flex justify-around py-4 font-bold text-dark-gold'>
            <Nav_List />
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

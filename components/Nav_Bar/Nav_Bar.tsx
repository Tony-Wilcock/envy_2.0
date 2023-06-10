import Image from 'next/image';
import './Nav_Bar.css';
import logo from '@/public/logo.svg';
import Nav_Bar_Socials from './Nav_Bar_Socials';
import Hamburger from './Hamburger';
import Nav_List from './Nav_List';

const Navbar = () => {
  return (
    <>
      <header className='w-screen bg-[var(--clr-primary-blue)] h-20 sm:h-24 sticky top-0'>
        <div className='flex justify-around items-center text-center'>
          <a href='/'>
            <Image
              src={logo}
              alt='Envy logo'
              className='w-20 h-20 sm:w-24 sm:h-24'
            />
          </a>

          <p className='text-[var(--clr-accent-gold)] text-xl font-bold sm:text-3xl md:text-4xl'>
            Aesthetics Nurse &
            <br className='lg:hidden' /> Beauty Therapist
          </p>
          <span className='invisible md:visible'>
            <Nav_Bar_Socials />
          </span>
        </div>
      </header>
      <span className='absolute top-0 right-0 flex justify-center items-center md:hidden overflow-hidden'>
        <Hamburger />
        <div
          className='flex flex-col justify-around items-center 
            pt-24 bg-[var(--clr-primary-blue-transparent)] backdrop-blur-sm h-[80vh] w-[70vw] max-w-xs 
            ease-in-out duration-[400ms] mob-nav-list'
        >
          <nav>
            <ul className='flex flex-col gap-10 items-center justify-around h-full w-full text-[var(--clr-accent-gold)] font-bold'>
              <Nav_List />
            </ul>
          </nav>
          <Nav_Bar_Socials />
        </div>
      </span>
      <span className='hidden md:block'>
        <nav>
          <ul className='flex justify-around px-[20rem] py-4 font-bold text-[#1B2548] bg-gradient-to-r from-[#CEA49D] from-30% via-[#DCCDCB] to-[#CEA49D] to-70%'>
            <Nav_List />
          </ul>
        </nav>
      </span>
    </>
  );
};

export default Navbar;

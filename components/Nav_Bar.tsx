import Image from 'next/image';
import './Nav_Bar.css';
import logo from '@/public/logo.svg';
import Nav_Bar_Socials from './Nav_Bar_Socials';

const Navbar = () => {
  return (
    <header>
      <div className='flex items-center justify-between min-h-[100px] text-[#CEA49D] bg-[#1B2548] sm:px-2 md:px-[5rem] lg:px-[7rem] xl:px-[10rem] 2xl:px-[15rem]'>
        <a href='/'>
          <Image src={logo} alt='Envy logo' height={100} width={100} />
        </a>
        <h1 className='text-xl font-bold sm:text-3xl md:text-4xl text-center'>
          Aesthetics Nurse &
          <br className='lg:hidden' /> Beauty Therapist
        </h1>
        <span className='hidden md:block'>
          <Nav_Bar_Socials />
        </span>

        <div className='w-[100px] h-[100px] flex justify-center items-center md:hidden'>
          <label className='hamburger-menu z-50'>
            <input type='checkbox' />
            <span className='sr-only'>Menu</span>
          </label>
          <div className='ease-in-out duration-[400ms] absolute top-0 right-0 bg-[var(--clr-primary-blue-transparent)] backdrop-blur-sm w-1/3 min-w-[200px] max-w-[450px] h-3/4 rounded-bl-[3rem] border-l-4 border-b-4 border-[var(--clr-primary-blue)] mob-nav-list'>
            <ul className='flex flex-col items-center justify-around h-full w-full'>
              <li className='mt-16 hover-underline'>Home</li>
              <li className='hover-underline'>About</li>
              <li className='hover-underline'>Treatments</li>
              <li className='hover-underline'>Prices</li>
              <li className='hover-underline'>Gallery</li>
              <li className='hover-underline'>Contact</li>
              <Nav_Bar_Socials />
            </ul>
          </div>
        </div>
      </div>
      <div className='ease-in-out duration-[400ms] -translate-y-full opacity-0 md:translate-y-0 md:opacity-100'>
        <ul className='flex justify-around px-[20rem] py-4 font-bold text-[#1B2548] bg-gradient-to-r from-[#CEA49D] from-30% via-[#DCCDCB] to-[#CEA49D] to-70%'>
          <li className='hover-underline'>Home</li>
          <li className='hover-underline'>About</li>
          <li className='hover-underline'>Treatments</li>
          <li className='hover-underline'>Prices</li>
          <li className='hover-underline'>Gallery</li>
          <li className='hover-underline'>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

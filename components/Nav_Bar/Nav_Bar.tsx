import Image from 'next/image';
import './Nav_Bar.css';
import logo from '@/public/emzy-logo-transparent.png';
import Nav_Bar_Socials from './Nav_Bar_Socials';
import Hamburger from './Hamburger';
import Nav_List from './Nav_List';
import Buttons from '../Globals/Button';
import Links from 'next/link';

const Navbar = () => {
  return (
    <>
      <header className='w-full h-[var(--header-height)] fixed top-0 z-50 bg-primary-100'>
        <div className=' max-w-[1440px] flex justify-around items-center m-auto'>
          <div className='rounded-full'>
            <Links href='#contact'>
              <Buttons {...{ t: 'Book Now' }} />
            </Links>
          </div>
          <div>
            <Links href='/'>
              <Image
                src={logo}
                alt='Envy logo'
                className='w-[100px] h-[var(--header-height)]'
              />
            </Links>
          </div>
          <div className='w-[100px] h-[var(--header-height)] flex justify-center items-center'>
            <div className='invisible md:visible absolute'>
              <Nav_Bar_Socials />
            </div>
            <Hamburger />
            <aside className='mob-nav-list absolute ease-in-out duration-[400ms] md:hidden border-l-2 border-b-2 border-primary-900 bg-background-transparent backdrop-blur-sm right-0 top-0 w-[70vw] h-[80vh] flex flex-col items-center justify-between pt-[var(--header-height)] pb-[50px]'>
              <nav>
                <ul className='flex flex-col gap-10 items-center justify-around h-full w-full text-primary-900 text-xl font-bold'>
                  <Nav_List />
                </ul>
              </nav>
              <Nav_Bar_Socials />
            </aside>
          </div>
        </div>
      </header>

      {/* Desktop nav */}
      <div className='z-40 w-full hidden md:block fixed mt-[100px] bg-gradient-to-r from-primary-500 from-40% via-background-100 to-primary-500 to-60%'>
        <nav>
          <ul className='max-w-[1000px] m-auto px-40 flex justify-around py-4 font-bold text-primary-900'>
            <Nav_List />
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

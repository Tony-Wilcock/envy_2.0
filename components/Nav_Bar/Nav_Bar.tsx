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
      <header className='fixed top-0 z-50 h-[var(--header-height)] w-full bg-primary-100'>
        <div className=' m-auto flex max-w-[1440px] items-center justify-around'>
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
                className='h-[var(--header-height)] w-[100px]'
              />
            </Links>
          </div>
          <div className='flex h-[var(--header-height)] w-[100px] items-center justify-center'>
            <div className='invisible absolute md:visible'>
              <Nav_Bar_Socials />
            </div>
            <Hamburger />
            <aside className='mob-nav-list absolute right-0 top-0 flex h-[80vh] w-[70vw] flex-col items-center justify-between border-b-2 border-l-2 border-primary-900 bg-background-transparent pb-[50px] pt-[var(--header-height)] backdrop-blur-sm duration-[400ms] ease-in-out md:hidden'>
              <nav>
                <ul className='flex h-full w-full flex-col items-center justify-around gap-10 text-xl font-bold text-primary-900'>
                  <Nav_List />
                </ul>
              </nav>
              <Nav_Bar_Socials />
            </aside>
          </div>
        </div>
      </header>

      {/* Desktop nav */}
      <div className='fixed z-40 mt-[100px] hidden w-full bg-gradient-to-r from-primary-500 from-40% via-background-100 to-primary-500 to-60% md:block'>
        <nav>
          <ul className='m-auto flex max-w-[1000px] justify-around px-40 py-4 font-bold text-primary-900'>
            <Nav_List />
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

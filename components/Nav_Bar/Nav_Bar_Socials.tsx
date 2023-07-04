import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { SiTiktok } from 'react-icons/si';

const Nav_Bar_Socials = () => {
  return (
    <div className='grid justify-around'>
      <div className='grid grid-flow-col items-center justify-between w-24 sm:w-32 text-primary-900'>
        <a
          className='hover:scale-125 rounded-md transition-all'
          href='https://www.facebook.com/Envyaestheticsandbeautywigan'
          target='_blank'
        >
          <AiFillFacebook className='h-6 w-6 sm:w-8 sm:h-8' />
        </a>
        <a
          className='hover:scale-125 rounded-md transition-all'
          href='#'
          target='_blank'
        >
          <AiFillInstagram className='h-6 w-6 sm:w-8 sm:h-8' />
        </a>
        <a
          className='hover:scale-125 rounded-md transition-all'
          href='#'
          target='_blank'
        >
          <SiTiktok className='h-6 w-6 sm:w-8 sm:h-8' />
        </a>
      </div>
    </div>
  );
};

export default Nav_Bar_Socials;

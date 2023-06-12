import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { SiTiktok } from 'react-icons/si';

const Nav_Bar_Socials = () => {
  return (
    <div className='grid justify-around'>
      <div className='grid grid-flow-col items-center justify-between w-24 sm:w-32 text-[var(--clr-accent-gold)]'>
        <a
          className=' hover:text-[#F5E1E1] hover:bg-[var(--clr-accent-gold)] rounded-md'
          href='https://www.facebook.com/Envyaestheticsandbeautywigan'
          target='_blank'
        >
          <AiFillFacebook className='h-6 w-6 sm:w-8 sm:h-8' />
        </a>
        <a
          className=' hover:text-[#F5E1E1] hover:bg-[var(--clr-accent-gold)] rounded-md'
          href='#'
          target='_blank'
        >
          <AiFillInstagram className='h-6 w-6 sm:w-8 sm:h-8' />
        </a>
        <a
          className=' hover:text-[#F5E1E1] hover:bg-[var(--clr-accent-gold)] rounded-md'
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

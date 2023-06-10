import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { SiTiktok } from 'react-icons/si';

const Nav_Bar_Socials = () => {
  return (
    <div className='grid justify-around min-w-20 h-20 sm:w-24 sm:h-24'>
      <div className='grid grid-flow-col items-center justify-between w-20 sm:w-24 text-[var(--clr-accent-gold)]'>
        <a
          className=' hover:text-[#1B2548] hover:bg-[#CEA49D]'
          href='https://www.facebook.com/Envyaestheticsandbeautywigan'
          target='_blank'
        >
          <AiFillFacebook className='h-6 w-6' />
        </a>
        <a
          className=' hover:text-[#1B2548] hover:bg-[#CEA49D]'
          href='#'
          target='_blank'
        >
          <AiFillInstagram className='h-6 w-6' />
        </a>
        <a
          className=' hover:text-[#1B2548] hover:bg-[#CEA49D]'
          href='#'
          target='_blank'
        >
          <SiTiktok className='h-6 w-6' />
        </a>
      </div>
      <a
        className='h-7 text-xs mx-auto mt-4 border-2 rounded-full border-[#CEA49D] font-bold text-[#1B2548] hover:text-[#CEA49D] 
    bg-[#CEA49D] hover:bg-[#1B2548] p-1 px-2'
        href='https://www.fresha.com/a/envy-aesthetics-beauty-wigan-all-over-beauty-7-ladies-lane-bnfr2jpb'
        target='_blank'
      >
        Book Now
      </a>
    </div>
  );
};

export default Nav_Bar_Socials;

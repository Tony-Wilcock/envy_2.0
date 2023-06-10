import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { SiTiktok } from 'react-icons/si';

const Nav_Bar_Socials = () => {
  return (
    <div className='grid'>
      <div className='grid grid-flow-col gap-5 justify-between'>
        <a
          className=' hover:text-[#1B2548] hover:bg-[#CEA49D]'
          href='https://www.facebook.com/Envyaestheticsandbeautywigan'
          target='_blank'
        >
          <AiFillFacebook size={30} />
        </a>
        <a
          className=' hover:text-[#1B2548] hover:bg-[#CEA49D]'
          href='#'
          target='_blank'
        >
          <AiFillInstagram size={30} />
        </a>
        <a
          className=' hover:text-[#1B2548] hover:bg-[#CEA49D]'
          href='#'
          target='_blank'
        >
          <SiTiktok size={30} />
        </a>
      </div>
      <a
        className='mx-auto border-2 rounded-full border-[#CEA49D] font-bold text-[#1B2548] hover:text-[#CEA49D] 
    bg-[#CEA49D] hover:bg-[#1B2548] mt-4 p-1 px-2'
        href='https://www.fresha.com/a/envy-aesthetics-beauty-wigan-all-over-beauty-7-ladies-lane-bnfr2jpb'
        target='_blank'
      >
        Book Now
      </a>
    </div>
  );
};

export default Nav_Bar_Socials;

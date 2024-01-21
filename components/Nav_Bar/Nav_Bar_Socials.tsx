import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { SiTiktok } from 'react-icons/si';

const Nav_Bar_Socials = () => {
  return (
    <div className='grid justify-around'>
      <div className='grid w-24 grid-flow-col items-center justify-between text-primary-900 sm:w-32'>
        <a
          className='rounded-md transition-all hover:scale-125'
          href='https://www.facebook.com/profile.php?id=100093526459994'
          target='_blank'
        >
          <AiFillFacebook className='h-6 w-6 sm:h-8 sm:w-8' />
        </a>
        <a
          className='rounded-md transition-all hover:scale-125'
          href='https://www.instagram.com/emzynurseandbeauty/'
          target='_blank'
        >
          <AiFillInstagram className='h-6 w-6 sm:h-8 sm:w-8' />
        </a>
        <a
          className='rounded-md transition-all hover:scale-125'
          href='#'
          target='_blank'
        >
          <SiTiktok className='h-6 w-6 sm:h-8 sm:w-8' />
        </a>
      </div>
    </div>
  );
};

export default Nav_Bar_Socials;

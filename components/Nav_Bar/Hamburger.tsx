import Nav_Bar_Socials from './Nav_Bar_Socials';
import Nav_List from './Nav_List';

const Hamburger = () => {
  return (
    <>
      <label className='hamburger-menu z-50 m-7 absolute top-0 right-0'>
        <input type='checkbox' />
        <span className='sr-only'>Menu</span>
      </label>
    </>
  );
};

export default Hamburger;

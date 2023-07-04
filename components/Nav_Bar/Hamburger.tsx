const Hamburger = () => {
  return (
    <label className='hamburger-menu md:invisible absolute'>
      <input type='checkbox' />
      <span className='sr-only'>Menu</span>
    </label>
  );
};

export default Hamburger;

import Link from 'next/link';

const Nav_List = () => {
  return (
    <>
      <a href='#main'>
        <li className='hover-underline cursor-pointer'>Home</li>
      </a>
      <a href='#about'>
        <li className='hover-underline cursor-pointer'>About</li>
      </a>
      <a href='#treatments'>
        <li className='hover-underline cursor-pointer'>Treatments</li>
      </a>
      <a href='#prices'>
        {' '}
        <li className='hover-underline cursor-pointer'>Prices</li>
      </a>
      <a href='#gallery'>
        {' '}
        <li className='hover-underline cursor-pointer'>Gallery</li>
      </a>
      <a href='#contact'>
        {' '}
        <li className='hover-underline cursor-pointer'>Contact</li>
      </a>
      {/* <Link href='/'>
        <li className='hover-underline cursor-pointer'>Home</li>
      </Link>
      <Link href='#about'>
        <li className='hover-underline cursor-pointer'>About</li>
      </Link>
      <Link href='#treatments'>
        <li className='hover-underline cursor-pointer'>Treatments</li>
      </Link>
      <Link href='#prices'>
        {' '}
        <li className='hover-underline cursor-pointer'>Prices</li>
      </Link>
      <Link href='#gallery'>
        {' '}
        <li className='hover-underline cursor-pointer'>Gallery</li>
      </Link>
      <Link href='#contact'>
        {' '}
        <li className='hover-underline cursor-pointer'>Contact</li>
      </Link> */}
    </>
  );
};

export default Nav_List;

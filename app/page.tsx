import Image from 'next/image';
import SplashImage from '@/public/splash-image.png';

export default function Home() {
  return (
    <>
      <main className='max-w-full h-screen pt-[80px] text-center text-dark-gold md:pt-0'>
        <div className='h-full max-w-[1440px] md:pt-[156px] md:grid md:justify-start md:mr-[50%] xl:mx-auto'>
          <div className='-z-10 h-full absolute top-0 right-0 pt-20 overflow-y-hidden opacity-40 md:opacity-80 md:pt-[156px]'>
            <Image
              src={SplashImage}
              alt='Splash Image'
              className='object-cover h-full'
            />
          </div>

          <div className='h-1/2 flex justify-center items-start pt-10 md:h-fit'>
            <h1 className='md:text-4xl'>
              Welcome to <br />
              <span className='text-7xl md:text-9xl'>Envy </span>
              <br />
              <br className='hidden md:block' />
              <span className='text-2xl md:text-5xl'>
                Aesthetics &<br className='hidden md:block' /> Beauty
              </span>
            </h1>
          </div>

          <div className='h-1/2 flex justify-center items-end pb-20 pt-10 md:h-fit'>
            <p className='max-w-[50ch] mx-auto px-10 md:text-xl'>
              Envy Aesthetics Clinic & Beauty Salon in the heart of Wigan. Envy
              provides medical aesthetics care and treatments within the safe
              environment of a relaxing clinic and beauty room. All services are
              provided by Emma who is an NMC Registered Nurse and highly
              qualified beauty therapist.
            </p>
          </div>
        </div>
      </main>
      <section className='h-[calc(100vh-100px)] md:h-[calc(100vh-156px)] w-full bg-gray-500'></section>
    </>
  );
}

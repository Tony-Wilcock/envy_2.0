import Image from 'next/image';
import SplashImage from '@/public/home-image.png';

export default function Home() {
  return (
    <>
      <main className='max-w-full h-screen pt-[80px] text-center text-[var(--clr-accent-gold-dark)]'>
        <div className='h-full'>
          <div className='h-screen absolute top-0 pt-20 overflow-y-hidden -z-10 opacity-40'>
            <Image
              src={SplashImage}
              alt='Splash Image'
              className='object-cover h-full ml-auto'
            />
          </div>

          <div className='h-1/2 flex justify-center items-start pt-10'>
            <h1>
              Welcome to <br />
              <span className='text-7xl'>Envy </span>
              <br />
              <span className='text-2xl'>Aesthetics & Beauty</span>
            </h1>
          </div>

          <div className='h-1/2 flex justify-center items-end pb-20'>
            <p className='max-w-[80ch] mx-auto px-10'>
              Envy Aesthetics Clinic & Beauty Salon in the heart of Wigan. Emma
              provides medical aesthetics care and treatments within the safe
              environment of a relaxing clinic and beauty room. All services are
              provided by Emma who is an NMC Registered Nurse and highly
              qualified beauty therapist.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

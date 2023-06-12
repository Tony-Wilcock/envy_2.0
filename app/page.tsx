import Image from 'next/image';
import SplashImage from '@/public/splash-image.png';

export default function Home() {
  return (
    <main className='w-full h-screen flex flex-col justify-center items-center text-center'>
      <div className='h-full grid justify-center'>
        <div className='mt-[80px] flex justify-center items-center'>
          <h1>
            Welcome to <br />
            <span className='text-5xl'>Envy </span>
            <br />
            <span className='text-2xl'>
              Aesthetics & <br />
              Beauty
            </span>
          </h1>
        </div>

        <div>
          <Image
            src={SplashImage}
            alt='Splash Image'
            className='w-full object-contain shadow-inner'
          />
        </div>

        <div className='pb-5'>
          <p className='text-sm max-w-[80ch]'>
            Envy Aesthetics Clinic & Beauty Salon in the heart of Wigan. Emma
            provides medical aesthetics care and treatments within the safe
            environment of a relaxing clinic and beauty room. All services are
            provided by Emma who is an NMC Registered Nurse and highly qualified
            beauty therapist.
          </p>
        </div>
      </div>

      {/* Background blur */}
      <div className=' absolute top-0 left-0 z-10'>
        <div className='absolute top-0 w-full h-screen bg-gradient-to-b from-[#dccdcb] from-30% to-transparent to-45%' />
        <div className='absolute top-0 w-full h-screen bg-gradient-to-t from-[#dccdcb] from-35% to-transparent to-45%' />
        <div className='absolute top-0 w-full h-screen bg-gradient-to-r from-[#dccdcb] to-transparent to-50%' />
      </div>
    </main>
  );
}

import Image from 'next/image';
import EnvyRoom from '@/public/envy-room.png';

export default function Home() {
  return (
    <div className='grid justify-center items-center'>
      <main className='my-5 mx-8 lg:my-16'>
        <Image
          className='shadow-[20px_35px_60px_15px_rgba(0,0,0,0.3),6px_6px_20px_10px_rgba(0,0,0,0.19)] rounded-[4vw]'
          src={EnvyRoom}
          alt='Envy room image'
          height={450}
        />

        <h1 className='text-center text-[var(--clr-primary-blue)] mt-5 font-bold text-xl sm:text-2xl md:text-4xl'>
          I am a Registered Nurse & Beauty <br className='hidden sm:block' />{' '}
          Therapist based within All Over Beauty
        </h1>
      </main>
    </div>
  );
}

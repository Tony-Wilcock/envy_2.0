import Image from 'next/image';
import EnvyRoom from '@/public/envy-room.png';

export default function Home() {
  return (
    <>
      <main className='grid justify-center items-center-my-5 mx-10 md:my-5 lg:my-16'>
        <Image
          className='shadow-[20px_35px_60px_15px_rgba(0,0,0,0.3),6px_6px_20px_10px_rgba(0,0,0,0.19)] rounded-[4vw]'
          src={EnvyRoom}
          alt='Envy room image'
          height={450}
        />
      </main>
    </>
  );
}

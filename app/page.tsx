import Image from 'next/image';
import SplashImage from '@/public/splash-image.png';
import RoomImage from '@/public/envy-room.png';
import UclanImage from '@/public/Images/Logos/uclan-logo.jpg';
import EdgeHillImage from '@/public/Images/Logos/edge-hill-logo.jpg';
import DbsImage from '@/public/Images/Logos/dbs-logo.jpg';
import CdpImage from '@/public/Images/Logos/cdp-logo.jpg';
import RcnImage from '@/public/Images/Logos/rcn-logo.jpg';
import NmcImage from '@/public/Images/Logos/nmc-logo.jpg';
import StudexImage from '@/public/Images/Logos/studex-logo.jpg';
import FacesImage from '@/public/Images/Logos/faces-logo.jpg';
import CityGuilds from '@/public/Images/Logos/c&g-logo.jpg';
import PolicyBee from '@/public/Images/Logos/pb-logo.jpg';

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
              <span className='font-bold text-7xl md:text-9xl'>Envy </span>
              <br />
              <br className='hidden md:block' />
              <span className='font-bold text-2xl md:text-5xl'>
                Aesthetics &<br className='hidden md:block' /> Beauty
              </span>
            </h1>
          </div>

          <div className='h-1/2 flex justify-center items-end pb-20 md:h-fit'>
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
      <section className='h-[calc(100vh-100px)] md:h-[calc(100vh-156px)] w-full py-10 text-dark-gold'>
        <div className='h-full w-full text-center flex flex-col items-center justify-between'>
          <h2 className='text-2xl uppercase font-bold underline'>About</h2>
          <div className='flex items-center flex-col w-full max-w-[1440px] md:flex-row md:justify-around'>
            <p className='max-w-[50ch] my-10'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              recusandae quis, quasi eaque veniam, sunt, eligendi tempora porro
              est praesentium facere facilis nisi at! Beatae ad distinctio
              suscipit cum facere?
            </p>
            <div className='w-[90%] md:w-[50%] max-w-[550px] min-w-[380px] grid grid-cols-3 gap-5 p-5 rounded-xl'>
              <div className='grid gap-5 justify-center'>
                <Image
                  src={NmcImage}
                  alt='NMC logo'
                  className='shadow-xl max-w-full h-auto'
                />
                <Image
                  src={FacesImage}
                  alt='Faces logo'
                  className='shadow-xl max-w-full h-auto'
                />
                <Image
                  src={UclanImage}
                  alt='Uclan logo'
                  className='shadow-xl max-w-full h-auto'
                />
                <Image
                  src={EdgeHillImage}
                  alt='Edge Hill University logo'
                  className=' shadow-xl max-w-full h-auto'
                />
              </div>
              <div className='grid gap-5 justify-center'>
                <Image
                  src={RcnImage}
                  alt='RCN logo'
                  className='shadow-xl max-w-full h-auto'
                />
                <Image
                  src={StudexImage}
                  alt='Studex logo'
                  className='shadow-xl max-w-full h-auto'
                />
                <Image
                  src={CityGuilds}
                  alt='City and Guilds logo'
                  className='shadow-xl max-w-full h-auto'
                />
              </div>
              <div className='grid gap-5 justify-center'>
                <Image
                  src={DbsImage}
                  alt='DBS logo'
                  className='shadow-xl max-w-full h-auto'
                />
                <Image
                  src={CdpImage}
                  alt='CDP logo'
                  className='shadow-xl max-w-full h-auto'
                />
                <Image
                  src={PolicyBee}
                  alt='Policy Bee logo'
                  className='shadow-xl max-w-full h-auto'
                />
              </div>
            </div>
          </div>
          <div
            className='text-xs mx-auto mt-4 border-2 rounded-full border-medium-gold font-extrabold text-light-gold hover:text-medium-gold
      bg-medium-gold hover:bg-light-gold p-2 mb-2 px-4'
          >
            <button>Learn More</button>
          </div>
        </div>
      </section>
      {/* <section className='h-[calc(100vh-100px)] md:h-[calc(100vh-156px)] w-full bg-gray-300'></section>
      <section className='h-[calc(100vh-100px)] md:h-[calc(100vh-156px)] w-full bg-gray-500'></section>
      <section className='h-[calc(100vh-100px)] md:h-[calc(100vh-156px)] w-full bg-gray-700'></section>
      <section className='h-[calc(100vh-100px)] md:h-[calc(100vh-380px)] w-full bg-gray-900'></section>
      <footer className='h-56 w-full bg-slate-300'></footer> */}
    </>
  );
}

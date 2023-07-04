import Image from 'next/image';
import Carousel from '@/components/treatments/Carousel';
import SplashImage from '@/public/splash-image.png';
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
import PricePageImage from '@/public/Images/Imported/image-02.png';
import Link from 'next/link';
import Button from '@/components/Globals/Button';

export default function Home() {
  return (
    <div className='snap-y snap-mandatory scroll-smooth h-screen overflow-y-scroll overflow-x-hidden no-scrollbar'>
      {/* Main section */}
      <main
        id='main'
        className='s w-full h-screen text-center text-primary-900 selection:bg-primary-900 selection:text-primary-100'
      >
        <div className='snap-start h-full w-full max-w-[1440px] pt-[var(--header-height)] md:pt-[var(--header-w-nav-height)] md:grid md:justify-start md:mr-[50%] xl:mx-auto'>
          <div className='-z-10 h-[calc(100vh_-_var(--header-w-nav-height))] absolute top-[var(--header-height)] md:top-[var(--header-w-nav-height)] right-0 overflow-y-hidden opacity-40 md:opacity-80'>
            <Image
              src={SplashImage}
              alt='Splash Image'
              className='object-cover h-full'
            />
          </div>

          <div className='h-full w-full py-10 md:pl-20 grid items-baseline'>
            <div className='flex justify-center items-start'>
              <h1 className='md:text-4xl'>
                Welcome to <br />
                <span className='font-bold text-7xl lg:text-9xl'>Emzy </span>
                <br />
                <br className='hidden lg:block' />
                <span className='font-bold text-2xl lg:text-5xl'>
                  Aesthetics &<br className='hidden md:block' /> Beauty
                </span>
              </h1>
            </div>

            <div className='h-1/2 flex justify-center items-end md:h-fit'>
              <p className='max-w-[50ch] mx-auto px-10 lg:text-xl'>
                Located in the heart of Hindley. Emzy provides medical
                aesthetics care and treatments within the safe environment of a
                relaxing clinic and beauty room. All services are provided by
                Emma who is an NMC Registered Nurse and highly qualified beauty
                therapist.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* About section */}
      <section
        id='about'
        className='s h-screen w-full bg-background-100 text-primary-900 selection:bg-primary-900 selection:text-primary-100'
      >
        <div className='snap-start h-full w-full pt-[var(--header-height)] md:pt-[var(--header-w-nav-height)] md:p-10 text-center grid items-center justify-center'>
          <div>
            <h2 className='text-2xl lg:text-3xl uppercase font-bold underline'>
              About
            </h2>
          </div>

          <div className='grid items-center justify-center w-full max-w-[1000px] md:grid-cols-2'>
            <div className='grid grid-cols-3 gap-5 p-5 md:p-10 max-w-[300px] md:max-w-full mx-auto'>
              <div className='grid gap-5 justify-center'>
                <Image
                  src={NmcImage}
                  alt='NMC logo'
                  className='shadow-xl max-w-full h-auto hover:scale-150 transition-all'
                />
                <Image
                  src={FacesImage}
                  alt='Faces logo'
                  className='shadow-xl max-w-full h-auto hover:scale-150 transition-all'
                />
                <Image
                  src={UclanImage}
                  alt='Uclan logo'
                  className='shadow-xl max-w-full h-auto hover:scale-150 transition-all'
                />
                <Image
                  src={EdgeHillImage}
                  alt='Edge Hill University logo'
                  className=' shadow-xl max-w-full h-auto hover:scale-150 transition-all'
                />
              </div>
              <div className='grid gap-5 justify-center'>
                <Image
                  src={RcnImage}
                  alt='RCN logo'
                  className='shadow-xl max-w-full h-auto hover:scale-150 transition-all'
                />
                <Image
                  src={StudexImage}
                  alt='Studex logo'
                  className='shadow-xl max-w-full h-auto hover:scale-150 transition-all'
                />
                <Image
                  src={CityGuilds}
                  alt='City and Guilds logo'
                  className='shadow-xl max-w-full h-auto hover:scale-150 transition-all'
                />
              </div>
              <div className='grid gap-5 justify-center'>
                <Image
                  src={DbsImage}
                  alt='DBS logo'
                  className='shadow-xl max-w-full h-auto hover:scale-150 transition-all'
                />
                <Image
                  src={CdpImage}
                  alt='CDP logo'
                  className='shadow-xl max-w-full h-auto hover:scale-150 transition-all'
                />
                <Image
                  src={PolicyBee}
                  alt='Policy Bee logo'
                  className='shadow-xl max-w-full h-auto hover:scale-150 transition-all'
                />
              </div>
            </div>

            <div className='h-full w-full flex justify-center items-center'>
              <p className='s max-w-[40ch] sm:max-w-[50ch] md:p-10 text-center text-xs md:text-base lg:text-xl'>
                As a Registered Nurse and Certified Beauty Therapist, Emma has
                the experience and skills to help you build your own unique
                treatment that is completely customised to your needs. <br />
                <br /> A highly skilled nurse and an experienced beauty
                therapist providing an exceptional & bespoke service in a
                private clinic/treatment room. <br />
                <br /> Free Consultations Available for both men & women.
              </p>
            </div>
          </div>

          <div className='flex justify-center items-center rounded-full'>
            <Link href='/about' className='m-0 p-0 rounded-full'>
              <Button {...{ t: 'Learn More' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Treatments section */}
      <section
        id='treatments'
        className='s h-screen w-full text-primary-900 selection:bg-primary-900 selection:text-primary-100 bg-background-100'
      >
        <div className='snap-start h-full w-full pt-[var(--header-height)] md:pt-[var(--header-w-nav-height)] p-10 text-center grid items-center justify-center'>
          <div>
            <h2 className='text-2xl lg:text-3xl uppercase font-bold underline'>
              Treatments
            </h2>
          </div>
          <div className='max-w-[1440px]'>
            <Carousel />
          </div>
          <div></div>
        </div>
      </section>

      {/* Prices section */}
      <section
        id='prices'
        className='s h-screen w-full text-primary-900 selection:bg-primary-900 selection:text-primary-100 bg-gray-500'
      >
        <div className='snap-start h-full w-full pt-[var(--header-height)] md:pt-[var(--header-w-nav-height)] p-10 text-center grid items-center justify-center'>
          <div>
            <h2 className='text-2xl lg:text-3xl uppercase font-bold underline'>
              Prices
            </h2>
          </div>
          <div>
            <Image src={PricePageImage} alt='Beauty Image' className='w-2/3' />
          </div>
        </div>
      </section>

      {/* Gallery section */}
      <section
        id='gallery'
        className='s h-screen w-full text-primary-900 selection:bg-primary-900 selection:text-primary-100 bg-gray-700'
      >
        <div className='snap-start h-full w-full pt-[var(--header-height)] md:pt-[var(--header-w-nav-height)] p-10 text-center grid items-center justify-center'>
          <div>
            <h2 className='text-2xl lg:text-3xl uppercase font-bold underline'>
              Gallary
            </h2>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section
        id='contact'
        className='s h-screen w-full text-primary-900 selection:bg-primary-900 selection:text-primary-100 bg-gray-900'
      >
        <div className='snap-start h-full w-full pt-[var(--header-height)] md:pt-[var(--header-w-nav-height)] p-10 text-center grid items-center justify-center'>
          <div>
            <h2 className='text-2xl lg:text-3xl uppercase font-bold underline'>
              Contact
            </h2>
          </div>
          <div></div>
        </div>
      </section>

      {/* Footer Section */}
      {/* <footer className='h-56 w-full bg-slate-300'></footer> */}
    </div>
  );
}

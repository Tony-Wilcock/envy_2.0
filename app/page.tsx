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
    <div className='no-scrollbar h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth'>
      {/* Main section */}
      <main
        id='main'
        className='s h-screen w-full text-center text-primary-900 selection:bg-primary-900 selection:text-primary-100'
      >
        <div className='h-full w-full max-w-[1440px] snap-start pt-[var(--header-height)] md:mr-[50%] md:grid md:justify-start md:pt-[var(--header-w-nav-height)] xl:mx-auto'>
          <div className='absolute right-0 top-[var(--header-height)] -z-10 h-[calc(100vh_-_var(--header-w-nav-height))] overflow-y-hidden opacity-40 md:top-[var(--header-w-nav-height)] md:opacity-80 '>
            <Image
              src={SplashImage}
              alt='Splash Image'
              className='h-full object-cover'
            />
          </div>

          <div className='grid h-full w-full items-baseline py-10 md:pl-20'>
            <div className='flex items-start justify-center'>
              <h1 className='md:text-4xl'>
                Welcome to <br />
                <span className='text-7xl font-bold lg:text-9xl'>Emzy </span>
                <br />
                <br className='hidden lg:block' />
                <span className='text-2xl font-bold lg:text-5xl'>
                  Aesthetics &<br className='hidden md:block' /> Beauty
                </span>
              </h1>
            </div>

            <div className='flex h-1/2 items-end justify-center md:h-fit'>
              <p className='mx-auto max-w-[50ch] px-10 lg:text-xl'>
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
        <div className='grid h-full w-full snap-start items-center justify-center pt-[var(--header-height)] text-center md:p-10 md:pt-[var(--header-w-nav-height)]'>
          <div>
            <h2 className='text-2xl font-bold uppercase underline lg:text-3xl'>
              About
            </h2>
          </div>

          <div className='grid w-full max-w-[1000px] items-center justify-center md:grid-cols-2'>
            <div className='mx-auto grid max-w-[300px] grid-cols-3 gap-5 p-5 md:max-w-full md:p-10'>
              <div className='grid justify-center gap-5'>
                <Image
                  src={NmcImage}
                  alt='NMC logo'
                  className='h-auto max-w-full shadow-xl transition-all hover:scale-150'
                />
                <Image
                  src={FacesImage}
                  alt='Faces logo'
                  className='h-auto max-w-full shadow-xl transition-all hover:scale-150'
                />
                <Image
                  src={UclanImage}
                  alt='Uclan logo'
                  className='h-auto max-w-full shadow-xl transition-all hover:scale-150'
                />
                <Image
                  src={EdgeHillImage}
                  alt='Edge Hill University logo'
                  className=' h-auto max-w-full shadow-xl transition-all hover:scale-150'
                />
              </div>
              <div className='grid justify-center gap-5'>
                <Image
                  src={RcnImage}
                  alt='RCN logo'
                  className='h-auto max-w-full shadow-xl transition-all hover:scale-150'
                />
                <Image
                  src={StudexImage}
                  alt='Studex logo'
                  className='h-auto max-w-full shadow-xl transition-all hover:scale-150'
                />
                <Image
                  src={CityGuilds}
                  alt='City and Guilds logo'
                  className='h-auto max-w-full shadow-xl transition-all hover:scale-150'
                />
              </div>
              <div className='grid justify-center gap-5'>
                <Image
                  src={DbsImage}
                  alt='DBS logo'
                  className='h-auto max-w-full shadow-xl transition-all hover:scale-150'
                />
                <Image
                  src={CdpImage}
                  alt='CDP logo'
                  className='h-auto max-w-full shadow-xl transition-all hover:scale-150'
                />
                <Image
                  src={PolicyBee}
                  alt='Policy Bee logo'
                  className='h-auto max-w-full shadow-xl transition-all hover:scale-150'
                />
              </div>
            </div>

            <div className='flex h-full w-full items-center justify-center'>
              <p className='s max-w-[40ch] text-center text-xs sm:max-w-[50ch] md:p-10 md:text-base lg:text-xl'>
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

          <div className='flex items-center justify-center rounded-full'>
            <Link href='/about' className='m-0 rounded-full p-0'>
              <Button {...{ t: 'Learn More' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Treatments section */}
      <section
        id='treatments'
        className='s h-screen w-full bg-background-100 text-primary-900 selection:bg-primary-900 selection:text-primary-100'
      >
        <div className='grid h-full w-full snap-start items-center justify-center p-10 pt-[var(--header-height)] text-center md:pt-[var(--header-w-nav-height)]'>
          <div>
            <h2 className='text-2xl font-bold uppercase underline lg:text-3xl'>
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
        className='s h-screen w-full bg-gray-500 text-primary-900 selection:bg-primary-900 selection:text-primary-100'
      >
        <div className='grid h-full w-full snap-start items-center justify-center p-10 pt-[var(--header-height)] text-center md:pt-[var(--header-w-nav-height)]'>
          <div>
            <h2 className='text-2xl font-bold uppercase underline lg:text-3xl'>
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
        className='s h-screen w-full bg-gray-700 text-primary-900 selection:bg-primary-900 selection:text-primary-100'
      >
        <div className='grid h-full w-full snap-start items-center justify-center p-10 pt-[var(--header-height)] text-center md:pt-[var(--header-w-nav-height)]'>
          <div>
            <h2 className='text-2xl font-bold uppercase underline lg:text-3xl'>
              Gallary
            </h2>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section
        id='contact'
        className='s h-screen w-full bg-gray-900 text-primary-900 selection:bg-primary-900 selection:text-primary-100'
      >
        <div className='grid h-full w-full snap-start items-center justify-center p-10 pt-[var(--header-height)] text-center md:pt-[var(--header-w-nav-height)]'>
          <div>
            <h2 className='text-2xl font-bold uppercase underline lg:text-3xl'>
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

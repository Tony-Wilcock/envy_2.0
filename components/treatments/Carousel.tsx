'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useKeenSlider, KeenSliderPlugin } from 'keen-slider/react';
import './carousel.css';

import Aesthetics from '@/public/Images/Carousel/aesthetics-2.jpg';
import AntiWrinkle from '@/public/Images/Carousel/anti-wrinkle-2.jpg';
import Beauty from '@/public/Images/Carousel/beauty-2.jpg';
import FatLoss from '@/public/Images/Carousel/fat-dissolving-2.jpg';
import Vitamin from '@/public/Images/Carousel/vitamin-injections-2.jpg';
import EarPiercing from '@/public/Images/Carousel/ear-piercing-1.jpg';
import Link from 'next/link';
import Button from '../Globals/Button';

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`absolute top-1/2 h-8 w-8 -translate-y-1/2 cursor-pointer rounded-full bg-black fill-white p-1 opacity-30 hover:opacity-100 ${
        props.left ? 'left-1' : 'left-auto right-1'
      } ${disabled} fill-white opacity-50`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      {props.left && (
        <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
      )}
      {!props.left && (
        <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
      )}
    </svg>
  );
}

let z = 500;

const carousel: KeenSliderPlugin = (slider) => {
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }

  slider.on('created', () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on('detailsChanged', rotate);
};

const carousel2 = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      selector: '.carousel__cell',
      renderMode: 'custom',
      mode: 'free-snap',
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
        function removeActive() {
          slider.slides.forEach((slide) => {
            slide.classList.remove('active');
          });
        }

        removeActive();

        function addActive(idx: number) {
          slider.slides[idx].classList.add('active');
        }
        addActive(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      carousel,
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            // nextTimeout();
          });
          // nextTimeout();
        });
        // slider.on('dragStarted', clearNextTimeout);
        // slider.on('animationEnded', nextTimeout);
        // slider.on('updated', nextTimeout);
      },
    ]
  );

  function ActiveSlide() {
    const activeSlide = document.querySelector<HTMLElement>('.active');

    activeSlide?.addEventListener('mouseover', () => {
      if (activeSlide) {
        activeSlide.style.scale = '110%';
      }
    });
    activeSlide?.addEventListener('mouseout', () => {
      if (activeSlide) {
        activeSlide.style.scale = '100%';
      }
    });
  }

  var r = document.querySelector<HTMLElement>(':root');

  function changeWidth() {
    const width = window.innerWidth;

    if (r !== null) {
      const numberOfPics = 6;
      if (width < 768) {
        z = 50 * numberOfPics;
        r.style.setProperty('--carousel-width', '300px');
        r.style.setProperty('--carousel-height', '300px');
      } else if (width < 1024) {
        z = 60 * numberOfPics;
        r.style.setProperty('--carousel-width', '350px');
        r.style.setProperty('--carousel-height', '350px');
      } else {
        z = 80 * numberOfPics;
        r.style.setProperty('--carousel-width', '500px');
        r.style.setProperty('--carousel-height', '500px');
      }
    }
  }

  changeWidth();

  // Reload the page when the screen width changes
  window.addEventListener('resize', function () {
    location.reload();
  });

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className='wrapper flex h-full w-full select-none flex-col items-center justify-center'>
      <div className='scene h-[var(--carousel-height)] w-[var(--carousel-width)]'>
        <div
          className='carousel keen-slider flex items-center justify-center'
          ref={sliderRef}
        >
          <div className='carousel__cell group absolute left-0 flex h-[var(--carousel-height)] w-[var(--carousel-width)] flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-primary-900'>
            <Image
              src={Aesthetics}
              alt='Aesthetics Image'
              className='h-full w-full object-cover'
            />
            <div className='absolute bottom-0 top-1/3 flex translate-y-44 flex-col items-center justify-between bg-gradient-to-b from-transparent via-background-100-transparent via-10% to-primary-100 pt-5 transition-transform duration-500 group-hover:translate-y-0 lg:top-1/2'>
              <h3 className='text-xl font-bold uppercase'>Aesthetics</h3>
              <p className='px-10 text-xs lg:text-base'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit.
              </p>
              <Link href='/treatments/aesthetics' className='mb-5'>
                <Button {...{ t: 'Learn More' }} />
              </Link>
            </div>
          </div>
          <div className='carousel__cell group absolute left-0 flex h-[var(--carousel-height)] w-[var(--carousel-width)] flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-primary-900'>
            <Image
              src={AntiWrinkle}
              alt='AntiWrinkle Image'
              className='h-full w-full object-cover'
            />
            <div className='absolute bottom-0 top-1/3 flex translate-y-44 flex-col items-center justify-between bg-gradient-to-b from-transparent via-background-100-transparent via-10% to-primary-100 pt-5 transition-transform duration-500 group-hover:translate-y-0 lg:top-1/2'>
              <h3 className='text-xl font-bold uppercase'>Anti-Wrinkle</h3>
              <p className='px-10 text-xs lg:text-base'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit.
              </p>
              <Link href='/treatments/anti-wrinkle' className='mb-5'>
                <Button {...{ t: 'Learn More' }} />
              </Link>
            </div>
          </div>
          <div className='carousel__cell group absolute left-0 flex h-[var(--carousel-height)] w-[var(--carousel-width)] flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-primary-900'>
            <Image
              src={Beauty}
              alt='Beauty Image'
              className='h-full w-full object-cover'
            />
            <div className='absolute bottom-0 top-1/3 flex translate-y-44 flex-col items-center justify-between bg-gradient-to-b from-transparent via-background-100-transparent via-10% to-primary-100 pt-5 transition-transform duration-500 group-hover:translate-y-0 lg:top-1/2'>
              <h3 className='text-xl font-bold uppercase'>Beauty</h3>
              <p className='px-10 text-xs lg:text-base'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit.
              </p>
              <Link href='/treatments/beauty' className='mb-5'>
                <Button {...{ t: 'Learn More' }} />
              </Link>
            </div>
          </div>
          <div className='carousel__cell group absolute left-0 flex h-[var(--carousel-height)] w-[var(--carousel-width)] flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-primary-900'>
            <Image
              src={FatLoss}
              alt='FatLoss Image'
              className='h-full w-full object-cover'
            />
            <div className='absolute bottom-0 top-1/3 flex translate-y-44 flex-col items-center justify-between bg-gradient-to-b from-transparent via-background-100-transparent via-10% to-primary-100 pt-5 transition-transform duration-500 group-hover:translate-y-0 lg:top-1/2'>
              <h3 className='text-xl font-bold uppercase'>Fat-Dissolving</h3>
              <p className='px-10 text-xs lg:text-base'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit.
              </p>
              <Link href='/treatments/fat-loss' className='mb-5'>
                <Button {...{ t: 'Learn More' }} />
              </Link>
            </div>
          </div>
          <div className='carousel__cell group absolute left-0 flex h-[var(--carousel-height)] w-[var(--carousel-width)] flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-primary-900'>
            <Image
              src={Vitamin}
              alt='Vitamin Injection Image'
              className='h-full w-full object-cover'
            />
            <div className='absolute bottom-0 top-1/3 flex translate-y-44 flex-col items-center justify-between bg-gradient-to-b from-transparent via-background-100-transparent via-10% to-primary-100 pt-5 transition-transform duration-500 group-hover:translate-y-0 lg:top-1/2'>
              <h3 className='text-xl font-bold uppercase'>
                Vitamin Injections
              </h3>
              <p className='px-10 text-xs lg:text-base'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit.
              </p>
              <Link href='/treatments/vitamin' className='mb-5'>
                <Button {...{ t: 'Learn More' }} />
              </Link>
            </div>
          </div>
          <div className='carousel__cell group absolute left-0 flex h-[var(--carousel-height)] w-[var(--carousel-width)] flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-primary-900'>
            <Image
              src={EarPiercing}
              alt='Ear Piercing Image'
              className='h-full w-full object-cover'
            />
            <div className='absolute bottom-0 top-1/3 flex translate-y-44 flex-col items-center justify-between bg-gradient-to-b from-transparent via-background-100-transparent via-10% to-primary-100 pt-5 transition-transform duration-500 group-hover:translate-y-0 lg:top-1/2'>
              <h3 className='text-xl font-bold uppercase'>Ear Piercing</h3>
              <p className='px-10 text-xs lg:text-base'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit.
              </p>
              <Link href='/treatments/aesthetics' className='mb-5'>
                <Button {...{ t: 'Learn More' }} />
              </Link>
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className='dots mt-4 flex items-center justify-center p-4'>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={
                  'dot mx-1 h-3 w-3 cursor-pointer rounded-full p-1 focus:outline-none' +
                  (currentSlide === idx
                    ? ' active scale-150 bg-red-400'
                    : ' bg-slate-300')
                }
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default carousel2;

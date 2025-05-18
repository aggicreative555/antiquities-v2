import React, { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';

const Carousel = ({ images, options = {} }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const glide = new Glide(sliderRef.current, {
      type: 'carousel',
      perView: 1,
      focusAt: '0',
      gap: 0,
      autoplay: 6000,
      hoverpause: true,
      animationDuration: 3000,
      animationTimingFunc: 'ease-in-out',
      ...options,
    });

    glide.mount();

    return () => glide.destroy();
  }, [images, options]);

  return (
    <div ref={sliderRef} className="glide h-fit tv overflow-hidden">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {images.map((item, index) => (
            <li
              key={index}
              className="glide__slide relative flex items-center justify-center w-full"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-screen object-cover h-auto aspect-video hover:scale-110 transition-all duration-10 ease-in-out"
              />
              <div className="absolute px-4 py-2 bg-gradient-to-r from-black/60 via-black/30 to-black/60 h-full w-full ">
                <div className="text-center absolute bottom-1/2 left-1/2 translate-y-1/2 -translate-x-1/2 text-white flex flex-col gap-1 lg:bottom-2/3 items-center justify-center">
                  <span className=" font-garamond  md:visible invisible text-6xl p-4 uppercase tracking-tigher break-word border-b-[1px] border-white transition-all duration-200 ease-in-out">
                    {item.text}
                  </span>
                  <span className="invisible md:visible text-xl md:pt-4 italic font-garamond max-w-[400px] transition-all duration-200 ease-in-out">
                    {item.content}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;

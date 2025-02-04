import Image from 'next/image';
import { useEffect } from 'react';

export default function BannerExplore() {
  const handleScroll = () => {
    const bannerHeight = document.querySelector('.banner-section').offsetHeight;
    window.scrollTo({
      top: bannerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative w-full overflow-hidden banner-section">
      <div className="relative w-full h-[300px] md:h-[650px]">
        <Image
          src="/banner.jpg"
          alt="Explore Banner"
          width={1920}
          height={1080}
          priority
          quality={100}
          objectFit='cover'
          style={{
            width: '100%',
            height: '100%',
          }}
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center gap-8">
          <div className="text-center">
            <p className="text-white text-sm tracking-[0.3em] mb-2 font-light">FALL 2023</p>
            <h1 className="text-3xl md:text-5xl text-white font-bold tracking-wider">READY-TO-WEAR</h1>
            <p className="text-white text-sm tracking-[0.3em] mt-2 font-light">COLLECTION</p>
          </div>
          <button 
            onClick={handleScroll}
            className="text-white border border-white px-6 py-2 rounded-none hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2 tracking-wider text-sm"
          >
            DISCOVER
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div> 
      </div>
    </section>
  );
}
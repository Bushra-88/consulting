"use client";
import Image
 from "next/image";
const Hero = () => {
  return (
    <div className="relative">
      <Image src="/hero.jpg" alt="Hero" 
      width={1920}
      height={500}
      className="w-full h-auto object-cover" />
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-c text-5xl text-customDark font-bold hover:text-sky-700 text-center">
        Welkome bij Dilawarzada Consultatie
      </h1>
    </div>
  );
};

export default Hero;
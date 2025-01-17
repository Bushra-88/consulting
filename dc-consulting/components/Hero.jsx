"use client";
import Image from "next/image";
import { useEffect, useState } from "react"; // Import useEffect and useState

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false); // State to control visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Set visibility to true after short delay
    }, 200); // Adjust delay as needed
    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <div className="relative">
      <Image 
        src="/hero.jpg" 
        alt="Hero" 
        width={1920}
        height={500}
        className="w-full h-auto object-cover" 
      />
      <h1 
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-center transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        Welkome bij <br />
         <span className=" shadow-black hover:text-sky-600">Dilawarzada Consultatie</span> 
      </h1>
    </div>
  );
};

export default Hero;
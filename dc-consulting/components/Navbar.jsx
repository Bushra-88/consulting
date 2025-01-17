"use client";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa"; 

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-1 px-8 bg-customDark shadow-md sticky top-0 z-10"> 
      <div className="flex items-center">
        <Image 
          src="/DC-logo-1.png" 
          alt="Company Logo" 
          width={90} 
          height={90} 
        />
      </div>
      <div className="flex-grow text-center">
        <h2 className="text-yellow-500 text-xl font-bold hover:text-sky-300">Dilawarzada Consultatie</h2>
      </div>
      <div className="flex items-center">
        <Link
          href="https://wa.me/32487218610" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center mr-5 text-gray-100"
        >
          <FaWhatsapp className="w-6 h-6 mr-1 text-green-600" /> 
          
        </Link>
        <Link href="mailto:Seyar.dilawar@gmail.com" className="flex items-center">
          <FaEnvelope className="w-6 h-6 mr-1 text-blue-500" /> 
        </Link>
      </div>
    </nav>
  );
};


export default Navbar;
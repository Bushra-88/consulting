import Link from "next/link";
import Image from "next/image"; 
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="flex flex-col md:flex-row justify-between items-center px-4 py-4 bg-customDark text-white">
      <div className="flex items-center mb-2 md:mb-0">
        <span>&copy; {currentYear}  Alle rechten voorbehouden.</span> 
      </div>
      <div className="flex items-center justify-center mb-2 md:mb-0">
        <Image src="/DC-logo-1.png" alt="Company Logo" width={40} height={40} className="mr-2" /> {/* Logo on the left */}
        <h1 className="text-xl text-yellow-500 font-bold hover:text-sky-500">Dilawarzada Consultatie</h1> {/* Centered Company Name */}
      </div>
      <div className="text-sm text-right mb-2 md:mb-0">
        <Link href="mailto:Seyar.dilawar@gmail.com" className="flex items-center"> {/* Email */}
          <FaEnvelope className="w-6 h-6 mr-2 text-blue-500 " />
          <span className="text-md text-white hover:text-sky-700 hover:underline">Seyar.dilawar@gmail.com</span>
        </Link>
        <hr className="mt-1 mb-1"/>
        <Link href="https://wa.me/32487218610" target="_blank" rel="noopener noreferrer" className="flex items-center"> {/* WhatsApp number */}
          <FaWhatsapp className="w-6 h-6 mr-2 text-green-600" />
          <span className="text-md text-white hover:text-sky-700 hover:underline">+32487218610</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
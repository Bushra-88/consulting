"use client";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection); // Cleanup observer on unmount
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      className={`px-8 py-16 bg-gray-100 transition-opacity duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-customDark hover:text-sky-600">Over Ons</h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center italic leading-relaxed p-4 font-serif shadow-sm">
        Ons consultatiebedrijf helpt mensen met advies op verschillende gebieden. We geven uitgebreide tips over onderwijs en studies, inclusief keuzebegeleiding bij studierichtingen, schoolkeuze, en de beste studiemethoden om academisch succes te behalen. Daarnaast helpen we bij het kiezen van de juiste loopbaan op basis van individuele passies, vaardigheden, en de huidige arbeidsmarktbehoeften.
        <br />
        Ook ondersteunen we bij het starten van een eigen bedrijf, van het ontwikkelen van een bedrijfsplan tot het navigeren door juridische vereisten en financieringsmogelijkheden. Onze experts bieden juridisch advies over arbeidsrecht, zodat zowel werkgevers als werknemers goed geïnformeerd zijn over hun rechten en plichten.
        <br />
        Bovendien bieden we ondersteuning bij toekomstplanning, waar we klanten helpen om hun financiële en persoonlijke doelen te definiëren en een duidelijk actieplan op te stellen om deze te bereiken. Of het nu gaat om pensioenplanning, investeringen, of het creëren van een noodplan, ons team staat klaar om advies op maat te bieden.

        Ons advies is altijd persoonlijk en afgestemd op de unieke situatie en wensen van de klant. We begrijpen dat iedere klant verschillende behoeften en verwachtingen heeft, en daarom streven we ernaar om oprechte en opvolgbare oplossingen aan te bieden. Voor meer informatie en afspraken kunt u ons contacteren via WhatsApp of e-mail.
      </p>
      <div className="flex flex-col items-center mt-4">
        <Link href="https://wa.me/32487218610" target="_blank" rel="noopener noreferrer" className="flex items-center mb-2"> {/* WhatsApp number */}
          <FaWhatsapp className="w-6 h-6 mr-2 text-green-600" />
          <span className="text-lg text-customDark hover:text-sky-700 hover:underline">+32487218610</span>
        </Link>
        <Link href="mailto:Seyar.dilawar@gmail.com" className="flex items-center"> {/* Email */}
          <FaEnvelope className="w-6 h-6 mr-2 text-blue-500 " />
          <span className="text-lg text-customDark hover:text-sky-700 hover:underline">Seyar.dilawar@gmail.com</span>
        </Link>
      </div>
    </section>
  );
};

export default About;
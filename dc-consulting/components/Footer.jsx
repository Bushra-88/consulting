const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-8 py-4 bg-gray-800 text-white">
      <div>&copy; 2025 DC Consulting. All rights reserved.</div>
      <div className="text-sm">
        <a href="mailto:Seyar.dilawar@gmail.com" className="hover:underline">
          Seyar.dilawar@gmail.com
        </a>
        <span className="mx-2">|</span>
        <span>+32487218610</span>
      </div>
    </footer>
  );
};

export default Footer;
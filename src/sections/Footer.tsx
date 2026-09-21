import Image from "next/image";

import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Logo" width={28} height={28} />
          <span className="text-base font-semibold text-white">
            Mustafa Hasanain
          </span>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Mustafa Hasanain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
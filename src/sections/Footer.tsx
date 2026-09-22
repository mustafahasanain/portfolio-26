"use client";

import Image from "next/image";

import { socialImgs } from "../constants";
import { useI18n } from "@/i18n/context";

const Footer = () => {
  const { dictionary } = useI18n();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt={dictionary.logoAlt} width={28} height={28} />
          <span className="text-base font-semibold text-white">
            {dictionary.brandName}
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
              <img src={socialImg.imgPath} alt={socialImg.name} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} {dictionary.brandName}. {dictionary.footer}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

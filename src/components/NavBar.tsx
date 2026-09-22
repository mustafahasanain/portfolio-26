"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/i18n/context";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavBody,
  NavbarButton,
  NavbarLogo,
  NavItems,
} from "@/components/ui/resizable-navbar";

const NavBar = ({ page = "home" }: { page?: "home" | "projects" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale, dictionary } = useI18n();
  const homeHref = locale === "ar" ? "/ar" : "/";
  const projectsHref = locale === "ar" ? "/ar/projects" : "/projects";
  const navLinks = dictionary.nav.map((name, index) => ({
    name,
    link: index === 0 ? projectsHref : `${homeHref}#${["", "services", "stack", "commitment"][index]}`,
  }));
  const otherLocale = locale === "en" ? "ar" : "en";
  const switchPath = otherLocale === "ar"
    ? page === "projects" ? "/ar/projects" : "/ar"
    : page === "projects" ? "/projects" : "/";
  const languageSwitcher = (
    <Link
      href={switchPath}
      hrefLang={otherLocale}
      lang={otherLocale}
      dir={otherLocale === "ar" ? "rtl" : "ltr"}
      onClick={() => setIsMobileMenuOpen(false)}
      className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
      aria-label={otherLocale === "ar" ? "التبديل إلى العربية" : "Switch to English"}
    >
      {otherLocale === "ar" ? "العربية" : "English"}
      <Image
        src={otherLocale === "ar" ? "/flags/iq.svg" : "/flags/us.svg"}
        width={20}
        height={15}
        alt=""
        aria-hidden="true"
        className="h-[15px] w-5 shrink-0 rounded-[2px] ring-1 ring-white/20"
      />
    </Link>
  );

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo href={homeHref} name={dictionary.brandName} logoAlt={dictionary.logoAlt} />
        <NavItems items={navLinks} />
        <div className="flex items-center gap-3">
          {languageSwitcher}
          <NavbarButton href={`${homeHref}#contact`} variant="primary">{dictionary.contactButton}</NavbarButton>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo href={homeHref} name={dictionary.brandName} logoAlt={dictionary.logoAlt} />
          <div className="flex items-center gap-3">
            {languageSwitcher}
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              label={isMobileMenuOpen ? dictionary.menuClose : dictionary.menuOpen}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navLinks.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-white-50 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
          <NavbarButton
            href={`${homeHref}#contact`}
            variant="primary"
            className="w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {dictionary.contactButton}
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default NavBar;

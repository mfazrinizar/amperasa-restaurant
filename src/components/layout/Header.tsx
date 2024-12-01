"use client";
import Link from "next/link";
import { links } from "@/lib/link";
import React, { useEffect, useState } from "react";
import LogoSVG from "@/components/svg/LogoSVG";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Hamburger from "@/components/ui/Hamburger";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close the menu when navigating to a new route
    setIsMenuOpen(false);
  }, [pathname]);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuItemClick = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 1000);
  };

  return (
    <>
      {/* Backdrop for shadowing with animation */}
      <div
        className={clsx(
          "fixed top-0 left-0 z-30 w-full h-full transition-all duration-300 bg-black",
          isMenuOpen ? "opacity-50 visible" : "opacity-0 invisible"
        )}
        onClick={handleMenuToggle}
      ></div>

      <nav
        id="Header"
        className={clsx(
          "z-40 w-full transition",
          isHomepage &&
            (isScrolled || isMenuOpen ? "bg-neutral-900" : "bg-neutral-900/60"),
          isHomepage ? "fixed top-0" : "sticky top-0 bg-neutral-900"
        )}
      >
        <div className="container">
          <div className="w-full py-4 mx-auto lg:flex md:justify-between md:items-center">
            {/* Logo and Hamburger */}
            <div className="flex items-center justify-between w-full">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 text-2xl font-semibold text-neutral-100"
              >
                <LogoSVG width={50} height={50} bg={false} />
                <span className="flex">
                  <span className="text-primary-500 font-brush">Ampe</span>
                  <span className="text-white font-brush">RASA</span>
                </span>
              </Link>
              <Hamburger isOpen={isMenuOpen} setIsOpen={handleMenuToggle} />
            </div>

            {/* Navigation Links */}
            <div
              className={clsx(
                isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible",
                "lg:visible transition absolute inset-x-0 z-40 w-full px-6 py-4 duration-300 ease-in-out bg-neutral-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"
              )}
            >
              <div className="flex flex-col items-center gap-8 lg:flex-row lg:mx-6">
                {links.map(({ id, title, path }) => (
                  <Link
                    key={id}
                    onClick={pathname == path ? handleMenuItemClick : handleMenuToggle}
                    className={clsx(
                      "relative my-2 transition-colors duration-300 transform md:mx-4 md:my-0",
                      pathname == path
                        ? "text-primary-400"
                        : "text-neutral-200 hover:text-primary-400"
                    )}
                    href={path}
                  >
                    {title}
                    {pathname == path && (
                      <div className="absolute w-5 h-[3px] -translate-x-1/2 rounded-custom -bottom-2 left-1/2 bg-primary-400"></div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
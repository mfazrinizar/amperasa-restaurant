"use client";
import React from "react";
import Link from "next/link";
import ScrollAnimation from "@/components/animation/ScrollAnimation";
import useMediaQuery from "@/hooks/useMediaQuery";
import SocialLinkComp from "@/components/layout/SocialLinkComp";

export default function ContactUs() {
  const isMobile = useMediaQuery(`(max-width: 768px)`);

  return (
    <section id="ContactUs" className="bg-neutral-900 py-section">
      <ScrollAnimation className="container container--sm">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6">
            <h2 className="text-center lg:text-left text-neutral-100 heading-second">
              <span className="text-primary-500 font-bold">Contact Us</span> <br /> For More Info
            </h2>

            <address className="flex flex-col items-center mt-6 space-y-8 lg:items-start lg:items-left lg:mt-8">
              <div className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden w-6 h-6 lg:block text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <div className="flex flex-col gap-2 text-center lg:text-left">
                  <span className="truncate w-72 text-neutral-400">
                  -Jl. Raya Palembang - Prabumulih
                  </span>
                  <span className="truncate w-72 text-neutral-400">
                    Indralaya, Ogan Ilir Regency
                  </span>
                  <span className="truncate w-72 text-neutral-400">
                    South Sumatera, Indonesia
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-primary-500 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <Link
                  className="truncate text-neutral-400"
                  href={"tel:1234567890"}
                >
                  (123) 456-7890
                </Link>
              </div>

              <div className="flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-primary-500 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <Link
                  className="truncate w-fit text-neutral-400"
                  href={"mailto:contact@mfazrinizar.com"}
                >
                  contact@mfazrinizar.com
                </Link>
              </div>
            </address>

            <section className="mt-6 ">
              <p className="mb-2 text-center lg:text-left text-neutral-300">
                Follow Us
              </p>
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <SocialLinkComp />
              </div>
            </section>
          </div>

          {!isMobile && (
            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <iframe
                className="w-full"
                src="https://www.google.com/maps/embed/v1/place?q=Sriwijaya+University+Indralaya&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                width="800"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          )}
        </div>
      </ScrollAnimation>
    </section>
  );
}

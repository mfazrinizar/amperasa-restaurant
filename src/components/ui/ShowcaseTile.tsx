"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import Link from "next/link";
import useMenuTabStore from "@/hooks/useMenuTabStore";

type Props = {
  imgSrc: StaticImageData;
  title: string;
  // width: number;
  // height: number;
  span?: number;
  tabId: number;
};

export default function ShowcaseTile({
  imgSrc,
  title,
  // width = 384,
  // height = 256,
  span = 1,
  tabId,
}: Props) {
  const { setTab } = useMenuTabStore();

  return (
    <button
      onClick={() => setTab(tabId)}
      className={clsx(
        "overflow-hidden group relative w-full h-full group",
        span === 2 && "row-span-2"
      )}
    >
      <Link href={"/menu#menu"}>
        <span className="absolute top-0 left-0 z-10 w-full h-full transition duration-500 opacity-0 bg-gradient-to-r from-black group-hover:opacity-50"></span>
      </Link>
      <span className="absolute z-10 flex items-center gap-1 transition duration-300 translate-y-24 bottom-10 md:bottom-14 ease group-hover:translate-y-0 left-4 md:left-8">
        <span className="z-30 text-xl md:text-4xl">{title}</span>
      </span>
      <span className="absolute z-10 flex items-center gap-1 transition duration-300 delay-75 translate-y-14 bottom-4 md:bottom-6 ease group-hover:translate-y-0 left-4 md:left-8">
        <Link
          href={"/menu#menu"}
          className="z-30 flex flex-row items-center gap-1 text-base md:text-xl hover:underline"
        >
          Explore{" "}
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180 translate-x-0 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </span>
      <Image
        className="w-full h-full transition duration-500 group-hover:scale-110"
        // width={width}
        // height={height}
        src={imgSrc}
        loading="lazy"
        alt={title}
      />
    </button>
  );
}

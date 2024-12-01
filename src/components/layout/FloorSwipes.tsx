// components/layout/FloorSwipes.tsx
"use client";
import React from "react";
import FloorItem from "../ui/FloorItem";
import Floor1Img from "@public/book/floor_1.webp";
import Floor2Img from "@public/book/floor_2.webp";
import Floor3Img from "@public/book/floor_3.webp";
import ScrollAnimation from "../animation/ScrollAnimation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { paddingBot, paddingTop } from "@/lib/utils/props";
import clsx from "clsx";

const floors = [
  {
    id: 1,
    price: 25,
    category: "Floor",
    imgSrc: Floor1Img,
    title: "Floor 1",
    description: "Welcome to Floor 1, where you can enjoy the authentic taste of Palembang with our Pempek Kapal Selam Original. A large fish cake filled with a whole egg, served with a tangy vinegar sauce. Perfect for those who love traditional flavors.",
  },
  {
    id: 2,
    price: 30,
    category: "Floor",
    imgSrc: Floor2Img,
    title: "Floor 2",
    description: "Welcome to Floor 2, where you can indulge in the crispy delight of Pempek Kulit Original. These fish skin cakes are deep-fried to perfection and served with a spicy vinegar sauce. A must-try for those who enjoy a bit of crunch and spice.",
  },
  {
    id: 3,
    price: 35,
    category: "Floor",
    imgSrc: Floor3Img,
    title: "Floor 3",
    description: "Welcome to Floor 3, where you can savor the unique taste of Pempek Lenjer Original. Long cylindrical fish cakes, steamed and then fried, served with a sweet and sour sauce. Ideal for those who appreciate a balance of flavors.",
  },
];

type Props = {
  pb?: "md" | "xl";
  pt?: "md" | "xl";
};

export default function FloorSwipes({ pb = "md", pt = "md" }: Props) {
  return (
    <section
      id="FloorSwipes"
      className={clsx("mt-0 bg-neutral-900 featured-section", paddingTop[pt], paddingBot[pb])}
    >
      <ScrollAnimation className="container container--sm">
        <div className="mx-auto">
          <h2 className="relative mb-4 text-center heading-second font-bold text-neutral-200">
            <span className="relative z-10">Book a Table</span>
          </h2>
          <div className="flex items-center justify-center w-full">
            <svg
              className="self-center"
              width="150"
              height="15"
              viewBox="0 0 230 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.21704 1.23157L29.617 21.2316L57.9171 1.23157L86.317 21.2316L114.717 1.23157L143.017 21.2316L171.417 1.23157L199.817 21.2316L228.217 1.23157"
                stroke="#f00"
                className="stroke-primary-500"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <section className="mt-8 space-y-8 lg:mt-12">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              navigation={true}
              modules={[Navigation]}
            >
              {floors.map(({ id, price, imgSrc, title, description }) => {
                return (
                  <SwiperSlide key={id}>
                    <FloorItem
                      price={price}
                      imgSrc={imgSrc}
                      title={title}
                      description={description}
                      floorNumber={id}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </section>
        </div>
      </ScrollAnimation>
    </section>
  );
}
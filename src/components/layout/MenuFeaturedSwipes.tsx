"use client";
import React from "react";
import MenuFeaturedItem from "../ui/MenuFeaturedItem";
import SelamImg from "@public/menu/selam.webp";
import KulitImg from "@public/menu/kulit.webp";
import LenjerImg from "@public/menu/lenjer.webp";
import TekwanImg from "@public/menu/tekwan.webp";
import ScrollAnimation from "../animation/ScrollAnimation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { paddingBot, paddingTop } from "@/lib/utils/props";
import clsx from "clsx";

const menuItems = [
    {
      id: 1,
      price: 25,
      category: "Kapal Selam",
      imgScr: SelamImg,
      title: "Pempek Kapal Selam",
      description: "A large fish cake filled with a whole egg, served with a tangy vinegar sauce.",
    },
    {
      id: 2,
      price: 15,
      category: "Kulit",
      imgScr: KulitImg,
      title: "Pempek Kulit",
      description: "Crispy fish skin cakes, deep-fried to perfection, served with a spicy vinegar sauce.",
    },
    {
      id: 3,
      price: 18,
      category: "Lenjer",
      imgScr: LenjerImg,
      title: "Pempek Lenjer",
      description: "Long cylindrical fish cakes, steamed and then fried, served with a sweet and sour sauce.",
    },
    {
      id: 4,
      price: 20,
      category: "Tekwan",
      imgScr: TekwanImg,
      title: "Tekwan Oriental",
      description: "Fish ball soup with vermicelli, mushrooms, and jicama, served in a savory broth.",
    },
  ];

type Props = {
  pb?: "md" | "xl";
  pt?: "md" | "xl";
};

export default function MenuFeaturedSwipes({ pb = "md", pt = "md" }: Props) {
  return (
    <section
      id="MenuFeaturedSwipes"
      className={clsx("bg-neutral-900 featured-section", paddingTop[pt], paddingBot[pb])}
    >
      <ScrollAnimation className="container container--sm">
        <div className="mx-auto">
          <h2 className="relative mb-4 text-center heading-second text-neutral-200">
            <span className="relative z-10">Featured</span>
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
              {menuItems.map(({ id, price, imgScr, title, description }) => {
                return (
                  <SwiperSlide key={id}>
                    <MenuFeaturedItem
                      price={price}
                      imgSrc={imgScr}
                      title={title}
                      description={description}
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

import React from "react";
import MenuFeaturedItem from "@/components/ui/MenuFeaturedItem";
import SelamImg from "@public/menu/selam.webp";
import KulitImg from "@public/menu/kulit.webp";
import LenjerImg from "@public/menu/lenjer.webp";
import TekwanImg from "@public/menu/tekwan.webp";
import WaveSVG from "@/components/svg/WaveSVG";
import clsx from "clsx";
import { paddingBot, paddingTop } from "@/lib/utils/props";

const menuItems = [
    {
      id: 1,
      price: 25,
      category: "Kapal Selam",
      imgSrc: SelamImg,
      title: "Pempek Kapal Selam Original",
      description: "A large fish cake filled with a whole egg, served with a tangy vinegar sauce.",
    },
    {
      id: 2,
      price: 15,
      category: "Kulit",
      imgSrc: KulitImg,
      title: "Pempek Kulit Original",
      description: "Crispy fish skin cakes, deep-fried to perfection, served with a spicy vinegar sauce.",
    },
    {
      id: 3,
      price: 18,
      category: "Lenjer",
      imgSrc: LenjerImg,
      title: "Pempek Lenjer Original",
      description: "Long cylindrical fish cakes, steamed and then fried, served with a sweet and sour sauce.",
    },
    {
      id: 4,
      price: 20,
      category: "Tekwan",
      imgSrc: TekwanImg,
      title: "Tekwan Original",
      description: "Fish ball soup with vermicelli, mushrooms, and jicama, served in a savory broth.",
    },
  ];

type Props = {
  pb?: "md" | "xl";
  pt?: "md" | "xl";
};

export default function MenuFeatured({ pb = "md", pt = "md" }: Props) {
  return (
    <section
      id="MenuFeatured"
      className={clsx("bg-neutral-900", paddingTop[pt], paddingBot[pb])}
    >
      <div className="container container--sm">
        <div className="mx-auto">
          <h1 className="relative mb-4 heading-second text-neutral-200">
            <span className="relative z-10">Featured <span className="text-primary-500">Cuisines</span></span>
          </h1>
          <WaveSVG />

          {/* TODO - change to slider */}
          <section className="mt-8 space-y-8 lg:mt-12">
            {menuItems.map(({ id, price, imgSrc, title, description }) => {
              return (
                <MenuFeaturedItem
                  key={id}
                  price={price}
                  imgSrc={imgSrc}
                  title={title}
                  description={description}
                />
              );
            })}
          </section>
        </div>
      </div>
    </section>
  );
}

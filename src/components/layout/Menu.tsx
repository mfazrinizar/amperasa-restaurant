"use client";
import TabMenuItem from "@/components/ui/TabMenuItem";
import MenuItem from "@/components/ui/MenuItem";
import { paddingBot, paddingTop } from "@/lib/utils/props";
import clsx from "clsx";
import React from "react";
import useMenuTabStore from "@/hooks/useMenuTabStore";

const menu = {
  kapalSelam: [
    {
      id: 1,
      title: "Pempek Kapal Selam Original",
      price: 25,
      category: "kapalSelam",
      description: "A large fish cake filled with a whole egg, served with a tangy vinegar sauce.",
    },
    {
      id: 2,
      title: "Pempek Kapal Selam Spicy",
      price: 27,
      category: "kapalSelam",
      description: "A large fish cake filled with a whole egg, served with a spicy vinegar sauce.",
    },
    {
      id: 3,
      title: "Pempek Kapal Selam Cheese",
      price: 30,
      category: "kapalSelam",
      description: "A large fish cake filled with a whole egg and cheese, served with a tangy vinegar sauce.",
    },
    {
      id: 4,
      title: "Pempek Kapal Selam Special",
      price: 35,
      category: "kapalSelam",
      description: "A large fish cake filled with a whole egg and special spices, served with a tangy vinegar sauce.",
    },
  ],
  kulit: [
    {
      id: 1,
      title: "Pempek Kulit Original",
      price: 15,
      category: "kulit",
      description: "Crispy fish skin cakes, deep-fried to perfection, served with a spicy vinegar sauce.",
    },
    {
      id: 2,
      title: "Pempek Kulit Spicy",
      price: 17,
      category: "kulit",
      description: "Crispy fish skin cakes, deep-fried to perfection, served with a spicy vinegar sauce.",
    },
    {
      id: 3,
      title: "Pempek Kulit Cheese",
      price: 20,
      category: "kulit",
      description: "Crispy fish skin cakes with cheese, deep-fried to perfection, served with a spicy vinegar sauce.",
    },
    {
      id: 4,
      title: "Pempek Kulit Special",
      price: 22,
      category: "kulit",
      description: "Crispy fish skin cakes with special spices, deep-fried to perfection, served with a spicy vinegar sauce.",
    },
  ],
  lenjer: [
    {
      id: 1,
      title: "Pempek Lenjer Original",
      price: 18,
      category: "lenjer",
      description: "Long cylindrical fish cakes, steamed and then fried, served with a sweet and sour sauce.",
    },
    {
      id: 2,
      title: "Pempek Lenjer Spicy",
      price: 20,
      category: "lenjer",
      description: "Long cylindrical fish cakes, steamed and then fried, served with a spicy sweet and sour sauce.",
    },
    {
      id: 3,
      title: "Pempek Lenjer Cheese",
      price: 22,
      category: "lenjer",
      description: "Long cylindrical fish cakes with cheese, steamed and then fried, served with a sweet and sour sauce.",
    },
    {
      id: 4,
      title: "Pempek Lenjer Special",
      price: 25,
      category: "lenjer",
      description: "Long cylindrical fish cakes with special spices, steamed and then fried, served with a sweet and sour sauce.",
    },
  ],
  tekwan: [
    {
      id: 1,
      title: "Tekwan Original",
      price: 20,
      category: "tekwan",
      description: "Fish ball soup with vermicelli, mushrooms, and jicama, served in a savory broth.",
    },
    {
      id: 2,
      title: "Tekwan Spicy",
      price: 22,
      category: "tekwan",
      description: "Spicy fish ball soup with vermicelli, mushrooms, and jicama, served in a savory broth.",
    },
    {
      id: 3,
      title: "Tekwan Seafood",
      price: 25,
      category: "tekwan",
      description: "Fish ball soup with mixed seafood, vermicelli, mushrooms, and jicama, served in a savory broth.",
    },
    {
      id: 4,
      title: "Tekwan Special",
      price: 28,
      category: "tekwan",
      description: "Fish ball soup with special spices, vermicelli, mushrooms, and jicama, served in a savory broth.",
    },
  ],
};

type Props = {
  pb?: "md" | "xl";
  pt?: "md" | "xl";
};

export default function Menu({ pb = "md", pt = "md" }: Props) {
  const { tab, setTab } = useMenuTabStore();

  return (
    <section
      id="Menu"
      className={clsx(
        "bg-light-ivory relative",
        paddingTop[pt],
        paddingBot[pb]
      )}
    >
      <div id="menu" className="absolute -top-20"></div>
      <div className="container container--xs">
        <div className="mx-auto">
          <h2 className="relative mb-4 text-4xl font-bold text-center font-brush text-neutral-900">
            <span className="relative z-10">Our Menu</span>
          </h2>
        </div>

        <TabMenuItem tab={tab} setTab={setTab} />

        {tab == 0 &&
          menu.kapalSelam?.map(({ id, price, title, description }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
              price={price}
            />
          ))}
        {tab == 1 &&
          menu.kulit?.map(({ id, price, title, description }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
              price={price}
            />
          ))}
        {tab == 2 &&
          menu.lenjer?.map(({ id, price, title, description }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
              price={price}
            />
          ))}
        {tab == 3 &&
          menu.tekwan?.map(({ id, price, title, description }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
              price={price}
            />
          ))}
      </div>
    </section>
  );
}
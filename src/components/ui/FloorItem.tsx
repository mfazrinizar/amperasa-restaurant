// components/ui/FloorItem.tsx
import Image, { StaticImageData } from "next/image";
import React from "react";
import Button from "../ui/Button";
import useMustBeLoggedInNotification from "@/hooks/useMustBeLoggedInNotification";

type Props = {
  title: string;
  category?: string;
  description: string;
  imgSrc: StaticImageData | string;
  price: number;
};

export default function FloorItem({
  title,
  category,
  imgSrc,
  description,
  price,
}: Props) {
  const { showLoginNotification } = useMustBeLoggedInNotification();

  const handleBookTable = () => {
    showLoginNotification();
  };

  return (
    <section className="gap-8 lg:gap-16 lg:flex lg:items-center">
      <div className="lg:w-1/2">
        {category && (
          <p className="mb-1 text-lg tracking-wider uppercase text-primary-500">
            {category}
          </p>
        )}
        <h2 className="mb-3 text-2xl font-semibold capitalize text-neutral-200">
          {title}
        </h2>
        <p className="mb-5">{description}</p>
        <p className="text-3xl font-semibold">
          <span className="ml-2 text-xl font-normal">IDR </span>
          {price}K
        </p>
        <Button variant="primary" className="mt-4" onClick={handleBookTable}>
          Book a Table
        </Button>
      </div>

      <div className="mt-4 lg:w-1/2 lg:mt-0">
        <Image
          className="object-cover w-full h-64 rounded-lg md:h-96"
          src={imgSrc}
          loading="lazy"
          alt={title}
        />
      </div>
    </section>
  );
}
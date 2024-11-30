import React from "react";

type Props = {
  price: number;
  title: string;
  description: string;
};

export default function MenuItem({ price, title, description }: Props) {
  return (
    <div className="flex items-center justify-between gap-16 py-8 border-b text-neutral-900 border-b-neutral-300">
      <div>
        <h3 className="mb-2 text-xl font-medium">{title}</h3>
        <p>{description}</p>
      </div>
      <p><span className="self-center text-xl font-medium">{price}.-</span></p>
    </div>
  );
}

// components/ui/FloorItem.tsx
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import Button from "../ui/Button";
import useMustBeLoggedInNotification from "@/hooks/useMustBeLoggedInNotification";
import useUser from "@/hooks/useUser";
import { createBookTable } from "@/lib/network/dashboardQueries";
import { User } from "@/lib/types/userType";
import { toast } from "sonner";
import { redirect } from "next/navigation";

type Props = {
  title: string;
  category?: string;
  description: string;
  imgSrc: StaticImageData | string;
  price: number;
  floorNumber: number;
};

export default function FloorItem({
  title,
  category,
  imgSrc,
  description,
  price,
  floorNumber,
}: Props) {
  const user = useUser();
  const { showLoginNotification } = useMustBeLoggedInNotification();
  const [loading, setLoading] = useState(false);

  const handleBookTable = async () => {
    setLoading(true);
    if (!user) {
      showLoginNotification();
      return;
    }

    const success = await createBookTable(user.uid, floorNumber, price);

    setLoading(false);

    if (success) {
      toast.success("Table booked successfully.");
    } else {
      toast.error("Failed to book table. Please try again.");
    }

    redirect("/dashboard");
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
        <Button variant="primary" className="mt-4" onClick={handleBookTable} isLoading={loading}>
          {loading ? "Booking..." : "Book a Table"}
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
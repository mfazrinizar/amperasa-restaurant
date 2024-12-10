// components/ui/FloorItem.tsx

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import Button from "../ui/Button";
import useMustBeLoggedInNotification from "@/hooks/useMustBeLoggedInNotification";
import useUser from "@/hooks/useUserFooter";
import { createBookTable } from "@/lib/network/dashboardQueries";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Timestamp } from "firebase/firestore";

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
  const [date, setDate] = useState<string>("");
  const router = useRouter();

  const handleBookTable = async () => {
    setLoading(true);
    if (!user) {
      showLoginNotification();
      setLoading(false);
      return;
    }

    if (!date) {
      toast.error("Please select a booking date.");
      setLoading(false);
      return;
    }

    const selectedDate = new Date(date);
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    currentDate.setHours(0, 0, 0, 0); // Set the time to the start of the day for comparison

    if (selectedDate < currentDate) {
      toast.error("Booking date must be at least one day from now.");
      setLoading(false);
      return;
    }

    const timestamp = Timestamp.fromDate(selectedDate);

    const success = await createBookTable(user.uid, floorNumber, price, timestamp);

    setLoading(false);

    if (success) {
      toast.success("Table booked successfully.");
      router.push("/dashboard");
    } else {
      toast.error("Failed to book table. Please try again.");
    }
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
        <input
          type="datetime-local"
          className="mt-4 p-2 border rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().slice(0, 16)}
        />
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
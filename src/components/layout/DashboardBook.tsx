// components/DashboardBook.tsx
"use client";
import React, { useEffect, useState } from "react";
import { getUserBookTables, cancelBookTable } from "@/lib/network/dashboardQueries";
import { useRouter } from "next/navigation";
import useUser from "@/hooks/useUser";
import Button from "@/components/ui/Button";
import { toast } from "sonner";
import Image from "next/image";
import Floor1Img from "@public/book/floor_1.webp";
import Floor2Img from "@public/book/floor_2.webp";
import Floor3Img from "@public/book/floor_3.webp";
import clsx from "clsx";
import { paddingBot, paddingTop } from "@/lib/utils/props";
import { BookTable } from "@/lib/types/bookTableType";
import LogoSVG from "../svg/LogoSVG";
import LoadingSpinner from "../ui/LoadingSpinner";

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

export default function DashboardBook({ pb = "md", pt = "md" }: Props) {
    const user = useUser();
    const router = useRouter();
    const [bookTables, setBookTables] = useState<BookTable[]>([]);
    const [lastVisible, setLastVisible] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            fetchBookTables();
        }
    }, [user]);

    const fetchBookTables = async (lastDoc: any = null) => {
        setLoading(true);
        if (!user) return;
        const { bookTables, lastVisible } = await getUserBookTables(user.uid, lastDoc);
        setBookTables((prev) => [...prev, ...bookTables]);
        setLastVisible(lastVisible);
        setLoading(false);
    };

    const handleCancelBooking = async (bookTableId: string) => {
        if (!user) return;
        const success = await cancelBookTable(user.uid, bookTableId);
        if (success) {
            toast.success("Booking cancelled successfully.");
            setBookTables((prev) => prev.filter((table) => table.id !== bookTableId));
        } else {
            toast.error("Failed to cancel booking. Please try again.");
        }
    };

    const handleLogout = async () => {
        await router.push("/logout");
    };

    return (
        <section id="DashboardBook" className={clsx("bg-neutral-900", paddingTop[pt], paddingBot[pb])}>
            <div className="container container--sm">
                <div className="mx-auto">
                    <h1 className="relative mb-4 heading-second text-neutral-200 text-center font-bold">
                        <span className="relative z-10">Hello, <span className="text-primary-500">{user?.displayName}</span></span>
                    </h1>

                    <h1 className="relative mb-4 heading-second text-neutral-200 text-center font-bold">
                        <span className="relative z-10">Here are <span className="text-primary-500">Your Bookings</span></span>
                    </h1>

                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <LoadingSpinner />
                        </div>
                    ) : bookTables.length === 0 ? (
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-center text-neutral-400 mt-4 mb-4">You haven&apos;t booked any tables.</p>
                            <LogoSVG height={128} width={128} bg={true} />
                        </div>
                    ) : (
                        <section className="mt-8 space-y-8 lg:mt-12">
                            {bookTables.map(({ id, is_verified, date, table_floor, table_number, price }) => {
                                const floor = floors.find((floor) => floor.id === table_floor);
                                return (
                                    <div key={id} className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                                        <div className="lg:w-1/2">
                                            {floor?.category && (
                                                <p className="mb-1 text-lg tracking-wider uppercase text-primary-500">
                                                    {floor.category}
                                                </p>
                                            )}
                                            <h2 className="mb-3 text-2xl font-semibold capitalize text-neutral-200">
                                                {floor?.title}
                                            </h2>
                                            <p className="mb-5">{floor?.description}</p>
                                            <p className="text-3xl font-semibold">
                                                <span className="ml-2 text-xl font-normal">IDR </span>
                                                {price}K
                                            </p>
                                            <p className="text-lg text-neutral-400">
                                                {is_verified ? `Table Number: ${table_number}` : "Not Verified"}
                                            </p>
                                            <p className="text-lg text-neutral-400">
                                                Date: {new Date(date.seconds * 1000).toLocaleDateString()}
                                            </p>
                                            <Button variant="outlined" className="mt-4" onClick={() => handleCancelBooking(id!)} >
                                                Cancel Booking
                                            </Button>
                                        </div>

                                        <div className="mt-4 lg:w-1/2 lg:mt-0">
                                            <Image
                                                className="object-cover w-full h-64 rounded-lg md:h-96"
                                                src={floors[table_floor - 1].imgSrc}
                                                loading="lazy"
                                                alt={floors[table_floor - 1].title}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </section>
                    )}

                    {lastVisible && (
                        <Button variant="primary" className="mt-8" onClick={() => fetchBookTables(lastVisible)}>
                            Load More
                        </Button>
                    )}

                    <div className="flex justify-center mt-8">
                        <Button variant="primary" className="px-8 py-4 text-lg" onClick={handleLogout}>
                            Logout
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
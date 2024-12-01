"use client";
import Image from "next/image";
import KapalSelamImg from "@public/menu/selam.webp";
import TekwanImg from "@public/menu/tekwan.webp";
import LenjerImg from "@public/menu/lenjer.webp";
import KulitImg from "@public/menu/kulit.webp";
import PempekSVG from "@public/menu/pempek.svg";
import clsx from "clsx";
import { paddingBot, paddingTop } from "@/lib/utils/props";
import ScrollAnimation from "@/components/animation/ScrollAnimation";
import ShowcaseTile from "@/components/ui/ShowcaseTile";
import Link from "next/link";
import useMenuTabStore from "@/hooks/useMenuTabStore";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    pb?: "md" | "xl";
    pt?: "md" | "xl";
};

export default function Showcase({ pb = "md", pt = "md" }: Props) {
    const { setTab } = useMenuTabStore();
    const isMobile = useMediaQuery(`(max-width: 1280px)`);

    return (
        <section
            id="Showcase"
            className={clsx("bg-neutral-100", paddingTop[pt], paddingBot[pb])}
        >

            <ScrollAnimation className={clsx(!isMobile && "container container--sm")}>
                <h2 className="text-3xl font-bold text-center text-neutral-900 sm:text-4xl lg:text-5xl mb-8">
                    Explore <span className="text-primary-500">Our Menu</span>
                </h2>

                <div className="grid gap-2 sm:gap-6 md:gap-2 lg:gap-6 bento">
                    <ShowcaseTile
                        tabId={0}
                        title={"Kapal Selam"}
                        imgSrc={KapalSelamImg}
                        // width={384}
                        // height={384}
                    />
                    <ShowcaseTile
                        tabId={2}
                        span={2}
                        title={"Lenjer"}
                        imgSrc={LenjerImg}
                        // width={384}
                        // height={682}
                    />
                    <ShowcaseTile
                        tabId={1}
                        title={"Kulit"}
                        imgSrc={KulitImg}
                        // width={384}
                        // height={256}
                    />
                    <ShowcaseTile
                        tabId={3}
                        title={"Tekwan"}
                        imgSrc={TekwanImg}
                        // width={384}
                        // height={256}
                    />
                    <div className="relative w-full h-full bg-primary-500 text-neutral-100">
                        <div className="flex flex-col justify-center h-full mx-auto text-base font-medium sm:text-lg w-fit sm:mx-0 sm:px-4 lg:px-8 xl:px-16 sm:gap-2 md:gap-0 xl:gap-2 xl:text-2xl">
                            <Link href={"/menu#menu"} className="hover:underline w-fit">
                                <span onClick={() => setTab(0)}>Kapal Selam</span>
                            </Link>
                            <Link href={"/menu#menu"} className="hover:underline w-fit">
                                <span onClick={() => setTab(1)}>Kulit</span>
                            </Link>
                            <Link href={"/menu#menu"} className="hover:underline w-fit">
                                <span onClick={() => setTab(2)}>Lenjer</span>
                            </Link>
                            <Link href={"/menu#menu"} className="hover:underline w-fit">
                                <span onClick={() => setTab(3)}>Tekwan</span>
                            </Link>
                        </div>
                        <Image
                            className="hidden sm:block w-3/4 h-3/4 lg:w-[180px] lg:h-[180px] xl:w-[250px] absolute right-2 bottom-0 md:right-12 md:bottom-0"
                            width={250}
                            height={250}
                            src={PempekSVG}
                            loading="lazy"
                            alt=""
                        />
                    </div>
                </div>
            </ScrollAnimation>
        </section>
    );
}

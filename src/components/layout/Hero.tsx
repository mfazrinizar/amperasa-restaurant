"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import bg from "@public/hero/hero-bg.webp";
import bgm from "@public/hero/hero-bg-mobile.webp";
import Link from "next/link";
import LogoSVG from "@/components/svg/LogoSVG";
import Image from "next/image";
import { useAnimation, motion } from "framer-motion";
import SocialLink from "@/components/ui/SocialLink";
import MotionAnimation from "@/components/layout/MotionAnimation";
import useMediaQuery from "@/hooks/useMediaQuery";
import clsx from "clsx";

export default function Hero() {
    const [loaded, setLoaded] = useState(false);
    const animationControls = useAnimation();
    const isMobile = useMediaQuery(`(max-width: 768px)`);

    useEffect(() => {
        if (loaded) {
            animationControls.start("visible");
        }
    }, [loaded, animationControls]);

    const animationVariants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    return (
        <section
            id="Hero"
            className="relative w-full h-screen bg-right bg-no-repeat bg-cover bg-neutral-900"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))`,
            }}
        >
            <div
                className={clsx(
                    "absolute top-0 left-0 z-10 w-full h-full",
                    isMobile
                        ? "bg-gradient-to-r from-neutral-900 to-neutral-900/40"
                        : "bg-gradient-to-r from-neutral-900"
                )}
            ></div>
            <motion.div
                initial={"hidden"}
                animate={animationControls}
                variants={animationVariants}
                transition={{ ease: "easeOut", duration: 1.5 }}
            >
                {(!isMobile || isMobile === undefined) && (
                    <Image
                        className="absolute top-0 left-0 object-cover w-full transition z-1"
                        src={bg}
                        fill
                        onLoad={() => setLoaded(true)}
                        priority
                        placeholder="blur"
                        alt="Lorem ipsum dolor"
                    />
                )}
                {(isMobile || isMobile === undefined) && (
                    <Image
                        className="absolute top-0 left-0 object-cover object-left w-full transition z-1"
                        src={bgm}
                        fill
                        onLoad={() => setLoaded(true)}
                        priority
                        alt="Lorem ipsum dolor"
                    />
                )}
            </motion.div>
            <div className="container z-10 w-full h-full mx-auto">
                <div className="grid w-full h-full max-w-full mx-auto md:grid-cols-2">
                    <div className="z-10 flex flex-col self-center justify-between h-full max-w-xs py-8 sm:max-w-sm md:max-w-xl">
                        <div></div>
                        <div>
                            <MotionAnimation
                                type="spring"
                                delay={1.0}
                                duration={0.8}
                                variant={"top-sm"}
                            >
                                <LogoSVG width={150} height={150} bg={true} />
                            </MotionAnimation>
                            <MotionAnimation
                                as="h1"
                                delay={0.4}
                                variant={"top-sm"}
                                className="mb-4 heading-first text-neutral-200 "
                            >
                                <span className="">Taste the Originality</span>
                                <br />

                                <span className="block mt-2 text-primary-500">of Palembang Cuisine</span>
                            </MotionAnimation>
                            <MotionAnimation as="p" delay={0.6} variant="top-sm">
                                <span className="text-neutral-300">
                                    We serve the best Palembang cuisine in town. Our dishes are
                                    made with the finest ingredients, cooked to perfection, and
                                    served with love. Come and taste the originality of Palembang cuisine.
                                </span>
                            </MotionAnimation>
                            <MotionAnimation delay={0.9} className="flex flex-row gap-8 mt-8">
                                <Link href="/menu#menu">
                                    <Button variant="primary">Explore Our Menu</Button>
                                </Link>
                            </MotionAnimation>
                        </div>
                        <div className="flex flex-row items-center gap-8 left-40 bottom-20">
                            <MotionAnimation
                                type="spring"
                                delay={1.2}
                                duration={0.5}
                                variant="top-sm"
                            >
                                <SocialLink type="instagram" url="https://instagram.com/" />
                            </MotionAnimation>
                            <MotionAnimation
                                type="spring"
                                delay={1.35}
                                duration={0.5}
                                variant="top-sm"
                            >
                                <SocialLink type="linkedin" url="https://linkedin.com/" />
                            </MotionAnimation>
                            <MotionAnimation
                                type="spring"
                                delay={1.5}
                                duration={0.5}
                                variant="top-sm"
                            >
                                <SocialLink type="github" url="https://github.com/" />
                            </MotionAnimation>

                            <MotionAnimation
                                variant="left"
                                delay={1.4}
                                className="w-80 h-[1px] bg-neutral-500"
                            ></MotionAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

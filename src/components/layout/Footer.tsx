import Link from "next/link";
import React from "react";
import LogoSVG from "@/components/svg/LogoSVG";
import { links } from "@/lib/link";

export default function Footer() {
    return (
        <footer id="Footer" className="py-6 bg-neutral-900">
            <div className="container container--sm">
                <div className="max-w-screen-xl mx-auto text-center">
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 text-2xl font-semibold text-neutral-100"
                    >
                        <LogoSVG width={50} height={50} />
                        <span className="flex">
                            <span className="text-primary-500 font-brush">Ampe</span>
                            <span className="text-white font-brush">RASA</span>
                        </span>
                    </Link>
                    <div className="flex flex-wrap items-center justify-center gap-6 mt-4 mb-6 text-neutral-900 dark:text-white">
                        {links.map(({ id, title, path }) => {
                            return (
                                <Link key={id} className="hover:underline" href={path}>
                                    {title}
                                </Link>
                            );
                        })}
                    </div>
                    <span className="text-sm text-neutral-500 sm:text-center dark:text-neutral-400">
                        {" "}
                        <Link
                            className="hover:underline"
                            href={"https://github.com/mfazrinizar"}
                        >
                            M. Fazri Nizar | AmpeRASA
                        </Link>
                        {" "}© 2024 All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}

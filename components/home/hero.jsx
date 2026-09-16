"use client";

import Link from "next/link";
import { ChevronsRight } from "lucide-react";
import dynamic from "next/dynamic";

// const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

const LiquidGlassCluster = dynamic(
    () => import("./LiquidGlassCluster"),
    {
        ssr: false,
    }
);


export default function Hero() {
    return (
        <div className="relative w-full md:min-h-screen h-screen flex flex-col items-center justify-between px-4 md:px-8 py-8">
            <div className="absolute inset-0 z-1 w-full h-full">
                <LiquidGlassCluster className="w-full h-full" />
            </div>
            <div className=""></div>
            <div className="w-full relative flex justify-center select-none">
                <h1 className="text-center md:text-6xl sm:text-5xl text-2xl mobile:text-4xl font-bold font-main text-black lg:w-[60%]">Meet your business's watchdog</h1>
            </div>
            <div className="w-full relative z-2 flex flex-col items-center justify-center gap-8">
                <p className="text-center text-[14px] font-main lg:w-[45%] font-medium leading-4">It watches your competitor's prices and stock around the clock, and bark the moment something changes.</p>

                <div className="w-full flex justify-center gap-4 font-main font-medium text-[13px]">
                    <Link href="/" className="group flex items-center gap-2 bg-black  text-white px-2 py-2  hover:bg-white hover:text-black transition-all duration-500 hover:border-black border border-black">
                        <span className="bg-white px-2 py-1 group-hover:bg-black group-hover:text-white transition-all duration-500 border border-black">
                            <ChevronsRight size={20} className="group-hover:text-white text-black" />
                        </span>
                        Get Started
                    </Link>
                    <Link href="/" className="border flex items-center border-black text-black px-4 py-2 hover:bg-black hover:text-white transition-all duration-500">
                        How it works
                    </Link>
                </div>
            </div>
        </div>
    )
}
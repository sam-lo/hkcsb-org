import Image from "next/image";
import hallwithaudience from "@/public/photo/hallwithaudience.jpg";
import React from "react";

export default function Concert() {
  return (
    <div className="flex flex-col">
      <div
        className="w-full lg:h-[25rem] h-[15rem] overflow-hidden relative overflow-x-auto selection:bg-slate-700/50">
        <Image src={hallwithaudience} alt="Concert Hall" className="brightness-[0.4] object-cover h-full select-none"/>
        <div className="flex flex-col w-full lg:w-[50rem] absolute lg:inset-y-24 inset-0 left-0 sm:px-16 px-6 py-12">
          <hr className="w-full px-10 border-4 my-5 border-red-800 brightness-125"/>
          <div className="flex flex-col text-slate-50 md:space-y-4 space-y-2">
            <p className="font-serif font-bold md:text-5xl text-4xl w-fit">
              音樂會與門票
            </p>
            <p className="md:text-2xl sm:text-lg opacity-80 w-fit">
              了解即將舉行的音樂會
            </p>
          </div>
          <hr className="w-full px-10 border-2 my-5 border-red-800 brightness-125"/>
        </div>
      </div>
    </div>
  )
}
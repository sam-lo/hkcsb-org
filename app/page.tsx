import React from "react";
import wall from "@/public/photo/wall.png";
import Image from "next/image";
import {ArrowRightIcon} from "@heroicons/react/24/outline";
import {menusItems} from "@/app/data/menuItems";

export default function Home() {

  const filteredItems = menusItems.filter(item => item.id >= 1);

  return (
    <>
      <div className="flex flex-col items-center">
        <div
          className="relative w-full overflow-hidden overflow-x-auto selection:bg-slate-700/50 h-[36rem] md:h-[47rem]">
          <div className="absolute z-10 inset-0 bg-gradient-to-r from-red-950 from-5% to-transparent brightness-50"/>
          <Image src={wall} alt="Concert Hall"
                 className="h-full select-none object-cover brightness-[0.4] grayscale-[0.5] lg:translate-y-10"/>
          <div
            className="absolute z-20 inset-0 left-0 flex w-full flex-col px-6 md:py-24 py-12 md:px-16 lg:w-[56rem] lg:inset-y-20">
            <hr className="my-5 w-full border-4 border-accentred px-10"/>
            <div className="flex flex-col text-white sm:space-y-2 md:space-y-4">
              <p className="w-fit sm:font-normal text-[28px] font-cinzel sm:text-4xl lg:text-6xl brightness-125">
                Carpe Symphonic Band
              </p>
              <p className="w-fit opacity-80 italic font-calligraffitti sm:text-lg md:text-2xl brightness-125">
                Aim High, Dream High
              </p>
            </div>
            <hr className="my-5 w-full border-2 border-accentred px-10"/>
            <div className="flex flex-col text-slate-50 opacity-60 space-y-4 text-md sm:text-lg">
              <p>
                “Carpe”一詞源自拉丁文的“Carpe Diem”，直譯為“抓住今天”。這個短語提醒我們要活在當下，充分珍惜眼前的每一刻。它的意義不僅僅是享受當下，更強調每一次的合奏，都是獨一無二的。
              </p>
              <p>
                我們希望聚集一群對音樂造詣有追求的樂手，特別是那些在學期間因環境限制而未能充分發揮潛力的學生。在這個團體中，我們追求卓越，並珍惜每次演奏的機會，從中獲得成就感和滿足感。這不僅是一次音樂的旅程，更是自我成長和相互激勵的過程。我們相信，每次演出都是寶貴的瞬間，而每一刻練習都會成為台上的演出養份
              </p>
            </div>
            <a href="/concert"
               className="mt-7 hidden md:flex w-fit space-x-2 select-none items-center outline-white outline-1 rounded-xl outline px-6 py-4 transition-all duration-300 group hover:bg-white">
              <p className="text-2xl text-white group-hover:text-red-950">
                即將舉行的音樂會
              </p>
              <ArrowRightIcon
                className="w-8 stroke-2 text-white transition-all group-hover:-rotate-45 group-hover:text-red-950"/>
            </a>
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid gap-4 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 md:py-16 py-8 md:px-16">
          {filteredItems.map((item) => (
            <a href={item.href} key={item.id}
               className="w-full p-5 shadow-lg shadow-white/10 hover:-translate-y-1.5 bg-neutral-950 rounded-lg border-2 border-gold/30 relative overflow-hidden group transition-all duration-500">
              <div
                className="absolute inset-0 bg-gradient-to-br from-transparent to-black group-hover:block hidden transition-all duration-300"/>
              <item.icon
                className="w-12 mb-2 text-2xl text-white transition-colors relative z-10 duration-300"/>
              <item.icon
                className="w-32 absolute z-10 -top-12 -right-12 text-9xl text-gold/50"/>
              <p className="font-medium font-serif text-xl sm:text-2xl text-white relative z-10 duration-300">
                {item.name}
              </p>
              <p className="text-white/40 text-sm sm:text-lg relative z-10 duration-300">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
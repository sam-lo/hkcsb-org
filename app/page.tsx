import React from "react";
import concert from "@/public/photo/concert.jpg";
import Image from "next/image";
import {ArrowRightIcon} from "@heroicons/react/24/outline";
import {menusItems} from "@/app/data/menuItems";

export default function Home() {

  const filteredItems = menusItems.filter(item => item.id >= 1);

  return (
    <>
      <div className="flex flex-col">
        <div
          className="w-full lg:h-[45rem] h-[38rem] overflow-hidden relative overflow-x-auto selection:bg-slate-700/50">
          <Image src={concert} alt="Concert Hall" className="brightness-[0.3] object-cover h-full select-none"/>
          <div
            className="flex flex-col w-full lg:w-[50rem] absolute lg:inset-y-20 inset-0 left-0 sm:px-16 px-6 py-12">
            <hr className="w-full px-10 border-4 my-5 border-red-800 brightness-125"/>
            <div className="flex flex-col text-slate-50 md:space-y-6 sm:space-y-3 space-y-2">
              <p className="font-serif font-bold md:text-5xl sm:text-4xl text-2xl w-fit">
                Carpe Symphonic Band
              </p>
              <p className="font-serif md:text-2xl sm:text-lg opacity-80 w-fit">
                Aim High, Dream High
              </p>
            </div>
            <hr className="w-full px-10 border-2 my-5 border-red-800 brightness-125"/>
            <div className="flex flex-col space-y-4 sm:text-lg text-md text-slate-50 opacity-80">
              <p>
                “Carpe”一詞源自拉丁文的“Carpe
                Diem”，直譯為“抓住今天”。這個短語提醒我們要活在當下，充分利用眼前的每一刻。然而，它的意義不僅僅是享受當下，更是強調在如今的每一次機會中，為未來的成長奠定基礎。
              </p>
              <p>
                我們希望聚集一群對音樂有深厚造詣與追求的樂手，特別是那些在學期間因環境限制而未能充分發揮潛力的學生。在這個團體中，我們追求卓越，並珍惜每一次演奏的機會，從中獲得成就感和滿足感。這不僅是一次音樂的旅程，更是自我成長和相互激勵的過程。我們相信，每一次的演出都是一次寶貴的經驗，每一次的練習都是對未來的投資。
              </p>
            </div>
            <a href="/concert" className="hidden lg:block group select-none bg-slate-50/80 hover:bg-slate-50 w-64 py-4 px-5 rounded-3xl my-8 transition-all duration-300">
              <div className="flex items-center justify-between">
                <p className="text-slate-700 text-xl">
                  即將舉行的音樂會
                </p>
                <ArrowRightIcon className="w-8 text-slate-700 group-hover:-rotate-45 transition-all "/>
              </div>
            </a>
          </div>
        </div>

        {/* Menu Items */}

          <div className="flex w-full py-16 sm:px-16 px-6 justify-around flex-wrap gap-8">
            {filteredItems.map((menu) => (
              <a href={menu.href} key={menu.id} className="w-72">
                {/* <Image src={menu.image} alt="Image" className="h-52 rounded-3xl lg:grayscale-[0.7] lg:group-hover:grayscale-0 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/80"/> */}
                <div className="flex space-x-2 hover:text-white transition-all hover:bg-slate-700 bg-slate-400 duration-300 text-slate-700 rounded-3xl w-full py-4 px-6 hover:-rotate-1 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-900/50">
                  <menu.icon className="w-12"/>
                  <div className="flex flex-col">
                    <p className="text-2xl">{menu.name}</p>
                    <p className="opacity-70">{menu.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
      </div>
    </>
  );
}
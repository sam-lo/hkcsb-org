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
          className="relative w-full overflow-hidden overflow-x-auto selection:bg-slate-700/50 h-[34rem] lg:h-[45rem]">
          <Image src={concert} alt="Concert Hall"
                 className="h-full select-none object-cover brightness-[0.3] grayscale-[0.5]"/>
          <div
            className="absolute inset-0 left-0 flex w-full flex-col px-6 py-12 sm:px-16 lg:w-[50rem] lg:inset-y-20">
            <hr className="my-5 w-full border-4 border-red-800 px-10 brightness-125"/>
            <div className="flex flex-col text-slate-50 space-y-2 sm:space-y-3 md:space-y-6">
              <p className="w-fit font-serif text-2xl font-bold sm:text-4xl md:text-5xl">
                Carpe Symphonic Band
              </p>
              <p className="w-fit italic opacity-80 font-comorant sm:text-lg md:text-2xl">
                Aim High, Dream High
              </p>
            </div>
            <hr className="my-5 w-full border-2 border-red-800 px-10 brightness-125"/>
            <div className="flex flex-col text-slate-50 opacity-80 space-y-4 text-md sm:text-lg">
              <p>
                “Carpe”一詞源自拉丁文的“Carpe Diem”，直譯為“抓住今天”。這個短語提醒我們要活在當下，充分珍惜眼前的每一刻。它的意義不僅僅是享受當下，更強調每一次的合奏，都是獨一無二的。
              </p>
              <p>
                我們希望聚集一群對音樂有深厚造詣與追求的樂手，特別是那些在學期間因環境限制而未能充分發揮潛力的學生。在這個團體中，我們追求卓越，並珍惜每一次演奏的機會，從中獲得成就感和滿足感。這不僅是一次音樂的旅程，更是自我成長和相互激勵的過程。我們相信，每一次演出都是寶貴的經驗，每一次練習都是對演出的投資。
              </p>
            </div>
            <a href="/concert"
               className="my-6 hidden w-64 select-none items-center bg-white justify-between rounded-3xl px-5 py-4 transition-all duration-300 group hover:bg-slate-800 lg:flex">
              <p className="text-xl text-slate-700 group-hover:text-slate-50">
                即將舉行的音樂會
              </p>
              <ArrowRightIcon
                className="w-8 stroke-2 text-slate-700 group-hover:text-slate-50 transition-all group-hover:-rotate-45"/>
            </a>
          </div>
        </div>

        {/* Menu Items */}

        <div className="flex w-full flex-wrap justify-around gap-8 px-6 py-16 sm:px-16">
          {filteredItems.map((menu) => (
            <a href={menu.href} key={menu.id} className="w-96">
              <div
                className="flex w-full flex-col rounded-3xl bg-slate-800 p-6 text-white transition-all duration-300 group space-y-6 hover:-translate-y-2 hover:-rotate-1 hover:bg-red-900 hover:shadow-2xl hover:shadow-slate-900/80">
                <div className="flex items-start justify-between">
                  <menu.icon className="w-14"/>
                  <ArrowRightIcon className="w-7 group-hover:-rotate-45 transition-all duration-300"/>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="text-2xl font-maru">{menu.name}</p>
                  <p className="opacity-50">{menu.fullDescription}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
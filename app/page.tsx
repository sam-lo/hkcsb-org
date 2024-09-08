import React from "react";
import concert from "@/public/concert.jpg";
import Image from "next/image";
import {ArrowRightIcon} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>
      <div className="w-full lg:h-[45rem] h-[38rem] overflow-hidden relative overflow-x-auto selection:bg-slate-700/50">
        <Image src={concert} alt="Concert Hall" className="brightness-[0.3] object-cover h-full select-none"/>
        <div className="flex flex-col w-full lg:w-[50rem] absolute lg:inset-y-14 inset-0 left-0 sm:px-16 px-6 py-12">
          <hr className="w-full px-10 border-4 my-5 border-red-800 brightness-125"/>
          <div className="flex flex-col text-slate-50 md:space-y-6 sm:space-y-3 space-y-2">
            <div className="font-serif font-bold text-left md:text-5xl sm:text-4xl text-2xl w-fit">
              Carpe Symphonic Band
            </div>
            <div className="text-left md:text-2xl sm:text-lg opacity-80 w-fit">
              卡爾佩管樂團
            </div>
          </div>
          <hr className="w-full px-10 border-2 my-5 border-red-800 brightness-125"/>
          <div className="flex flex-col space-y-4 sm:text-lg text-md text-slate-50 opacity-80">
            <div>
              “Carpe”一詞源自拉丁文的“Carpe
              Diem”，直譯為“抓住今天”。這個短語提醒我們要活在當下，充分利用眼前的每一刻。然而，它的意義不僅僅是享受當下，更是強調在如今的每一次機會中，為未來的成長奠定基礎。
            </div>
            <div>
              我們希望聚集一群對音樂有深厚造詣與追求的樂手，特別是那些在學期間因環境限制而未能充分發揮潛力的學生。在這個團體中，我們追求卓越，並珍惜每一次演奏的機會，從中獲得成就感和滿足感。這不僅是一次音樂的旅程，更是自我成長和相互激勵的過程。我們相信，每一次的演出都是一次寶貴的經驗，每一次的練習都是對未來的投資。
            </div>
          </div>
          <div className="hidden lg:block group select-none bg-slate-50/80 hover:bg-slate-50 w-64 py-4 px-5 rounded-3xl my-8 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="text-slate-700 text-xl">
                即將舉行的音樂會
              </div>
              <ArrowRightIcon className="w-8 text-slate-700 group-hover:-rotate-45 transition-all "/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
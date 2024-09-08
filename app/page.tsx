import React from "react";
import concert from "@/public/photo/concert.jpg";
import performing from "@/public/photo/performing.jpg"
import Image from "next/image";
import {ArrowRightIcon} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <div
          className="w-full lg:h-[45rem] h-[38rem] overflow-hidden relative overflow-x-auto selection:bg-slate-700/50">
          <Image src={concert} alt="Concert Hall" className="brightness-[0.3] object-cover h-full select-none"/>
          <div className="flex flex-col w-full lg:w-[50rem] absolute lg:inset-y-20 inset-0 left-0 sm:px-16 px-6 py-12">
            <hr className="w-full px-10 border-4 my-5 border-red-800 brightness-125"/>
            <div className="flex flex-col text-slate-50 md:space-y-6 sm:space-y-3 space-y-2">
              <p className="font-serif font-bold md:text-5xl sm:text-4xl text-2xl w-fit">
                Carpe Symphonic Band
              </p>
              <p className="md:text-2xl sm:text-lg opacity-80 w-fit">
                卡爾佩管樂團
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
            <div
              className="hidden lg:block group select-none bg-slate-50/80 hover:bg-slate-50 w-64 py-4 px-5 rounded-3xl my-8 transition-all duration-300">
              <div className="flex items-center justify-between">
                <p className="text-slate-700 text-xl">
                  即將舉行的音樂會
                </p>
                <ArrowRightIcon className="w-8 text-slate-700 group-hover:-rotate-45 transition-all "/>
              </div>
            </div>
          </div>
        </div>
        {/* Conductor Below */}
        <div>
          <div
            className="w-full h-[45rem] overflow-hidden relative selection:bg-slate-700/50">
            <Image src={performing} alt="Concert Hall"
                   className="brightness-[0.4] object-cover h-full select-none scale-105 blur-sm"/>
            <div
              className="flex flex-col w-full absolute lg:inset-y-6 inset-y-0 right-0 sm:px-16 px-6 py-12">
              <hr className="w-full px-10 border-4 my-5 border-red-800 brightness-125"/>
              <div className="flex flex-col text-slate-50 md:space-y-4 space-y-2">
                <p className="font-serif font-bold md:text-5xl text-4xl w-fit">
                  梁境佑 先生
                </p>
                <p className="md:text-2xl sm:text-lg opacity-80 w-fit">
                  首席指揮
                </p>
              </div>
              <hr className="w-full px-10 border-2 my-5 border-red-800 brightness-125"/>
              <div className="flex flex-col space-y-4 sm:text-lg text-md text-slate-50 opacity-80">
                <p>
                  梁氏畢業自香港浸會大學音樂系，在港時跟隨莊雪華女士學習長笛及短笛。畢業隨後前往英國皇家北方音樂學院(Royal
                  Northern College of Music)深造，在深造期間跟隨Mrs. Laura Jellicoe學習長笛及Mrs. Janet
                  Richardson學習短笛。在二零一五年，梁氏於香港國際音樂節西樂合奏小組獲得冠軍。除此之外，梁氏曾在不同大師班作示範生，包括：Marc
                  Grauwels， Susan Milan， Adam Walker 及 Jennifer Hutchinson 等等。 畢業回港後，梁氏活躍於不同團體及機構合作，包括大館，TwoSet
                  Violin，歌手陳柏宇及組合Rubberband等。
                </p>
                <p>
                  與此同時，梁氏在香港及英國深造期間分別跟隨白榮輝先生與羅保莙女士，及Mr. Mark Heron 學習管樂團及管弦樂團指揮。
                  自 2016 年起擔任聖若瑟英文中學管樂團及2022年起擔任香港世紀管樂團助理指揮，並在2024年起擔任基督教宣道會宣基中學管樂團指揮一職。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
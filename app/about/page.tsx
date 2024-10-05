import Image from "next/image";
import conductor from "@/public/photo/conductorchairsit.jpeg";
import logocarpe from "@/public/LOGO_CARPE_RED.png";
import conducting from "@/public/photo/conducting.jpg"
import {ArrowRightIcon} from "@heroicons/react/24/outline";
import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-full overflow-hidden overflow-x-hidden selection:bg-slate-700/50 h-[15rem] lg:h-[27rem]">
        <div className="absolute z-10 inset-0 bg-gradient-to-r from-red-950 from-5% to-transparent brightness-50"/>
        <Image src={conducting} alt="Concert Hall"
               className="h-full select-none overflow-y-visible object-cover brightness-[0.4] grayscale-[0.6] w-full lg:translate-y-60"/>
        <div
          className="absolute z-20 inset-0 left-0 flex w-full flex-col px-6 py-12 sm:px-16 lg:w-[50rem] lg:inset-y-20">
          <hr className="my-5 w-full border-4 border-red-800 px-10 brightness-125"/>
          <div className="flex flex-col text-white space-y-2 md:space-y-4">
            <p className="w-fit font-serif text-4xl font-bold md:text-5xl">
              關於樂團
            </p>
            <p className="w-fit opacity-80 sm:text-lg md:text-2xl">
              了解樂團的資訊
            </p>
          </div>
          <hr className="mt-5 w-full border-2 border-red-800 px-10 brightness-125"/>
          <a href="/concert"
             className="mt-7 hidden sm:flex w-fit space-x-2 select-none items-center outline-white outline-1 rounded-2xl outline px-4 py-3 transition-all duration-300 group hover:bg-white lg:flex">
            <p className="text-xl text-white font-light group-hover:text-red-950">
              即將舉行的音樂會
            </p>
            <ArrowRightIcon
              className="w-8 stroke-2 text-white transition-all group-hover:-rotate-45 group-hover:text-red-950"/>
          </a>
        </div>
      </div>
      <div className="flex flex-col space-y-12 py-24">
        <AboutCarpe/>
        <AboutConductor/>
      </div>
    </div>
  )
}

function AboutCarpe() {
  return (
    <div
      className=" flex flex-col space-y-10 lg:space-y-0 text-white items-center justify-around px-6 lg:flex-row-reverse lg:px-16 max-w-[90rem]">
      <Image src={logocarpe} alt="practice" className="h-fit brightness-[0.8] rounded-lg lg:w-2/5"/>
      <div className="flex h-fit flex-col lg:w-1/2">
        <hr className="mb-5 w-full border-4 border-red-800 px-10 brightness-125"/>
        <div className="flex flex-col space-y-2 lg:space-y-4">
          <p className="w-fit font-cinzel text-2xl lg:text-5xl">
            Carpe Symphonic Band
          </p>
          <p className="w-fit font-calligraffitti opacity-80 font-nothing lg:text-2xl">
            Aim High, Dream High
          </p>
        </div>
        <hr className="my-5 w-full border-2 border-red-800 px-10 brightness-125"/>
        <div className="flex flex-col opacity-70 space-y-4 text-md sm:text-lg">
          <p>
            “Carpe”一詞源自拉丁文的“Carpe Diem”，直譯為“抓住今天”。這個短語提醒我們要活在當下，充分珍惜眼前的每一刻。它的意義不僅僅是享受當下，更強調每一次的合奏，都是獨一無二的。
          </p>
          <p>
            我們希望聚集一群對音樂造詣有追求的樂手，特別是那些在學期間因環境限制而未能充分發揮潛力的學生。在這個團體中，我們追求卓越，並珍惜每次演奏的機會，從中獲得成就感和滿足感。這不僅是一次音樂的旅程，更是自我成長和相互激勵的過程。我們相信，每次演出都是寶貴的經驗，每次練習都是對演出的投資。
          </p>
        </div>
      </div>
    </div>
  )
}

function AboutConductor() {
  return (
    <div className="flex flex-col space-y-10 lg:space-y-0 text-white items-center justify-around px-6 lg:flex-row lg:px-16 max-w-[90rem]">
      <Image src={conductor} alt="Conductor" className="h-fit rounded-lg lg:w-1/3"/>
      <div className="flex h-fit flex-col lg:w-1/2">
        <hr className="mb-5 w-full border-4 border-red-800 px-10 brightness-125"/>
        <div className="flex flex-col space-y-2 md:space-y-4">
          <p className="w-fit font-serif font-thin text-3xl md:text-5xl">
            梁境佑 先生
          </p>
          <p className="w-fit opacity-80 sm:text-lg md:text-2xl">
            首席指揮
          </p>
        </div>
        <hr className="my-5 w-full border-2 border-red-800 px-10 brightness-125"/>
        <div className="flex flex-col opacity-70 space-y-4 text-md sm:text-lg">
          <p>
            梁氏畢業自香港浸會大學音樂系，在港時跟隨莊雪華女士學習長笛及短笛。畢業隨後前往英國皇家北方音樂學院（Royal
            Northern College of Music）深造，在深造期間跟隨Mrs. Laura Jellicoe學習長笛及Mrs. Janet
            Richardson學習短笛。在2015年，梁氏於香港國際音樂節西樂合奏小組獲得冠軍。除此之外，梁氏曾在不同大師班作示範生，包括：Marc
            Grauwels， Susan Milan， Adam Walker 及 Jennifer Hutchinson 等等。 畢業回港後，梁氏活躍於不同團體及機構合作，包括大館，TwoSet
            Violin，歌手陳柏宇及搖滾組合Rubberband等。
          </p>
          <p>
            與此同時，梁氏在香港及英國深造期間分別跟隨羅保莙女士及Mr. Mark Heron 學習管樂團及管弦樂團指揮。
            自2016年起擔任聖若瑟英文中學管樂團及2022年起擔任香港世紀管樂團助理指揮，並在2024年起擔任基督教宣道會宣基中學管樂團指揮。
          </p>
        </div>
      </div>
    </div>
  )
}
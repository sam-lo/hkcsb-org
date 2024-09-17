import Image from "next/image";
import conductor from "@/public/photo/conductorchairsit.jpeg";
import practice from "@/public/photo/practice.jpeg";
import conducting from "@/public/photo/conducting.jpg"
import {ArrowRightIcon} from "@heroicons/react/24/outline";
import React from "react";

export default function About() {
  return (
    <div className="flex flex-col">
      <div
        className="w-full lg:h-[28rem] h-[15rem] overflow-hidden relative overflow-x-hidden selection:bg-slate-700/50">
        <Image src={conducting} alt="Concert Hall"
               className="brightness-[0.3] object-cover h-full select-none overflow-y-visible blur-sm lg:translate-y-60 scale-105"/>
        <div className="flex flex-col w-full lg:w-[50rem] absolute lg:inset-y-20 inset-0 left-0 sm:px-16 px-6 py-12">
          <hr className="w-full px-10 border-4 my-5 border-red-800 brightness-125"/>
          <div className="flex flex-col text-slate-50 md:space-y-4 space-y-2">
            <p className="font-serif font-bold md:text-5xl text-4xl w-fit">
              關於樂團
            </p>
            <p className="md:text-2xl sm:text-lg opacity-80 w-fit">
              了解 Carpe Symphonic Band 的資訊
            </p>
          </div>
          <hr className="w-full px-10 border-2 my-5 border-red-800 brightness-125"/>
          <div
            className="hidden lg:block group select-none bg-slate-50/80 hover:bg-slate-50 w-64 py-4 px-5 rounded-3xl my-5 transition-all duration-300">
            <div className="flex items-center justify-between">
              <p className="text-slate-700 text-xl">
                即將舉行的音樂會
              </p>
              <ArrowRightIcon className="w-8 text-slate-700 group-hover:-rotate-45 transition-all "/>
            </div>
          </div>
        </div>
      </div>
      <AboutCarpe/>
      <AboutConductor/>
    </div>
  )
}

function AboutCarpe() {
  return (
    <div className="flex lg:flex-row-reverse flex-col items-center justify-around px-6 lg:px-16 py-12">
      <Image src={practice} alt="practice" className="shadow-2xl shadow-black mb-6 h-fit lg:w-1/3"/>
      <div className="flex flex-col lg:w-2/5 h-fit">
        <hr className="w-full px-10 border-4 my-5 border-red-800 brightness-125"/>
        <div className="flex flex-col text-slate-700 md:space-y-4 space-y-2">
          <p className="font-serif font-bold md:text-4xl text-2xl w-fit">
            Carpe Symphonic Band
          </p>
          <p className="md:text-2xl font-Comorant italic sm:text-lg opacity-80 w-fit">
            Aim High, Dream High
          </p>
        </div>
        <hr className="w-full px-10 border-2 my-5 border-red-800 brightness-125"/>
        <div className="flex flex-col space-y-4 sm:text-lg text-md text-slate-700 opacity-80">
          <p>
            “Carpe”一詞源自拉丁文的“Carpe Diem”，直譯為“抓住今天”。這個短語提醒我們要活在當下，充分利用眼前的每一刻。
            然而，它的意義不僅僅是享受當下，更是強調在如今的每一次機會中，為未來的成長奠定基礎。
          </p>
          <p>
            我們希望聚集一群對音樂有深厚造詣與追求的樂手，特別是那些在學期間因環境限制而未能充分發揮潛力的學生。
            在這個團體中，我們追求卓越，並珍惜每一次演奏的機會，從中獲得成就感和滿足感。這不僅是一次音樂的旅程，更是自我成長和相互激勵的過程。
            我們相信，每一次的演出都是一次寶貴的經驗，每一次的練習都是對未來的投資。
          </p>
        </div>
      </div>
    </div>
  )
}

function AboutConductor() {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-around px-6 lg:px-16 py-12">
      <Image src={conductor} alt="Conductor" className="shadow-2xl shadow-black mb-6 h-fit lg:w-1/3"/>
      <div className="flex flex-col lg:w-2/5 h-fit">
        <hr className="w-full px-10 border-4 my-5 border-red-800 brightness-125"/>
        <div className="flex flex-col text-slate-700 md:space-y-4 space-y-2">
          <p className="font-serif font-bold md:text-5xl text-4xl w-fit">
            梁境佑 先生
          </p>
          <p className="md:text-2xl sm:text-lg opacity-80 w-fit">
            首席指揮
          </p>
        </div>
        <hr className="w-full px-10 border-2 my-5 border-red-800 brightness-125"/>
        <div className="flex flex-col space-y-4 sm:text-lg text-md text-slate-700 opacity-80">
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
  )
}

{/*
    <div>
    <div
      className="w-full lg:h-full h-[45rem] overflow-hidden relative selection:bg-slate-700/50">
      <Image src={conducting} alt="Concert Hall"
             className="brightness-[0.4] object-cover h-full select-none scale-110 blur-sm lg:-translate-x-10"/>
      <div
        className="flex w-full lg:space-x-28 items-center justify-center absolute lg:inset-y-6 inset-y-0 right-0 sm:px-16 px-6 py-12">
        <Image src={conductor} alt="Conductor" className="w-2/5 h-fit lg:block hidden"/>
        <div className="flex flex-col">
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
  </div>*/
}
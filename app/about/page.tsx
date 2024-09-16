import Image from "next/image";
import performing from "@/public/photo/performing.jpg";
import conductor from "@/public/photo/conductor.jpg";
import React from "react";

export default function About() {
  return (
    <div>
      <div
        className="w-full lg:h-full h-[45rem] overflow-hidden relative selection:bg-slate-700/50">
        <Image src={performing} alt="Concert Hall"
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
    </div>
  )
}
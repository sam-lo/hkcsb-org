import Image from "next/image";
import conductor from "@/public/photo/conductor.jpg";

export default function Conductor() {
  return (
      <div className="flex justify-between items-center">
        <div className="flex flex-col space-y-4 lg:w-1/2 text-slate-700 text-left">
          <div className="w-full px-10 h-2 bg-red-800"/>
          <div className="text-3xl text-slate-700">
            首席指揮
          </div>
          <div className="flex flex-col">
            <div className="w-fit font-serif text-6xl">
              <div className="w-full px-10 h-1 mb-4 bg-red-800"/>
              梁境佑 先生
            </div>
          </div>
          <div className="w-full px-10 h-2 bg-red-800"/>
          <div className="flex flex-col space-y-4 text-lg text-justify opacity-80">
            <div>
              梁氏畢業自香港浸會大學音樂系，在港時跟隨莊雪華女士學習長笛及短笛。畢業隨後前往英國皇家北方音樂學院(Royal
              Northern College of Music)深造，在深造期間跟隨Mrs. Laura Jellicoe學習長笛及Mrs. Janet
              Richardson學習短笛。在二零一五年，梁氏於香港國際音樂節西樂合奏小組獲得冠軍。除此之外，梁氏曾在不同大師班作示範生，包括：Marc
              Grauwels， Susan Milan， Adam Walker 及 Jennifer Hutchinson 等等。 畢業回港後，梁氏活躍於不同團體及機構合作，包括大館，TwoSet
              Violin，歌手陳柏宇及組合Rubberband等。
            </div>
            <div>
              與此同時，梁氏在香港及英國深造期間分別跟隨白榮輝先生與羅保莙女士，及Mr. Mark Heron 學習管樂團及管弦樂團指揮。
              自 2016 年起擔任聖若瑟英文中學管樂團及2022年起擔任香港世紀管樂團助理指揮，並在2024年起擔任基督教宣道會宣基中學管樂團指揮一職。
            </div>
          </div>
          <div className="w-full px-10 h-2 bg-red-800"/>
        </div>
        <Image src={conductor} alt="conducter" className="w-1/3 shadow-2xl shadow-black"/>
      </div>
  )
}
import logo from "@/public/logo.png"
import Image from "next/image";
import Conductor from "@/components/conductor";
import Event from "@/components/event";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <div className="flex flex-col space-y-48 px-32 py-12 selection:bg-slate-700/50">
        <CarpeDescription/>
        <Conductor/>
        <Event/>
        <Contact/>
      </div>
    </>
  );
}

function CarpeDescription() {
  return (
    <div className="flex items-center justify-between">
      <Image src={logo} alt="conductor" className="w-2/5"/>
      <div className="flex flex-col space-y-8 py-8 rounded-3xl w-1/2">
        <div className="w-full px-10 h-2 bg-red-800"/>
        <div className="font-serif text-6xl text-slate-700 w-fit">
          Carpe Symphonic Band
        </div>
        <div className="w-full px-10 h-1 bg-red-800 mt-6"/>
        <div className="flex flex-col space-y-4 text-lg text-slate-700/80 text-justify">
          <div>
            “Carpe”一詞源自拉丁文的“Carpe
            Diem”，直譯為“抓住今天”。這個短語提醒我們要活在當下，充分利用眼前的每一刻。然而，它的意義不僅僅是享受當下，更是強調在如今的每一次機會中，為未來的成長奠定基礎。
          </div>
          <div>
            我們希望聚集一群對音樂有深厚造詣與追求的樂手，特別是那些在學期間因環境限制而未能充分發揮潛力的學生。在這個團體中，我們追求卓越，並珍惜每一次演奏的機會，從中獲得成就感和滿足感。這不僅是一次音樂的旅程，更是自我成長和相互激勵的過程。我們相信，每一次的演出都是一次寶貴的經驗，每一次的練習都是對未來的投資。
          </div>
        </div>
        <div className="w-full px-10 h-2 bg-red-800"/>
      </div>
    </div>
  )
}

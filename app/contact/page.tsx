import Image from "next/image";
import hallwithpiano from "@/public/photo/hallwithpiano.jpg";
import {ArrowRightIcon, EnvelopeIcon, GlobeAsiaAustraliaIcon, PhoneIcon} from "@heroicons/react/24/outline";
import React from "react";

export default function Contact() {

  const contactMethods = [
    {
      id: 1,
      icon: PhoneIcon,
      text: "+852 5403 1510 ｜ 樂團經理 梁小姐",
      href: "tel://+85254031510",
    },
    {
      id: 2,
      icon: EnvelopeIcon,
      text: "info@hkcsb.org ｜ 一般查詢",
      href: "mailto:info@hkcsb.org",
    },
    {
      id: 3,
      icon: GlobeAsiaAustraliaIcon,
      text: "www.hkcsb.org ｜ 官方網站",
      href: "https://www.hkcsb.org",
    }
  ]

  return (
    <>
      <div className="flex flex-col">
        <div
          className="w-full lg:h-[28rem] h-[15rem] overflow-hidden relative overflow-x-auto selection:bg-slate-700/50">
          <Image src={hallwithpiano} alt="Concert Hall" className="brightness-[0.3] object-cover h-full select-none"/>
          <div className="flex flex-col w-full lg:w-[50rem] absolute lg:inset-y-20 inset-0 left-0 sm:px-16 px-6 py-12">
            <hr className="w-full px-10 border-4 my-5 border-red-800 brightness-125"/>
            <div className="flex flex-col text-slate-50 md:space-y-4 space-y-2">
              <p className="font-serif font-bold md:text-5xl text-4xl w-fit">
                聯絡我們
              </p>
              <p className="md:text-2xl sm:text-lg opacity-80 w-fit">
                可透過以下方式查詢
              </p>
            </div>
            <hr className="w-full px-10 border-2 my-5 border-red-800 brightness-125"/>
            <a href="/concert"
               className="items-center justify-between hidden lg:flex group select-none bg-slate-50/80 hover:bg-slate-50 w-64 py-4 px-5 rounded-3xl my-6 transition-all duration-300">
              <p className="text-slate-700 text-xl">
                即將舉行的音樂會
              </p>
              <ArrowRightIcon className="w-8 text-slate-700 group-hover:-rotate-45 transition-all "/>
            </a>
          </div>
        </div>
        <div
          className="sm:px-16 px-6 flex xl:flex-row flex-col xl:items-center items-start xl:space-x-28 justify-center py-12 md:py-24">
          <div className="flex flex-col text-slate-700 max-w-[35rem] space-y-6">
            <p className="md:text-6xl text-4xl font-gothic">
              歡迎隨時聯絡我們
            </p>
            <p className="md:text-2xl text-lg font-gothic opacity-80">
              您的想法對我們很重要。我們樂於接受新的想法、建議、問題和建議。請隨時與我們聯繫。您可以根據您的需求透過以下方式找到我們。
            </p>
          </div>
          <div className="flex flex-col py-8 space-y-4 md:text-2xl text-lg text-slate-700 opacity-80">
            {contactMethods.map((method) => (
              <a key={method.id} href={method.href} className="flex md:space-x-8 space-x-3 items-center hover:text-red-800 transition-all duration-300">
                <method.icon className="md:w-10 w-7 text-red-800"/>
                <p>{method.text}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
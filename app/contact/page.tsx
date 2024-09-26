import Image from "next/image";
import score from "@/public/photo/scorewithconduct.jpg";
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
          className="relative w-full overflow-hidden overflow-x-auto selection:bg-slate-700/50 h-[17rem] lg:h-[28rem]">
          <Image src={score} alt="Concert Hall" className="h-full select-none object-cover brightness-[0.2]"/>
          <div className="absolute inset-0 left-0 flex w-full flex-col px-6 py-12 sm:px-16 lg:w-[50rem] lg:inset-y-20">
            <hr className="my-5 w-full border-4 border-red-800 px-10 brightness-125"/>
            <div className="flex flex-col text-slate-50 space-y-2 md:space-y-4">
              <p className="w-fit font-serif text-4xl font-bold md:text-5xl">
                聯絡我們
              </p>
              <p className="w-fit opacity-80 sm:text-lg md:text-2xl">
                可透過以下方式查詢
              </p>
            </div>
            <hr className="my-5 w-full border-2 border-red-800 px-10 brightness-125"/>
            <a href="/concert"
               className="my-6 hidden w-64 select-none items-center justify-between rounded-3xl bg-slate-50/80 px-5 py-4 transition-all duration-300 group hover:bg-slate-50 lg:flex">
              <p className="text-xl text-slate-700">
                即將舉行的音樂會
              </p>
              <ArrowRightIcon className="w-8 text-slate-700 transition-all group-hover:-rotate-45"/>
            </a>
          </div>
        </div>
        <div
          className="flex flex-col items-start justify-center px-6 py-12 sm:px-16 md:py-24 xl:space-x-28 xl:flex-row xl:items-center">
          <div className="flex flex-col text-slate-700 max-w-[35rem] space-y-6">
            <p className="text-4xl font-maru md:text-6xl">
              歡迎隨時聯絡我們
            </p>
            <p className="text-lg opacity-80 font-maru md:text-2xl">
              您的想法對我們很重要。我們樂於接受新的想法、建議、問題和建議。請隨時與我們聯繫。您可以根據您的需求透過以下方式找到我們。
            </p>
          </div>
          <div className="flex flex-col py-8 text-lg text-slate-700 opacity-80 space-y-4 md:text-2xl">
            {contactMethods.map((method) => (
              <a key={method.id} href={method.href} className="flex items-center transition-all duration-300 space-x-3 hover:text-red-800 md:space-x-8">
                <method.icon className="w-7 text-red-800 md:w-10"/>
                <p>{method.text}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
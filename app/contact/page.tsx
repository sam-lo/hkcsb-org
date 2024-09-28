import Image from "next/image";
import envelope from "@/public/photo/envelope.jpg";
import {ArrowRightIcon, CameraIcon, EnvelopeIcon, GlobeAsiaAustraliaIcon, PhoneIcon} from "@heroicons/react/24/outline";
import React from "react";

export default function Contact() {

  const contactMethods = [
    {
      id: 1,
      icon: PhoneIcon,
      text: "+852 5403 1510",
      decription: "樂團經理 梁小姐",
      href: "tel://+85254031510",
    },
    {
      id: 2,
      icon: EnvelopeIcon,
      text: "info@hkcsb.org",
      decription: "一般查詢",
      href: "mailto:info@hkcsb.org",
    },
    {
      id: 3,
      icon: GlobeAsiaAustraliaIcon,
      text: "www.hkcsb.org",
      decription: "官方網站",
      href: "https://www.hkcsb.org",
    },
    {
      id: 4,
      icon: CameraIcon,
      text: "carpe_symband",
      decription: "社交媒體",
      href: "/contact"
    }
  ]

  return (
    <>
      <div className="flex flex-col items-center">
        <div
          className="relative w-full overflow-hidden overflow-x-auto selection:bg-slate-700/50 h-[15rem] lg:h-[28rem]">
          <Image src={envelope} alt="Concert Hall" className="h-full select-none object-cover brightness-[0.3] grayscale"/>
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
               className="my-6 hidden w-64 select-none items-center bg-white justify-between rounded-3xl px-5 py-4 transition-all duration-300 group hover:bg-slate-800 lg:flex">
              <p className="text-xl text-slate-700 group-hover:text-slate-50">
                即將舉行的音樂會
              </p>
              <ArrowRightIcon className="w-8 stroke-2 text-slate-700 group-hover:text-slate-50 transition-all group-hover:-rotate-45"/>
            </a>
          </div>
        </div>
        <div
          className="flex flex-col max-w-7xl items-start justify-center px-6 py-12 sm:px-16 md:py-24 xl:space-x-28 xl:flex-row xl:items-center">
          <div className="flex flex-col text-slate-700 max-w-[35rem] space-y-6">
            <p className="text-4xl font-maru md:text-6xl">
              歡迎隨時聯絡我們
            </p>
            <p className="text-lg opacity-80 md:text-2xl">
              您的寶貴意見對我們來說十分重要。我們樂於接受新的想法、建議、查詢或合作，您可以透過以下方式與我們聯絡。
            </p>
          </div>
          <div className="flex flex-col py-8 text-lg text-slate-700 opacity-80 space-y-4 md:text-2xl">
            {contactMethods.map((method) => (
              <a key={method.id} href={method.href} className="flex items-center transition-all duration-300 hover:text-red-800 md:space-x-4">
                <method.icon className="w-7 text-red-800 md:w-10"/>
                <div className="flex divide-x divide-slate-700">
                  <p className="lg:w-52 w-40 px-4">{method.text}</p>
                  <p className="px-4">{method.decription}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
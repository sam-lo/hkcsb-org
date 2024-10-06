import Image from "next/image";
import envelope from "@/public/photo/envelope.jpg";
import {ArrowRightIcon, EnvelopeIcon, GlobeAsiaAustraliaIcon, PhoneIcon} from "@heroicons/react/24/outline";
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
      icon: InstagramIcon,
      text: "carpe_symband",
      decription: "社交媒體",
      href: "/contact"
    }
  ]

  return (
    <>
      <div className="flex flex-col items-center">
        <div
          className="relative w-full overflow-hidden overflow-x-auto selection:bg-slate-700/50 h-[15rem] lg:h-[27rem] md:h-[22rem]">
          <div className="absolute z-10 inset-0 bg-gradient-to-r from-red-950 from-5% to-transparent brightness-50"/>
          <Image src={envelope} alt="Concert Hall"
                 className="h-full select-none object-cover brightness-[0.5] grayscale"/>
          <div
            className="absolute z-20 inset-0 left-0 flex w-full flex-col px-6 py-12 md:px-16 lg:w-[50rem] lg:inset-y-20">
            <hr className="my-5 w-full border-4 border-red-800 px-10 brightness-125"/>
            <div className="flex flex-col text-white space-y-2 md:space-y-4">
              <p className="w-fit font-serif text-4xl font-bold md:text-5xl">
                聯絡我們
              </p>
              <p className="w-fit opacity-80 sm:text-lg md:text-2xl">
                歡迎詢問及提出意見
              </p>
            </div>
            <hr className="mt-5 w-full border-2 border-red-800 px-10 brightness-125"/>
            <a href="/concert"
               className="mt-7 hidden md:flex w-fit space-x-2 select-none items-center outline-white outline-1 rounded-2xl outline px-4 py-3 transition-all duration-300 group hover:bg-white lg:flex">
              <p className="text-xl text-white font-light group-hover:text-red-950">
                即將舉行的音樂會
              </p>
              <ArrowRightIcon
                className="w-8 stroke-2 text-white transition-all group-hover:-rotate-45 group-hover:text-red-950"/>
            </a>
          </div>
        </div>
        <div
          className="flex flex-col items-start justify-center px-4 py-12 sm:px-16 md:py-24 xl:space-x-28 xl:flex-row max-w-7xl xl:items-center">
          <div className="flex flex-col text-white max-w-[35rem] space-y-6">
            <p className="text-4xl font-serif font-medium md:text-5xl">
              歡迎隨時聯絡我們
            </p>
            <p className="text-lg opacity-60 md:text-2xl">
              您的寶貴意見對我們來說十分重要。我們樂於接受新的想法、建議、查詢或合作，您可以透過以下方式與我們聯絡。
            </p>
          </div>
          <div className="flex flex-col py-8 sm:text-lg text-white opacity-80 space-y-4 md:text-2xl">
            {contactMethods.map((method) => (
              <a key={method.id} href={method.href} className="flex items-center transition-all duration-300 group hover:brightness-125 md:space-x-4">
                <method.icon className="w-7 text-gold md:w-10"/>
                <div className="flex items-center divide-x group-hover:opacity-70 divide-white">
                  <p className="md:w-52 w-40 px-4">{method.text}</p>
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

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 448 512"
    className="w-7 text-gold md:w-10"
  >
    <path
      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
    />
  </svg>
);
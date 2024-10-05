import Image from "next/image";
import stand from "@/public/photo/stand.jpg";
import poster from "@/public/photo/poster.png";
import React from "react";
import {CalendarDaysIcon} from "@heroicons/react/24/outline";

export default function Concert() {

  return (
    <div className="flex flex-col items-center">
      <div
        className=" relative w-full overflow-hidden overflow-x-auto selection:bg-slate-700/50 h-[15rem] lg:h-[25rem]">
        <div className="absolute z-10 inset-0 bg-gradient-to-r from-red-950 from-5% to-transparent brightness-50"/>
        <Image src={stand} alt="Concert Hall"
               className="h-full select-none object-cover grayscale-[0.6] brightness-[0.4]"/>
        <div className="absolute z-20 inset-0 left-0 flex w-full flex-col px-6 py-12 sm:px-16 lg:w-[50rem] lg:inset-y-24">
          <hr className="my-5 w-full border-4 border-red-800 px-10 brightness-125"/>
          <div className="flex flex-col text-slate-50 space-y-2 lg:space-y-4">
            <p className="w-fit font-serif text-4xl font-bold lg:text-5xl">
              音樂會與門票
            </p>
            <p className="w-fit text-lg opacity-80 lg:text-2xl">
              了解即將舉行的音樂會
            </p>
          </div>
          <hr className="my-5 w-full border-2 border-red-800 px-10 brightness-125"/>
        </div>
      </div>
      <ConcertDescription/>
    </div>
  )
}

function ConcertDescription() {

  const Details = {
    title: "The First Note",
    date: "1st March 2024",
    time: "7:30 PM",
    location: "Lee Hysan Concert Hall",
    price: "200HKD Per Ticket",
    Programme: [
      {
        id: 1,
        composer: "James Barnes",
        piece: "Alvamar Overture",
        duration: "8"
      },
      {
        id: 2,
        composer: "Itaru Sakai",
        piece: "The Seventh Night of July",
        duration: "9"
      },
      {
        id: 3,
        composer: "George Gershwin / arr. Ferde Grofé",
        piece: "Rhapsody in Blue",
        duration: "18~"
      },
    ]
  }

  return (
    <div
      className="flex flex-col w-full items-center justify-around px-4 py-12 lg:py-24 space-y-8 lg:space-y-0 lg:flex-row max-w-7xl">
      <Image src={poster} alt="poster" className="h-fit lg:w-1/3"/>
      <div className="flex h-full flex-col lg:w-1/2">
        <hr className="mb-5 w-full border-4 border-red-800 px-10 brightness-125"/>
        <div className="flex flex-col text-slate-700 space-y-2 md:space-y-4">
          <p className="w-fit font-cinzel text-4xl md:text-5xl">
            {Details.title}
          </p>
          <p className="w-fit text-sm opacity-80 md:text-xl">
            {Details.date} | {Details.time} | {Details.location}
          </p>
        </div>
        <hr className="my-5 w-full border-2 border-red-800 px-10 brightness-125"/>
        <div className="flex flex-col text-slate-700 space-y-6">
          <p className="text-xl font-bold">
            Programme Highlights
          </p>
          <div className="flex flex-col space-y-3">
            {Details.Programme.map((item) => (
              <div key={item.id} className="flex text-sm items-center space-x-2">
                <p className="font-bold">{item.composer}</p>
                <div className="sm:block hidden">|</div>
                <p>{item.piece}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex pt-8  flex-row-reverse">
          <a href="/concert/reservation"
             className="flex rounded-xl bg-slate-500 px-4 py-3 text-2xl text-white transition-all duration-300 space-x-2 font-maru hover:-translate-y-1 hover:-rotate-1 hover:bg-red-900 hover:shadow-2xl hover:shadow-slate-700/70">
            <CalendarDaysIcon className="w-8"/>
            <p>網上預訂門票</p>
          </a>
        </div>
      </div>
    </div>
  )
}
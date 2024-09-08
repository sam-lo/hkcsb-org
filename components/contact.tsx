import {EnvelopeIcon, GlobeAsiaAustraliaIcon, PhoneIcon} from "@heroicons/react/24/outline";
import practice from "@/public/photo/practice.jpeg";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div className="flex space-x-32">
        <div className="flex lg:w-1/2 w-full">
          <div className="flex items-center">
            <div className="flex flex-col space-y-4 text-slate-700 text-left">
              <div className="w-full px-10 h-2 bg-red-800"/>
              <div className="text-4xl text-slate-700">
                聯絡我們
              </div>
              <div className="w-full px-10 h-1 mb-4 bg-red-800"/>
              <div className="w-fit font-serif text-4xl xl:text-6xl">
                Carpe Symphonic Band
              </div>
              <div className="w-full px-10 h-2 bg-red-800"/>
              <div className="flex flex-col py-8 space-y-4 text-lg text-justify opacity-80">
                <div className="flex space-x-8 items-center text-slate-700">
                  <PhoneIcon className="w-10 text-red-950"/>
                  <div className="text-2xl">
                    +852 5403 1510 | 樂團經理 梁小姐
                  </div>
                </div>
                <div className="flex space-x-8 items-center">
                  <EnvelopeIcon className="w-10 text-red-950"/>
                  <div className="text-2xl">
                    info@hkcsb.org
                  </div>
                </div>
                <a href="https://www.hkcsb.org" className="flex space-x-8 items-center hover:text-red-950 transition-all duration-500">
                  <GlobeAsiaAustraliaIcon className="w-10 text-red-950"/>
                  <div className="text-2xl">
                    www.hkcsb.org
                  </div>
                </a>
              </div>
              <div className="w-full px-10 h-2 bg-red-800"/>
            </div>
          </div>
        </div>
        <Image src={practice} alt="practice" className="hidden lg:block"/>
      </div>
    </>
  )
}
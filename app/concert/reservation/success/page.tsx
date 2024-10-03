import scorewithconduct from "assets/images/scorewithconduct.jpg";
import Image from "next/image";

export default function UploadSuccess() {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-full overflow-hidden overflow-x-auto selection:bg-slate-700/50 h-[15rem] lg:h-[25rem]">
        <Image src={scorewithconduct} alt="Concert Hall"
               className="h-full select-none object-cover grayscale-[0.6] brightness-[0.4]"/>
        <div className="absolute inset-0 left-0 flex w-full flex-col px-6 py-12 sm:px-16 lg:w-[50rem] lg:inset-y-24">
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
    </div>
  )
}
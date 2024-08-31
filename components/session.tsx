import * as React from "react";

export default function Session(props: any) {
  return (
    <div
      className="flex flex-col items-center justify-center sm:gap-20 gap-10 sm:p-24 p-10 selection:bg-amber-900/30">
      <div className="flex flex-col justify-center w-full text-center text-amber-900 items-center gap-4 sm:gap-6">
        <div className="sm:text-5xl text-3xl font-bold">
          {props.title}
        </div>
        <div className="sm:text-xl text-md sm:w-4/5 xl:w-3/5">
          {props.description}
        </div>
      </div>
      {props.children}
    </div>
  )
}
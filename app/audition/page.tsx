import Image from "next/image";
import {Field, Fieldset, Input, Label, Legend, Select, Button} from '@headlessui/react'
import clsx from 'clsx';
import hallwithpiano from "@/public/photo/hallwithpiano.jpg";
import {ArrowRightIcon} from "@heroicons/react/24/outline";
import React from "react";

export default function Audition() {
  return (
    <div className="flex flex-col">
      <div
        className="w-full lg:h-[28rem] h-[15rem] overflow-hidden relative overflow-x-auto selection:bg-slate-700/50">
        <Image src={hallwithpiano} alt="Concert Hall" className="brightness-[0.3] object-cover h-full select-none"/>
        <div className="flex flex-col w-full lg:w-[50rem] absolute lg:inset-y-20 inset-0 left-0 sm:px-16 px-6 py-12">
          <hr className="w-full px-10 border-4 my-5 border-red-800 brightness-125"/>
          <div className="flex flex-col text-slate-50 md:space-y-4 space-y-2">
            <p className="font-serif font-bold md:text-5xl text-4xl w-fit">
              參加試音
            </p>
            <p className="md:text-2xl sm:text-lg opacity-80 w-fit">
              加入 Carpe Symphonic Band
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
        className="sm:px-16 px-6 flex lg:flex-row flex-col lg:items-center items-start lg:space-x-28 justify-center py-12 md:py-18">
        <div className="flex flex-col text-slate-700 max-w-[35rem] space-y-6">
          <p className="md:text-6xl text-4xl font-gothic">
            歡迎參加甄選
          </p>
          <p className="md:text-2xl sm:text-lg opacity-80">
          我們歡迎對音樂有熱誠的樂手參加試音，無論您是管樂手或敲擊樂手，我們都歡迎您參加試音。
          </p>
          {/*<p className="md:text-2xl sm:text-lg opacity-80">
            試音時，您將會被要求演奏一首自選曲目，以展示您的音樂技巧。我們亦會進行一些簡單的樂理測試，以確保您對音樂的理解程度。
          </p>*/}
          <div className="flex flex-col space-y-2">
            <p className="md:text-3xl sm:text-xl font-gothic">樂手要求</p>
            <ul className="list-disc list-inside text-lg">
              <li>16歲以上 (具有自理能力)</li>
              <li>18歲以下需要家長/監護人同意參加</li>
              <li>ABRSM Grade 6 以上或相等程度技術</li>
              <li>需要有1年或以上樂團經驗</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="md:text-3xl sm:text-xl font-gothic">甄選程序</p>
            <ul className="list-decimal list-inside text-lg">
              <li>簡單面談</li>
              <li>演奏水平測試 (即場視譜及自選樂曲)</li>
              <li>樂團坐奏測試</li>
            </ul>
          </div>
          <a href="/contact" className="hover:text-red-800 md:text-2xl sm:text-lg opacity-80">
            如果您對試音有任何疑問，請隨時與我們聯絡。
          </a>
        </div>
        <AuditionForm/>
      </div>
    </div>
  )
}

function AuditionForm() {
  return (
    <div className="w-full max-w-lg my-8">
      <Fieldset className="space-y-4 font-gothic text-slate-700 rounded-3xl">
        <Legend className="text-4xl">試音表格</Legend>
        <Field className="flex flex-col">
          <Label className="text-xl">中文全名</Label>
          <Input type="text" className="mt-2 bg-slate-300 rounded-2xl focus:outline-none px-4 py-3"/>
        </Field>
        <Field className="flex flex-col">
          <Label className="text-xl">英文全名</Label>
          <Input type="text" className="mt-2 bg-slate-300 rounded-2xl focus:outline-none px-4 py-3"/>
        </Field>
        <Field className="flex flex-col">
          <Label className="text-xl">稱謂</Label>
          <div className="relative">
            <Select className={clsx(
              'mt-3 block w-full rounded-2xl border-none bg-slate-300 py-3 px-4',
              'rounded-xl focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}>
              <option>Mr. 先生</option>
              <option>Ms. 小姐</option>
              <option>Mrs. 太太</option>
              <option>Dr. 博士</option>
              <option>Prof. 教授</option>
              <option>Sir. 爵士</option>
            </Select>
          </div>
        </Field>
        <Field className="flex flex-col">
          <Label className="text-xl">流動電話（香港）</Label>
          <Input type="text" className="mt-2 bg-slate-300 rounded-2xl focus:outline-none px-4 py-3"/>
        </Field>
        <Field className="flex flex-col">
          <Label className="text-xl">電郵地址</Label>
          <Input type="text" className="mt-2 bg-slate-300 rounded-2xl focus:outline-none px-4 py-3"/>
        </Field>
        <Field className="flex justify-end py-3">
          <Button className="flex px-6 py-3 text-2xl bg-slate-400 rounded-2xl">提交申請</Button>
        </Field>
      </Fieldset>
    </div>
  )
}
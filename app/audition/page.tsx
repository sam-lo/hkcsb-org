"use client"
import Image from "next/image";
import {Field, Fieldset, Input, Label, Legend, Select} from '@headlessui/react'
import clsx from 'clsx';
import scorewithconduct from "@/public/photo/scorewithconduct.jpg";
import {ArrowRightIcon} from "@heroicons/react/24/outline";
import React, {useState} from "react";

export default function Audition() {
  return (
    <div className="flex flex-col items-center w-full">
      <div
        className="relative w-full overflow-hidden overflow-x-auto selection:bg-slate-700/50 h-[15rem] lg:h-[28rem]">
        <div className="absolute z-10 inset-0 bg-gradient-to-r from-red-950 from-5% to-transparent brightness-50"/>
        <Image src={scorewithconduct} alt="Concert Hall" className="h-full select-none object-cover brightness-50"/>
        <div className="absolute z-20 inset-0 left-0 flex w-full flex-col px-6 py-12 sm:px-16 lg:w-[50rem] lg:inset-y-20">
          <hr className="my-5 w-full border-4 border-red-800 px-10 brightness-125"/>
          <div className="flex flex-col text-slate-50 space-y-2 md:space-y-4">
            <p className="w-fit font-serif text-4xl font-bold md:text-5xl">
              加入樂團
            </p>
            <p className="w-fit opacity-80 sm:text-lg md:text-2xl">
              加入 Carpe Symphonic Band
            </p>
          </div>
          <hr className="my-5 w-full border-2 border-red-800 px-10 brightness-125"/>
          <a href="/concert"
             className="my-5 hidden w-64 select-none items-center justify-between rounded-3xl outline outline-white px-5 py-4 transition-all duration-300 group hover:bg-white lg:flex">
            <p className="text-xl text-white group-hover:text-red-950">
              即將舉行的音樂會
            </p>
            <ArrowRightIcon
              className="w-8 stroke-2 text-white transition-all group-hover:-rotate-45 group-hover:text-red-950"/>
          </a>
        </div>
      </div>
      <div
        className="flex flex-col w-full items-center px-6 sm:space-y-12 space-y-8 md:py-24 py-10 lg:space-x-28 sm:px-16 lg:flex-row max-w-7xl">
        <AuditionDetails/>
        <hr className="w-full lg:hidden border-2 border-red-800 px-10 brightness-125"/>
        <AuditionForm/>
      </div>
    </div>
  )
}

function AuditionDetails() {
  return (
    <div className="flex flex-col text-slate-700 space-y-6">
      <p className="text-4xl font-serif font-medium md:text-6xl">
        歡迎參加試音
      </p>
      <p className="opacity-80 sm:text-lg md:text-xl">
        我們誠邀對音樂有熱誠的樂手加入樂團，不論您是木管，銅管或敲擊樂手，我們都歡迎您參加試音。
      </p>
      <div className="flex flex-col space-y-2">
        <p className="text-2xl font-serif font-bold md:text-3xl">申請者要求</p>
        <ul className="list-inside list-disc text-md">
          <li>16歲以上 (具有自理能力)</li>
          <li>若申請人未滿18歲需要家長或監護人同意</li>
          <li>ABRSM 第六級以上或相等程度資歷</li>
          <li>需要有1年或以上樂團經驗</li>
        </ul>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-2xl font-serif font-bold md:text-3xl">試音程序</p>
        <ul className="list-inside list-decimal text-md">
          <li>簡單面談</li>
          <li>演奏水平測試 (即場視譜及自選樂曲)</li>
          <li>樂團坐奏測試</li>
        </ul>
      </div>
      <p className="sm:text-lg md:text-xl">我們收到申請表格後會盡快聯絡您。</p>
      <div className="flex space-x-2 group">
        <a href="/contact" className="w-fit opacity-80 hover:text-red-800 sm:text-lg md:text-xl">
          如果您對試音有任何疑問，歡迎與我們聯絡。
        </a>
        <ArrowRightIcon
          className="w-6 -translate-x-12 opacity-0 transition-all duration-300 group-hover:-translate-x-2 group-hover:text-red-800 group-hover:opacity-100"/>
      </div>
    </div>
  )
}

function AuditionForm() {

  const [chineseName, setChineseName] = useState("")
  const [englishName, setEnglishName] = useState("")
  const [title, setTitle] = useState("Mr. 先生")
  const [phone, setPhone] = useState("")

  const validation = (/[\u4e00-\u9fa5]/.test(chineseName) && /^[a-zA-Z\s]*$/.test(englishName) && /^[0-9]{8}$/.test(phone))

  const titleOptions = [
    {id: 1, value: "Mr. 先生"},
    {id: 2, value: "Ms. 小姐"},
    {id: 3, value: "Mrs. 太太"},
  ]

  const submitForm = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const url = 'https://script.google.com/macros/s/AKfycbwba8jQ4nnxpsRmoe-J1nQZlaQJE5Mq1SFSX3rGyKOsMdv7mQBfKu_i5oFYYmy_UsKimg/exec'; // Google Apps Script Web App URL

    const formData = new URLSearchParams();
    formData.append('中文全名', chineseName);
    formData.append('英文全名', englishName);
    formData.append('稱謂', title);
    formData.append('電話號碼', phone);

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        alert(`HTTP error! status: ${response.status}`);
        return;
      }

      const data = await response.json();
      if (data.result === 'success') {
        alert('你已成功提交表格，我們將盡快聯絡你');
      } else {
        alert('Failed to submit: ' + data.error);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error:', error.message);
        alert('Error: ' + error.message);
      } else {
        console.error('An unknown error occurred.');
        alert('An unknown error occurred.');
      }
    }
  };

  return (
    <div className="flex w-full flex-col text-slate-700 space-y-6">
      <Fieldset className="text-slate-700 space-y-4 font-serif font-medium">
        <Legend className="text-4xl font-medium">申請表格</Legend>
        <Field className="flex flex-col">
          <Label className="text-xl">中文全名</Label>
          <Input id="chineseName" onChange={(e) => setChineseName(e.target.value)} type="text"
                 className="mt-2 rounded-2xl font-sans font-normal bg-slate-300 px-4 text-lg py-2.5 focus:outline-none"/>
          {/[\u4e00-\u9fa5]/.test(chineseName) && chineseName !== "" ? null :
            <p className="mt-1 text-sm text-slate-700 opacity-70">請按身分證輸入中文姓名</p>}
        </Field>
        <Field className="flex flex-col">
          <Label className="text-xl">英文全名</Label>
          <Input id="englishName" onChange={(e) => setEnglishName(e.target.value)} type="text"
                 className="mt-2 rounded-2xl font-sans font-normal bg-slate-300 px-4 text-lg py-2.5 focus:outline-none"/>
          {/^[a-zA-Z\s]*$/.test(englishName) && englishName !== "" ? null :
            <p className="mt-1 text-sm text-slate-700 opacity-70">請按身分證輸入英文姓名</p>}
        </Field>
        <Field className="flex flex-col">
          <Label className="text-xl">稱謂</Label>
          <div className="relative">
            <Select id="title" onChange={(e) => setTitle(e.target.value)} className={clsx(
              'mt-2 block w-full rounded-2xl appearance-none text-lg font-sans font-normal border-none bg-slate-300 px-4 py-3',
              'rounded-2xl focus:outline-none data-[focus]:outline-2 font-sans font-normal data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}>
              {titleOptions.map((option) => (
                <option key={option.id}>{option.value}</option>
              ))}
            </Select>
          </div>
        </Field>
        <Field className="flex flex-col">
          <Label className="text-xl">流動電話號碼（香港）</Label>
          <Input id="Phone" onChange={(e) => setPhone(e.target.value)} type="text"
                 className="mt-2 rounded-2xl font-sans font-normal bg-slate-300 px-4 text-lg py-2.5 focus:outline-none"/>
          {/^[0-9]{8}$/.test(phone) ? null :
            <p className="mt-1 text-sm text-slate-700 opacity-70">請輸入8位數字的電話號碼</p>}
        </Field>
        <Field className="flex flex-col items-end py-3 space-y-1">
          <button onClick={submitForm} disabled={!validation}
             className={"flex w-fit px-6 py-3 text-2xl bg-slate-400 rounded-2xl " + (validation ? null : "pointer-events-none grayscale cursor-not-allowed")}>
            提交申請
          </button>
          <div className="text-slate-700">
            {validation ? null : <p className="text-center text-sm opacity-70">請填寫正確的資料</p>}
          </div>
        </Field>
      </Fieldset>
    </div>
  )
}
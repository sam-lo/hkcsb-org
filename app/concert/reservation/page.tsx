"use client";
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import stand from "@/public/photo/stand.jpg";
import {Field, Fieldset, Input, Label, Legend} from "@headlessui/react";
import {ArrowRightIcon} from "@heroicons/react/24/outline";

export default function ReservationForm() {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-full overflow-hidden overflow-x-auto selection:bg-slate-700/50 h-[15rem] lg:h-[25rem]">
        <Image src={stand} alt="Concert Hall"
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
      <div
        className="flex flex-col items-center px-6 py-10 space-y-8 sm:space-y-12 sm:px-16 md:py-16 lg:space-x-28 lg:flex-row">
        <TicketingDetails/>
        <TicketingForm/>
      </div>
    </div>
  );
}

function TicketingDetails() {

  const Policies = [
    "付款後不設退款。",
    "是次音樂會不設劃位及優惠門票。",
    "如表演當天下午兩時正香港天文台發出八號烈風或暴風信號，紅色或黑色暴雨警告，音樂會將會取消。",
    "主辦單位保留更改活動節目的權利，恕不另行通知。",
    "請妥善保管您的付款收據，遺失將不予補發。",
    "有特殊需要的觀眾可提前與我們聯繫以獲得協助。"
  ];

  const Procedures = [
    "於網上表格內填寫個人資料及購票數量。",
    "根據提供的付款方式及表格上顯示的金額進行付款。",
    "在預訂表格底部上載付款證明如螢幕截圖後按提交表格。",
    "我們收到表格後三個工作天內將單據發送到閣下的登記電郵。",
    "屆時請與場地前台工作人員核對身份領取門票。"
  ];

  return (
    <div className="flex flex-col text-slate-700 max-w-[35rem] space-y-6">
      <p className="text-4xl font-maru md:text-5xl">
        網上預訂門票
      </p>
      <p className="opacity-80 sm:text-md md:text-2xl">
        以網上方式預訂門票，請填寫以下表格。你的個人資料將會被妥善保密，並會在音樂會後銷毀。
      </p>
      <div className="flex flex-col space-y-2">
        <p className="text-2xl font-maru md:text-3xl">條款及細則</p>
        <ul className="list-inside list-disc text-md">
          {Policies.map((policy) => (
            <li key={policy}>{policy}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-2xl font-maru md:text-3xl">購票程序</p>
        <ul className="list-inside list-decimal text-md">
          {Procedures.map((procedure) => (
            <li key={procedure}>{procedure}</li>
          ))}
        </ul>
      </div>
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

function TicketingForm() {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [quantity, setQuantity] = useState<number | ''>('');
  const [amount, setAmount] = useState<number>(0);
  const [isFormValid, setIsFormValid] = useState(false);

  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('沒有檔案');

  // Update amount whenever quantity changes
  useEffect(() => {
    if (quantity) {
      setAmount(200 * Number(quantity));
    } else {
      setAmount(0); // Reset amount if quantity is cleared
    }

    // Validate form fields
    const isNameValid = /[\u4e00-\u9fa5]/.test(name) && name !== "";
    const isPhoneValid = /^[0-9]{8}$/.test(phone);
    const isQuantityValid = !isNaN(quantity as number) && Number(quantity) >= 1 && Number(quantity) <= 100;

    if (isNameValid && isPhoneValid && isQuantityValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [name, phone, quantity]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : '沒有檔案');
  };

  const submitForm = async () => {
    const url = 'https://script.google.com/macros/s/AKfycbxOHBvTTouR_QHp6V4-qVAnzQ1BSYrUtyh66LIeHMQEiPAnu1QLOEcM1PRW1QuBnke4/exec'; // Google Apps Script Web App URL

    const formData = new URLSearchParams();
    formData.append('中文全名', name);
    formData.append('電話號碼', phone);
    formData.append('數量', String(quantity));
    formData.append('金額', String(amount));

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.result === 'success') {
        alert('你已成功提交表格，我們將盡快處理你的付款');
      } else {
        alert('Failed to submit: ' + data.error);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert('Error: ' + error.message);
      } else {
        alert('An unknown error occurred.');
      }
    }
  };

  return (
    <div
      className="flex w-full flex-col items-center justify-center space-y-6 sm:space-y-0 lg:space-x-28 lg:flex-row">
      <div className="flex w-full flex-col items-center text-slate-700 max-w-[35rem] space-y-6">
        <Fieldset className="w-full text-slate-700 space-y-4 font-maru">
          <Legend className="text-4xl">預訂門票表格</Legend>
          <Field className="flex flex-col">
            <Label className="text-xl">中文全名</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} type="text"
                   className="mt-2 rounded-2xl bg-slate-300 px-4 text-lg py-2.5 focus:outline-none"/>
            {/[\u4e00-\u9fa5]/.test(name) && name !== "" ? null :
              <p className="mt-1 text-sm text-slate-700 opacity-70">請輸入中文姓名</p>}
          </Field>
          <Field className="flex flex-col">
            <Label className="text-xl">流動電話號碼（香港）</Label>
            <Input id="Phone" onChange={(e) => setPhone(e.target.value)} type="text"
                   className="mt-2 rounded-2xl bg-slate-300 px-4 text-lg py-2.5 focus:outline-none"/>
            {/^[0-9]{8}$/.test(phone) ? null :
              <p className="mt-1 text-sm text-slate-700 opacity-70">請輸入8位數字的電話號碼</p>}
          </Field>
          <Field className="flex flex-col">
            <Label className="text-xl">數量 (1-100 張)</Label>
            <Input
              id="Quantity"
              type="number"
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="mt-2 rounded-2xl bg-slate-300 px-4 text-lg py-2.5 focus:outline-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            {isNaN(quantity as number) || quantity < "1" || quantity > "100" ? (
              <p className="mt-1 text-sm text-slate-700 opacity-70">請輸入1到100之間的數字</p>
            ) : null}
          </Field>
          <Field className="flex">
            <label
              className="flex w-full mt-2 items-center overflow-clip rounded-2xl border border-slate-300">
              <p
                className={`w-full px-4 text-lg py-2.5 ${fileName === '沒有檔案' ? 'text-gray-900/40' : 'text-gray-900/80'}`}>
                {fileName}
              </p>
              <input type="file" hidden onChange={handleFileChange}/>
              <div
                className="flex w-36 cursor-pointer items-center justify-center bg-slate-500 px-4 text-lg text-white shadow py-2.5 focus:outline-none">
                選擇檔案
              </div>
            </label>
          </Field>
          <div
            className="flex flex-col items-center py-4 space-y-4 sm:space-x-12 sm:space-y-0 sm:flex-row sm:justify-between">
            <div className="flex flex-col items-center sm:items-start">
              <p className="text-2xl sm:text-lg">門票價格: 每張 $200 </p>
              <p className="text-2xl sm:text-lg">總金額 (港元結算)：${amount}</p>
            </div>
            <button
              type="submit"
              disabled={!isFormValid}
              onClick={submitForm}
              className={`rounded-2xl px-5 py-4 text-2xl ${isFormValid ? "bg-slate-400" : "bg-gray-400"}`}
            >
              提交表格
            </button>
          </div>
        </Fieldset>
      </div>
    </div>
  )
}

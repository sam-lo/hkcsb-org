"use client";
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import hallwithaudience from "@/public/photo/hallwithaudience.jpg";
import {Field, Fieldset, Input, Label, Legend} from "@headlessui/react";

export default function ReservationForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [quantity, setQuantity] = useState<number | ''>('');
  const [amount, setAmount] = useState<number>(0);

  // Update amount whenever quantity changes
  useEffect(() => {
    if (quantity) {
      setAmount(200 * Number(quantity));
    } else {
      setAmount(0); // Reset amount if quantity is cleared
    }
  }, [quantity]);

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
        alert('Form submitted successfully! We Will Contact You Soon.');
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
    <div className="flex flex-col items-center">
      <div
        className="relative w-full overflow-hidden overflow-x-auto selection:bg-slate-700/50 h-[15rem] lg:h-[25rem]">
        <Image src={hallwithaudience} alt="Concert Hall"
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
        className="flex w-full flex-col items-center justify-center px-6 py-10 space-y-6 sm:space-y-0 sm:px-16 md:py-18 lg:space-x-28 lg:flex-row">
        <div className="flex w-full flex-col text-slate-700 scale-[0.95] max-w-[35rem] space-y-6 sm:scale-100">
          <Fieldset className="w-full text-slate-700 space-y-4 font-gothic">
            <Legend className="text-4xl">網上預訂門票</Legend>
            <Field className="flex flex-col">
              <Label className="text-xl">中文全名</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} type="text"
                     className="mt-2 rounded-2xl bg-slate-300 px-4 text-lg py-2.5 focus:outline-none"/>
              {/[\u4e00-\u9fa5]/.test(name) && name !== "" ? null :
                <p className="mt-1 text-sm text-slate-700 opacity-70">請輸入中文姓名</p>}
            </Field>
            <Field className="flex flex-col">
              <Label className="text-xl">流動電話（香港）</Label>
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
            <div
              className="flex flex-col items-center space-y-4 sm:space-x-12 sm:space-y-0 sm:flex-row sm:justify-between">
              <div className="flex flex-col items-center sm:items-start">
                <p className="text-2xl sm:text-lg">門票價格: 每張 $200 </p>
                <p className="text-2xl sm:text-lg">總金額 (港元結算)：${amount}</p>
              </div>
              <button type="button" onClick={submitForm} className="rounded-2xl bg-slate-400 px-4 py-3 text-xl">
                提交表格
              </button>
            </div>
          </Fieldset>
        </div>
      </div>
    </div>
  );
}
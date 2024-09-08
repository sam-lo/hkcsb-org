"use client"
import {menusItems} from "@/app/data/menuItems";
import {Popover, PopoverButton, PopoverPanel, Transition} from "@headlessui/react";
import {Bars3Icon, HomeIcon} from "@heroicons/react/24/outline";
import {Fragment} from "react";

export default function Header() {
  const filteredItems = menusItems.filter(item => item.id >= 1);
  return (
    <>
      <div
        className="select-none absolute z-10 inset-x-0 lg:from-slate-700 lg:to-slate-800 lg:bg-gradient-to-r rounded-b-3xl lg:shadow-2xl shadow-black/80">
        <div className="items-center justify-start space-x-8 py-5 px-8 hidden lg:flex">
          <HomeIcon onClick={() => window.location.href = '/'}
                    className="w-12 p-2 rounded-3xl text-slate-50 hover:text-slate-700 hover:bg-slate-50 transition-all duration-300"/>
          {filteredItems.map((item) => (
            <a href={item.href} key={item.id}
               className="py-3 px-5 rounded-3xl text-xl text-center text-slate-50 hover:text-slate-700 hover:bg-slate-50 transition-all duration-300">
              {item.name}
            </a>
          ))}
        </div>
        <div className="w-full relative flex lg:hidden items-center justify-end py-6 sm:px-16 px-8">
          <Popover className="">
            <PopoverButton className="active:opacity-100 focus:outline-none opacity-80">
              <Bars3Icon className="w-10" aria-hidden={true}/>
            </PopoverButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
            <PopoverPanel className="absolute lg:right-16 right-8 z-10 text-slate-700 rounded-3xl bg-slate-50 transition duration-300 ease-in-out">
              <div
                className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-slate-50 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-2">
                  {menusItems.map((item) => (
                    <a href={item.href} key={item.name}
                       className="group relative flex gap-x-6 rounded-2xl p-2 px-4 hover:bg-slate-200">
                      <div
                        className="mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-slate-100 group-hover:bg-slate-900/80 transition duration-300 ease-in-out">
                        <item.icon className="h-7 w-7 text-slate-700 group-hover:text-slate-50" aria-hidden="true"/>
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-slate-700">
                          {item.name}
                        </p>
                        <p className="text-slate-700 opacity-80">{item.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </PopoverPanel>
            </Transition>
          </Popover>
        </div>
      </div>
    </>
)
}
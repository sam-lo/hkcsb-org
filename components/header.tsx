"use client"
import {menusItems} from "@/app/data/menuItems";
import {Popover, PopoverButton, PopoverPanel, Transition} from "@headlessui/react";
import {Bars3Icon, HomeIcon} from "@heroicons/react/24/outline";
import {Fragment} from "react";

export default function Header() {
  const filteredItems = menusItems.filter(item => item.id >= 1);
  return (
    <>
      <div className="relative">
        <div
          className="select-none absolute z-50 inset-x-0 lg:bg-black lg:shadow-2xl">
          <div className="items-center justify-start space-x-8 py-5 px-8 hidden lg:flex">
            <HomeIcon onClick={() => window.location.href = '/'}
                      className="w-12 p-2 rounded-3xl text-slate-50 hover:text-black hover:bg-white transition-all duration-300"/>
            {filteredItems.map((item) => (
              <a href={item.href} key={item.id}
                 className="py-3 px-5 rounded-3xl text-xl text-center text-white hover:text-black hover:bg-white transition-all duration-300">
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex lg:hidden items-center justify-end py-5 sm:px-16 px-6">
            <Popover className="">
              <PopoverButton className="active:opacity-100 focus:outline-none opacity-80">
                <Bars3Icon className="text-white w-8" aria-hidden={true}/>
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
                <PopoverPanel className="absolute inset-x-0 z-10 mt-5 flex w-screen max-w-max px-4">
                  <div
                    className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-neutral-900 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-2">
                      {menusItems.map((item) => (
                        <a href={item.href} key={item.name}
                           className="group items-center flex gap-x-6 rounded-2xl p-2 hover:bg-neutral-800">
                          <div
                            className="flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-neutral-800 group-hover:bg-neutral-900 transition duration-300 ease-in-out">
                            <item.icon className="h-8 text-gold brightness-125" aria-hidden="true"/>
                          </div>
                          <div>
                            <p className="font-semibold text-lg text-white">
                              {item.name}
                            </p>
                            <p className="text-white opacity-60">{item.description}</p>
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
      </div>
    </>
  )
}
import Image from "next/image";
import logo from "@/public/BRAND.svg";
import {menusItems} from "@/app/data/menuItems";

export default function Footer () {

  const filteredItems = menusItems.filter(item => item.id >= 1);

  return (
    <>
      <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-10 text-slate-50 bg-gradient-to-r from-slate-900 to-slate-950 lg:px-16 px-6 py-12 lg:space-x-8 items-center">
        <a href="/"><Image src={logo} alt={"Carpe Symphonic Band"} className="h-24 w-fit"/></a>
        <div className="flex flex-col">
          <div className="flex lg:space-x-8 lg:space-y-0 space-y-4 flex-col lg:flex-row">
            {filteredItems.map((menu) => (
              <a key={menu.id} href={menu.href} className="hover:opacity-70 flex space-x-2">
                <menu.icon className="w-8"/>
                <p className="text-lg">
                  {menu.name}
                </p>
              </a>
            ))}
          </div>
          <p className="font-gothic text-sm pt-4">
            ©2024 Carpe Symphonic Band. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  )
}
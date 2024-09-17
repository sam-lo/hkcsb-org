import Image from "next/image";
import logo from "@/public/LOGO.png";
import {menusItems} from "@/app/data/menuItems";

export default function Footer () {

  const filteredItems = menusItems.filter(item => item.id >= 1);

  return (
    <>
      <div className="flex bg-slate-900 px-16 py-20 space-x-8 items-center">
        <Image src={logo} alt={"Carpe Symphonic Band"} className="w-32"/>
        <div className="flex flex-col space-y-2">
          {filteredItems.map((menu) => (
            <a key={menu.id} href={menu.href} className="">
              <p className="hover:opacity-70">
                {menu.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
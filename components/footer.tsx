import Image from "next/image";
import logo from "@/public/BRAND.svg";
import {menusItems} from "@/app/data/menuItems";

export default function Footer () {

  const filteredItems = menusItems.filter(item => item.id >= 1);

  return (
    <>
      <div className="flex md:flex-row flex-col md:space-y-0 space-y-10 text-white bg-black px-4 py-8 md:py-16 md:px-16 md:space-x-4 items-center">
        <a href="/">
          <Image src={logo} alt={"Carpe Symphonic Band"} className="h-20 w-fit brightness-125"/>
        </a>
        <div className="flex flex-col">
          <div className="flex md:space-x-4 md:space-y-0 space-y-4 flex-col md:flex-row">
            {filteredItems.map((menu) => (
              <a key={menu.id} href={menu.href} className="hover:opacity-70 flex space-x-2">
                <menu.icon className="w-8 text-gold"/>
                <p className="text sm:text-lg">
                  {menu.name}
                </p>
              </a>
            ))}
          </div>
          <p className="font-sans text-sm sm:text-md pt-4">
            © 2024 Carpe Symphonic Band. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  )
}
import {menusItems} from "@/app/data/menuItems";
import {Bars3Icon, HomeIcon} from "@heroicons/react/24/outline";

export default function Header() {
  const filteredItems = menusItems.filter(item => item.id >= 1);
  return (
    <>
      <div className="absolute z-10 inset-x-0 lg:bg-slate-700 rounded-b-3xl lg:shadow-2xl shadow-black/80">
        <div className="items-center justify-start space-x-8 py-5 px-8 hidden lg:flex">
          <HomeIcon className="w-12 p-2 rounded-3xl text-slate-50 hover:text-slate-700 hover:bg-slate-50 transition-all duration-300"/>
          {filteredItems.map((item) => (
            <a href={item.href} key={item.id} className="py-3 px-5 rounded-3xl text-xl text-center text-slate-50 hover:text-slate-700 hover:bg-slate-50 transition-all duration-300">
              {item.name}
            </a>
          ))}
        </div>
        <div className="w-full flex lg:hidden items-center justify-end py-8 sm:px-14 px-8">
          <Bars3Icon className="w-12" />
        </div>
      </div>
    </>
  )
}
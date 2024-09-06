import {menusItems} from "@/app/data/menuItems";
import {HomeIcon} from "@heroicons/react/24/outline";

export default function Header() {
  const filteredItems = menusItems.filter(item => item.id >= 1);
  return (
    <>
      <div className="absolute z-10 inset-x-0 bg-slate-700 rounded-b-3xl shadow-2xl shadow-black/80">
        <div className="flex items-center justify-start space-x-8 py-5 px-8">
          <HomeIcon className="w-12 p-2 rounded-3xl text-slate-50 hover:text-slate-700 hover:bg-slate-50 transition-all duration-300"/>
          {filteredItems.map((item) => (
            <a href={item.href} key={item.id} className="py-3 px-5 rounded-3xl text-xl text-center text-slate-50 hover:text-slate-700 hover:bg-slate-50 transition-all duration-300">
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
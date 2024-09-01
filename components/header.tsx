import {menusItems} from "@/app/data/menuItems";

export default function Header() {
  return (
    <>
      <div className="bg-slate-700">
        <div className="flex space-x-8 py-4 px-32">
          {menusItems.map((item) => (
            <a href={item.href} key={item.id} className="py-2 px-5 rounded-3xl hover:bg-slate-800 text-xl text-center text-white transition-all duration-300">
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
import {menusItems} from "@/app/data/menuItems";

export default function Header() {
  return (
    <>
      <div className="flex space-x-20 justify-center p-8">
        {menusItems.map((item) => (
          <div key={item.id} className="font-serif text-2xl text-white">
            {item.name}
          </div>
        ))}
      </div>
    </>
  )
}
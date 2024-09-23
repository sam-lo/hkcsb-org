import Image from "next/image";
import poster from "@/public/photo/poster.jpeg";

const Details = {
  title: "The First Note",
  date: "1st March 2024",
  time: "7:30 PM",
  location: "Lee Hysan Concert Hall",
  price: "$200 Per Ticket"
}

const Programme = [
  {
    id: 1,
    composer: "James Barnes",
    piece: "Alvamar Overture"
  },
  {
    id: 2,
    composer: "Itaru Sakai",
    piece: "The Seventh Night of July"
  },
  {
    id: 3,
    composer: "George Gershwin / arr. Ferde Grofé",
    piece: "Rhapsody in Blue"
  }
]

export default function Event() {
  return (
    <div className="flex justify-between items-center">
      <Image src={poster} alt="conducter" className="w-1/3 shadow-2xl shadow-black hover:scale-[1.02] duration-500 transition-all"/>
      <div className="flex flex-col space-y-4 w-1/2 text-slate-700 text-left">
        <div className="w-full px-10 h-2 bg-red-800"/>
        <div className="text-6xl w-fit font-serif">
          {Details.title}
        </div>
        <div className="text-xl w-fit text-slate-700">
          <div className="px-10 h-1 mb-4 bg-red-800"/>
          {Details.time} | {Details.date} | {Details.location} | {Details.price}
        </div>
        <div className="w-full px-10 h-2 bg-red-800"/>
        <div className="flex flex-col space-y-4 text-lg text-justify">
          <div className="flex flex-col space-y-4">
            <div className="font-bold text-xl">
              Programme Highlights
            </div>
            <div className="flex flex-col space-y-2">
              {Programme.map((item) => (
                <div key={item.id} className="flex space-x-2 items-center">
                  <div className="font-bold">{item.composer}</div>
                  <div>|</div>
                  <div>{item.piece}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
        <div className="w-full px-10 h-2 bg-red-800"/>
      </div>
    </div>
  );
}
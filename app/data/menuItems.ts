import {
  ChatBubbleLeftEllipsisIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  TicketIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";
import practice from "@/public/photo/practice.jpeg";
import orchestra from "@/public/photo/orchestra.jpg";
import contact from "@/public/photo/contact.jpeg";
import conductorsit from "@/public/photo/conductorstairsit.jpg";


export const menusItems = [
  {
    id: 0,
    name: "主頁",
    description: "回到主頁",
    href: "/",
    icon: HomeIcon,
    image: practice
  },
  {
    id: 1,
    name: "關於樂團",
    description: "了解 Carpe 的資訊",
    href: "/about",
    icon: QuestionMarkCircleIcon,
    image: practice
  },
  {
    id: 2,
    name: "音樂會與門票",
    description: "查看音樂會資訊與購票",
    href: "/concert",
    icon: TicketIcon,
    image: orchestra
  },
  {
    id: 3,
    name: "加入我們",
    description: "加入Carpe的大家庭",
    href: "/join",
    icon: UserGroupIcon,
    image: conductorsit
  },
  {
    id: 4,
    name: "聯絡我們",
    description: "與我們的樂團經理聯絡",
    href: "/contact",
    icon: ChatBubbleLeftEllipsisIcon,
    image: contact
  }
]
import {
  ChatBubbleLeftEllipsisIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  TicketIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";

export const menusItems = [
  {
    id: 0,
    name: "主頁",
    description: "回到主頁",
    href: "/",
    icon: HomeIcon,
  },
  {
    id: 1,
    name: "關於樂團",
    description: "了解Carpe Symphonic Band的資訊",
    href: "/about",
    icon: QuestionMarkCircleIcon
  },
  {
    id: 2,
    name: "音樂會與門票",
    description: "查看音樂會資訊與購票",
    href: "/concert",
    icon: TicketIcon
  },
  {
    id: 3,
    name: "加入我們",
    description: "加入Carpe的大家庭",
    href: "/join",
    icon: UserGroupIcon
  },
  {
    id: 4,
    name: "聯絡我們",
    description: "與我們的樂團經理聯絡",
    href: "/contact",
    icon: ChatBubbleLeftEllipsisIcon
  }
]
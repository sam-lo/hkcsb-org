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
    fullDescription: "回到網站的主頁",
    href: "/",
    icon: HomeIcon,
  },
  {
    id: 1,
    name: "關於樂團",
    description: "了解樂團的資訊",
    fullDescription: "Carpe Symphonic Band 是一個由一群熱愛音樂的年輕人組成的樂團，請點擊這裡了解更多...",
    href: "/about",
    icon: QuestionMarkCircleIcon,
  },
  {
    id: 2,
    name: "音樂會與門票",
    description: "查看音樂會資訊與購票",
    fullDescription: "樂團每年都會舉辦多場音樂會，請點擊這裡查看音樂會的資訊與購票方法。",
    href: "/concert",
    icon: TicketIcon,
  },
  {
    id: 3,
    name: "加入樂團",
    description: "成為我們的一員",
    fullDescription: "如果您對音樂有熱情，歡迎參加我們的試音，我們歡迎各種樂器的樂手加入！",
    href: "/audition",
    icon: UserGroupIcon,
  },
  {
    id: 4,
    name: "聯絡我們",
    description: "與我們的樂團經理聯絡",
    fullDescription: "\n" +
      "如果您對樂團有任何問題或意見，歡迎與我們聯絡，我們會盡快回覆您。",
    href: "/contact",
    icon: ChatBubbleLeftEllipsisIcon,
  }
]
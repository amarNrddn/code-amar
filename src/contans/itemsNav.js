import { RiHomeSmileLine } from "react-icons/ri";
import { TbCameraBolt } from "react-icons/tb";
import { LuPenLine } from "react-icons/lu";
import { TiShoppingBag } from "react-icons/ti";
import { PiTelegramLogoBold } from "react-icons/pi";

export const navItems = [
   {
      icon: <RiHomeSmileLine />,
      path: '/',
      navigation: 'Home'
   },
   {
      icon: <TbCameraBolt />,
      path: '/about',
      navigation: 'About'
   },
   {
      icon: <LuPenLine />,
      path: '/blog',
      navigation: 'Blog'
   },
   {
      icon: <TiShoppingBag />,
      path: '/project',
      navigation: 'Projects'
   },
   {
      icon: <PiTelegramLogoBold />,
      path: '/contact',
      navigation: 'Contact'
   },
]
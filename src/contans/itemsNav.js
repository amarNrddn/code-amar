import { RiHomeSmileLine } from "react-icons/ri";
import { TbCameraBolt } from "react-icons/tb";
import { HiPencilSquare } from "react-icons/hi2";
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
      icon: <HiPencilSquare />,
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
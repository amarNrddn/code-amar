import { HomeIcon, CameraIcon, Pencil2Icon } from "@radix-ui/react-icons"
import { FaToolbox } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

export const navItems = [
   {
      icon: <HomeIcon />,
      path: '/',
      navigation: 'Home'
   },
   {
      icon: <CameraIcon />,
      path: '/about',
      navigation: 'About'
   },
   {
      icon: <Pencil2Icon />,
      path: '/blog',
      navigation: 'Blog'
   },
   {
      icon: <FaToolbox />,
      path: '/project',
      navigation: 'Projects'
   },
   {
      icon: <FaTelegramPlane />,
      path: '/contact',
      navigation: 'Contact'
   },
]
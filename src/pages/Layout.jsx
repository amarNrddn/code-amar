import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeProvider';
import { themeDark, themeLight } from '../contans/styles';
import { hiddenNav } from '../contans/handleRoot';
import Navbar from '../components/Navbar/Navbar';

const Layout = () => {
   const { theme } = useTheme();
   const location = useLocation();

   const hiddenNavPath = React.useMemo(() =>
      hiddenNav.some(path => location.pathname.includes(path)),
      [location.pathname]
   );

   const layoutClassName = `${theme === 'dark' ? themeDark.className : themeLight.className}`;
   const containerClassName = hiddenNavPath
      ? "px-5 min-h-screen relative md:max-w-4xl md:flex md:justify-center md:items-center lg:w-3xl"
      : "px-5 min-h-screen relative md:max-w-xl md:flex md:justify-center md:items-center lg:w-3xl";

   return (
      <div className={`md:flex md:justify-center ${layoutClassName}`}>
         {!hiddenNavPath && <Navbar />}
         <div className={containerClassName}>
            <Outlet />
         </div>
      </div>
   );
}

export default React.memo(Layout);

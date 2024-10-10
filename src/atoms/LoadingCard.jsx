import React from 'react';

const LoadingCard = () => {
   return (
      <>
         {[0, 1, 2, 3, 4, 5].map((item) => {
            return (
               <div
                  key={item} 
                  className="w-52 rounded-lg overflow-hidden flex-shrink-0 hover:cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-95 shadow-md bg-white"
               >
                  <div className="relative w-full h-28 bg-gray-200 animate-pulse"></div>
                  <div className="mt-2 px-2 py-2">
                     <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse mb-2"></div>
                     <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                  </div>
               </div>
            );
         })}
      </>
   );
};

export default LoadingCard;

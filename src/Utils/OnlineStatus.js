import React, { useEffect, useState } from "react";

const useInternetStatus = () => {
   
   const [onlineStatus, setonlineStatus] = useState(true);

   //check if online
   useEffect(() => { 
      window.addEventListener("offline" , () => { 
         setonlineStatus(false);
      });

      window.addEventListener("online" , () => {
         setonlineStatus(true);
      });    
 
   },[]);

   //boolean valuelue
   return onlineStatus;
}

export default useInternetStatus;
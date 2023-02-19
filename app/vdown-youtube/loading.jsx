import React from "react";
import { SyncLoader } from "react-spinners";

const Loading = () => {
   return (
      <div className="h-[100vh] flex justify-center items-center">
         <SyncLoader color="#000" />
      </div>
   );
};

export default Loading;

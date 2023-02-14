"use client";
import React, { useContext, createContext, useState } from "react";

const StateContext = createContext({});

export const StateContexProvider = ({ children }) => {
   const [vidUrl, setVidUrl] = useState("");

   const setUrl = (url) => {
      if (!url) return;
      setVidUrl(url);
   };

   return (
      <StateContext.Provider
         value={{
            vidUrl,
            setUrl,
         }}
      >
         {children}
      </StateContext.Provider>
   );
};

export const useStateContext = () => useContext(StateContext);

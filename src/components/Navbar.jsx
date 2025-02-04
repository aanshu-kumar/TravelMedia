import React, { useEffect } from 'react'
import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
const [active,setActive] = useState("home");
const location = useLocation();
let navigate = useNavigate()
useEffect(()=>{
  if(location.pathname=="/")
  {
    setActive("home")
  }
  else{
    setActive("save")
  }
},[location.pathname])

  return (
    <div className="w-full h-20 bg-orange-500 shadow-md shadow-orange-300">
        <div className="w-3/5 flex flex-row justify-between items-center h-full mx-5">
          <h1 className="text-white text-xl font-semibold ">TravelMedia.in</h1>
          <div className="bg-white py-4 px-10  rounded-4xl flex gap-16">
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                onClick={()=>{
                  setActive("home")
                  navigate("/");
                }
                }
                className={`size-6 fill-orange-500 ${active=="home"? 100 : 50} cursor-pointer`}>
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
              { active=="home" && <div className="w-1 h-1 rounded-full bg-black"></div>}
            </div>
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                onClick={()=>setActive("notification")}
                className={`size-6 fill-orange-500 opacity-${active=="notification"? 100 : 50} cursor-pointer`}>
                <path
                  fillRule="evenodd"
                  d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                  clipRule="evenodd"
                />
              </svg>
              { active=="notification" && <div className="w-1 h-1 rounded-full bg-black"></div>}
            </div>
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                onClick={()=>setActive("save")}
                className={`size-6 fill-orange-500 opacity-${active=="save"? 100 : 50} cursor-pointer`}>
                <path
                  fillRule="evenodd"
                  d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                  clipRule="evenodd"
                />
              </svg>
              { active=="save" && <div className="w-1 h-1 rounded-full bg-black"></div>}
            </div>
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                onClick={()=>setActive("profile")}
                className={`size-6 fill-orange-500 opacity-${active=="profile"? 100 : 50} cursor-pointer`}>
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              { active=="profile" && <div className="w-1 h-1 rounded-full bg-black"></div>}
            </div>
          </div>
        </div>
      </div>
  )
}

export default Navbar

"use client"
import React, { useState, ChangeEvent } from 'react';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { IoCloseOutline } from "react-icons/io5";
import { usePathname } from 'next/navigation';

interface NavbarProps {
  // Define props here if any
}

const Navbar: React.FC<NavbarProps> = () => {
  const [search, setSearch] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const pathname= usePathname()

   const navbarList=[
       {
         title: "Home",
         link:  "/",
        
       },

       {
        title: "About",
        link:  "/about",
       
      },

      {
        title: "Shop",
        link:  "/shop",
       
      },

      {
        title: "Cart",
        link:  "/cart",
        
      },

      {
        title: "Profile",
        link:  "/profile",
      
      },

      {
        title: "Contact",
        link:  "/contact",
        
      },

      
   ]

  return (
    <nav className="bg-slate-950 w-full h-[100px]">
      <div className="flex items-center py-5 px-6 justify-between gap-x-10">
        <Link href="/" className="" >
          <h1 className="text-white text-[40px] font-pm">Ecommerce</h1>
        </Link>
        <div className="" >
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            className="w-[500px] border-[#570df8] border-[2px] font-pm py-2 bg-white outline-none px-6 rounded-lg placeholder:text-black"
            placeholder="Enter Your Products"
          />
         {
           search ?  <IoCloseOutline onClick={()=>setSearch("")} className=" text-slate-700 inline ml-[-40px] text-[18px] cursor-pointer transition-all" /> : <FaSearch className=" inline ml-[-40px] text-slate-900 cursor-pointer transition-all" />
         }
        </div>

        <div className=" flex gap-x-6" >
            {
              navbarList.map((items)=>(
                   <Link href={items.link} key={items.link} className={`text-white font-pm text-[18px] ${pathname ===items.link && " text-[#570df8]"}`} >{items.title}</Link>
              ))
            }
        </div>
           
      </div>
    </nav>
  );
};

export default Navbar;




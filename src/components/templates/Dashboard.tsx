"use client";

import { IoPersonSharp } from "react-icons/io5";
import Navbar from "../fragments/Navbar";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <section className="flex flex-col">
      <aside className={`fixed ${open ? "w-48" : "w-12"} sm:w-48 h-screen flex flex-col items-center justify-center sm:justify-normal gap-8 p-2 backdrop-blur`}>
        <FaBars className={`text-3xl sm:hidden cursor-pointer bg-white p-1 rounded ${open && "ms-auto"}`} onClick={() => setOpen(!open)} />
        <div className={`${open ? "flex" : "hidden"} sm:flex justify-center items-center h-20 w-20 rounded-full bg-sky-300 shadow shadow-black`}>
          <IoPersonSharp className="text-7xl mb-2" />
        </div>
        <Navbar open={open} />
      </aside>
      <main className="overflow-hidden bg-water">
        <div className={`${open ? "w-[calc(100vw-12rem)] blur" : "w-[calc(100vw-3rem)]"} sm:w-[calc(100vw-12rem)] relative ${open ? "left-48" : "left-12"} sm:left-48 bg-sky-300 p-4 min-h-screen`}>{children}</div>
      </main>
    </section>
  );
};

export default DashboardLayout;

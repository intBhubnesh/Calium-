"use client";

import { NavBar } from "@/components/NavBar";
import {  SecondaryNavBar   }  from '../components/SecoundaryNavBar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full p-4 overflow-hidden h-screen bg-zinc-950 flex">
      <NavBar />
      <div className="flex flex-col w-fit h-full">
        <SecondaryNavBar />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}

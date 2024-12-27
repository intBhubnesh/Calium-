'use client'
import React, { useState } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function DropDown() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys],
  );

  return (
      <div className="flex gap-4">
        <div className="bg-white/10 py-4 h-12 items-center justify-between rounded-full text-zinc-300   px-6  font-sm inline-flex gap-4">
        <label htmlFor="Token" className="border-r-2 text-zinc-300/70 text-sm border-zinc-400/20 pr-4">Token</label>
        <select  name="Token" id="Token" className="w-32">
            <option value="All">All</option>
            <option value="CarbonCredit">CarbonCredit</option>
            <option value="CarbonOffset">CarbonOffset</option>
        </select>
        </div>
        <div className="bg-white/10 py-4 h-12 items-center justify-between rounded-full text-zinc-300   px-6  font-sm inline-flex gap-4">
        <label htmlFor="Status" className="border-r-2 text-zinc-300/70 text-sm border-zinc-400/20 pr-4">Status</label>
        <select  name="Status" id="Status" className="w-[90px]">
            <option value="New">New</option>
            <option value="Amount">Amount</option>
            <option value="Price">Price</option>
        </select>
        </div>
        <div className="bg-white/10 py-4 h-12 items-center justify-between rounded-full text-zinc-300   px-6  font-sm inline-flex gap-4">
        <label htmlFor="Currency" className="border-r-2 text-zinc-300/70 text-sm border-zinc-400/20 pr-4">Currency</label>
        <select  name="Currency" id="Currency" className="w-16">
            <option value="sol">Sol</option>
            <option value="eth">Eth</option>
            <option value="poly">Poly</option>
        </select>
        </div>
    </div>
  );
}

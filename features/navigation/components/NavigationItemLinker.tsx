"use client";
import React from "react";

import { PlusIcon } from "@/lib/components/icons";

import { cn } from "@/lib/utils";

import type { NavigationItemLinkerProps } from "@/features/navigation/components/types";

const NavigationItemLinker: React.FC<NavigationItemLinkerProps> = ({
  isLastItem,
  onAddPage,
}) => {
  return (
    <div
      className={cn(
        "group relative bg-transparent transition-all h-full w-4 hover:w-10 hover:[&_button]:flex",
        {
          "pointer-events-none": isLastItem,
        }
      )}
    >
      <div className="absolute transition-all top-1/2 right-0 -translate-y-1/2 h-0 w-4 group-hover:w-10 border-t border-dashed border-gray-400">
        <button
          onClick={onAddPage}
          className="hidden transition-all absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 justify-center items-center cursor-pointer h-4 w-4 rounded-full text-black bg-white border border-gray-100 hover:bg-gray-300"
        >
          <PlusIcon height={8} width={8} />
        </button>
      </div>
    </div>
  );
};

export default NavigationItemLinker;

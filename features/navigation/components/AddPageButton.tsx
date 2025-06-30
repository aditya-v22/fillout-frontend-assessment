"use client";
import React from "react";

import { PlusIcon } from "@/lib/components/icons";

import type { AddPageButtonProps } from "@/features/navigation/components/types";

const AddPageButton: React.FC<AddPageButtonProps> = ({ onClick }) => {
  return (
    <button
      className={
        "flex shrink-0 items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all bg-white text-text-black border-0 cursor-pointer outline-1 outline-gray-100 hover:opacity-70"
      }
      onClick={onClick}
    >
      <PlusIcon />
      <span className="font-medium text-sm">Add page</span>
    </button>
  );
};

export default AddPageButton;

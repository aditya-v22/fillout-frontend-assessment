import React from "react";

import { cn } from "@/lib/utils";

import type { ContextMenuItemProps } from "@/features/navigation/components/types";

const ContextMenuItem: React.FC<ContextMenuItemProps> = ({
  icon: Icon,
  label,
  iconClassName,
  labelClassName,
}) => {
  return (
    <button aria-label={label} className="flex items-center py-2 gap-1.5">
      <Icon className={cn("h-4 w-4 text-gray-500", iconClassName)} />
      <span
        className={cn("text-text-black text-sm font-medium", labelClassName)}
      >
        {label}
      </span>
    </button>
  );
};

export default ContextMenuItem;

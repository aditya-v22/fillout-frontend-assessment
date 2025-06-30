"use client";
import React, { useCallback, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { ThreeDotIcon } from "@/lib/components/icons";
import ContextMenu from "@/features/navigation/components/ContextMenu";

import { cn } from "@/lib/utils";

import type { NavigationItemProps } from "@/features/navigation/components/types";

const NavigationItem: React.FC<NavigationItemProps> = ({
  icon: Icon,
  label,
  active,
  onClick,
}) => {
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: label });

  const handleContextMenu = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (!active) return;

      e.preventDefault();
      setAnchorElement(e.currentTarget);
    },
    [active]
  );

  return (
    <>
      <button
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        aria-label={label}
        data-active={active}
        className={cn(
          "group flex shrink-0 items-center gap-2 px-2.5 py-1.5 rounded-lg bg-gray-200 border-0 transition-colors cursor-pointer focus-visible:outline-1 focus-visible:outline-blue-500 focus-visible:ring-[3px] focus-visible:ring-blue-300 focus-visible:bg-white",
          {
            "bg-white outline-1 outline-gray-100": active,
            "hover:bg-gray-300": !active,
            "cursor-grab": isDragging,
          }
        )}
        style={{
          transform: CSS.Transform.toString(transform),
          transition,
        }}
        onClick={onClick}
        onContextMenu={handleContextMenu}
      >
        <span className="text-gray-700 group-focus-visible:text-amber-400 group-data-[active=true]:text-amber-400">
          <Icon />
        </span>
        <span className="font-medium text-sm text-gray-800 group-focus-visible:text-text-black group-data-[active=true]:text-text-black">
          {label}
        </span>

        {active && (
          <span className="text-gray-500">
            <ThreeDotIcon />
          </span>
        )}
      </button>

      {active && anchorElement && (
        <ContextMenu
          anchorEl={anchorElement}
          onClickOutside={() => setAnchorElement(null)}
        />
      )}
    </>
  );
};

export default NavigationItem;

"use client";
import { useEffect } from "react";
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
} from "@floating-ui/react-dom";

import { useOutsideClick } from "@/lib/hooks";

export const useContextMenuFloating = ({
  anchorEl,
  onClickOutside,
}: {
  anchorEl: HTMLElement | null;
  onClickOutside: () => void;
}) => {
  const { x, y, strategy, refs, update } = useFloating({
    placement: "top-start",
    middleware: [
      offset(9),
      flip({
        fallbackPlacements: ["top-end", "bottom-start", "bottom-end"],
        padding: 9,
      }),
      shift({ padding: 9 }),
    ],
  });

  useOutsideClick(refs.floating, onClickOutside);

  useEffect(() => {
    if (!anchorEl) return;
    refs.setReference(anchorEl);
    if (!refs.floating.current) return;

    return autoUpdate(anchorEl, refs.floating.current, update);
  }, [anchorEl, refs, update]);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (e.key === "Escape") {
        onClickOutside();
      }
    };
    window.addEventListener("keydown", handleKeydown, true);

    return () => {
      window.removeEventListener("keydown", handleKeydown, true);
    };
  }, [onClickOutside]);

  return {
    x,
    y,
    refs,
    strategy,
  };
};

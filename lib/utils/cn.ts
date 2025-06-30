import { clsx, ClassArray } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classNames: ClassArray) {
  return twMerge(clsx(classNames));
}

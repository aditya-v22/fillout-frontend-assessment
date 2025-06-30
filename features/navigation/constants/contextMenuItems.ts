import {
  ClipboardIcon,
  FlagIcon,
  PencilWithLineIcon,
  SquareBehindSquareIcon,
} from "@/lib/components/icons";

import type { ContextMenuItem } from "@/features/navigation/types";

export const contextMenuItems: ContextMenuItem[] = [
  {
    icon: FlagIcon,
    label: "Set as first page",
    iconClassName: "text-blue-500",
  },
  {
    icon: PencilWithLineIcon,
    label: "Rename",
  },
  {
    icon: ClipboardIcon,
    label: "Copy",
  },
  {
    icon: SquareBehindSquareIcon,
    label: "Duplicate",
  },
];

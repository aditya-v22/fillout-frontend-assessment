import { FileTextIcon } from "@/lib/components/icons";

import type { NavigationItem } from "@/features/navigation/types";

export const constructNavigationItem = (position: number): NavigationItem => ({
  icon: FileTextIcon,
  label: `New page ${position}`,
  active: false,
});

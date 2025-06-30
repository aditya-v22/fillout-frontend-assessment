import {
  CheckCircleIcon,
  FileTextIcon,
  InfoCircleIcon,
} from "@/lib/components/icons";

import type { NavigationItem } from "@/features/navigation/types";

export const navigationItems: NavigationItem[] = [
  {
    label: "Info",
    active: true,
    icon: InfoCircleIcon,
  },
  {
    label: "Details",
    active: false,
    icon: FileTextIcon,
  },
  {
    label: "Other",
    active: false,
    icon: FileTextIcon,
  },
  {
    label: "Ending",
    active: false,
    icon: CheckCircleIcon,
  },
];

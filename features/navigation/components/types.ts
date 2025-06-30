import { NavigationItem } from "@/features/navigation/types";

export interface NavigationItemProps extends NavigationItem {
  onClick: () => void;
}

export interface AddPageButtonProps {
  onClick: () => void;
}

export interface ContextMenuItemProps {
  label: string;
  icon: React.FC<React.ComponentProps<"svg">>;
  iconClassName?: React.HtmlHTMLAttributes<HTMLOrSVGElement>["className"];
  labelClassName?: React.HtmlHTMLAttributes<HTMLSpanElement>["className"];
  onClick?: () => void;
}

export interface ContexMenuProps {
  anchorEl: HTMLElement | null;
  onClickOutside: () => void;
}

export interface NavigationItemLinkerProps {
  isLastItem: boolean;
  onAddPage: () => void;
}

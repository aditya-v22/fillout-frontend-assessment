export interface NavigationItem {
  icon: React.FC;
  label: string;
  active: boolean;
}

export interface ContextMenuItem {
  label: string;
  icon: React.FC<React.ComponentProps<"svg">>;
  iconClassName?: React.HtmlHTMLAttributes<HTMLOrSVGElement>["className"];
  labelClassName?: React.HtmlHTMLAttributes<HTMLSpanElement>["className"];
}

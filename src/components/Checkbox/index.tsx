import checkboxStyles from "./checkbox.module.css";
import { cn } from "@/helpers";

type TCheckboxProps = React.ComponentProps<"input">;

export const Checkbox = ({ className, ...props }: TCheckboxProps) => (
  <input type='checkbox' className={cn(checkboxStyles.checkbox, className)} {...props} />
);

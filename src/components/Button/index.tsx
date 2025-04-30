import buttonStyles from "./button.module.css";
import { cn } from "@/helpers";

type TButtonVariant = "default" | "success";

interface IButtonProps extends React.ComponentProps<"button"> {
  variant?: TButtonVariant;
}

export const Button = ({ className, variant = "default", children, ...props }: IButtonProps) => (
  <button
    className={cn(buttonStyles.button, buttonStyles[`variant-${variant}`], className)}
    {...props}
  >
    {children}
  </button>
);

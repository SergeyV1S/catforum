import typographyStyles from "./typography.module.css";
import { cn } from "@/helpers";

type TTypographyTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
type TTypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "error";

type TTypographyProps<T extends React.ElementType> = {
  as?: TTypographyTag;
  variant?: TTypographyVariant;
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export const Typography = <T extends TTypographyTag = "p">({
  as = "p",
  variant = "p",
  className,
  children,
  ...props
}: TTypographyProps<T>) => {
  const Component = as;

  return (
    <Component
      className={cn(typographyStyles.typography, typographyStyles[`variant-${variant}`], className)}
      {...props}
    >
      {children}
    </Component>
  );
};

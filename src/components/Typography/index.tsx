import typographyStyles from "./typography.module.css";
import { cn } from "@/helpers";

type TTypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

type TTypographyProps<T extends React.ElementType> = {
  as?: T;
  variant?: TTypographyVariant;
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export const Typography = <T extends React.ElementType = "p">({
  as,
  variant = "p",
  className,
  children,
  ...props
}: TTypographyProps<T>) => {
  const Component = as || choiceVariant(variant);

  const TypographyComponent = Component as React.ElementType;

  return (
    <TypographyComponent
      className={cn(typographyStyles.typography, typographyStyles[`variant-${variant}`], className)}
      {...props}
    >
      {children}
    </TypographyComponent>
  );
};

const choiceVariant = (variant: TTypographyVariant): React.ElementType => {
  switch (variant) {
    case "h1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "h4":
      return "h4";
    case "h5":
      return "h5";
    case "h6":
      return "h6";
    case "p":
      return "p";
    default:
      return "p";
  }
};

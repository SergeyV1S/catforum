import cardStyles from "./card.module.css";
import { cn } from "@/helpers";

type TCard = React.ComponentProps<"div">;

const Card = ({ className, children, ...props }: TCard) => (
  <div className={cn(cardStyles.wrapper, className)} {...props}>
    {children}
  </div>
);

const CardContent = ({ className, children, ...props }: TCard) => (
  <div className={cn(cardStyles.content, className)} {...props}>
    {children}
  </div>
);

const CardHeader = ({ className, children, ...props }: TCard) => (
  <div className={cn(cardStyles.header, className)} {...props}>
    {children}
  </div>
);

export { Card, CardContent, CardHeader };

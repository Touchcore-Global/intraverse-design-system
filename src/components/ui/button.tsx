import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Default: black text by default, invert to white on hover (dark bg)
        default: "bg-primary text-foreground hover:bg-primary hover:text-white",
        destructive: "bg-destructive text-foreground hover:bg-destructive hover:text-white",
        outline: "border border-input bg-background text-foreground hover:bg-accent hover:text-foreground",
        secondary: "bg-secondary text-foreground hover:bg-secondary/80 hover:text-foreground",
        ghost: "text-foreground hover:bg-accent hover:text-foreground",
        link: "text-foreground underline-offset-4 hover:underline",
        // Intraverse custom variants
        // Hero: black text on light, invert to white on hover (dark bg)
        hero: "bg-foreground text-foreground bg-white hover:bg-foreground hover:text-white rounded-none font-semibold shadow-lg hover:shadow-xl transition-all",
        whatsapp: "bg-background text-foreground border-2 border-[hsl(var(--whatsapp))] hover:bg-[hsl(var(--whatsapp))] hover:text-white rounded-none font-semibold transition-all",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

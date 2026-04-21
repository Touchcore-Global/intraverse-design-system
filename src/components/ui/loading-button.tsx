import * as React from "react";
import { Loader2 } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
  loadingText?: string;
}

/**
 * Button wrapper that adds a spinner + disables interaction while `loading`.
 * Preserves the button's width so the layout doesn't jump.
 */
export const LoadingButton = React.forwardRef<HTMLButtonElement, LoadingButtonProps>(
  ({ loading = false, loadingText, disabled, children, className, ...props }, ref) => {
    const isDisabled = loading || disabled;
    return (
      <Button
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        className={cn(loading && "cursor-wait", className)}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
        {loading ? loadingText ?? children : children}
      </Button>
    );
  },
);
LoadingButton.displayName = "LoadingButton";

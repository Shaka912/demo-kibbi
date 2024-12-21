import * as React from "react";
import { FaAngleRight } from "react-icons/fa";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="flex items-center h-10  rounded-[8px] border  px-3 py-1 text-base shadow-sm   md:text-sm">
        <FaAngleRight />
        <input
          type={type}
          className={cn(
            " disabled:opacity-50 rounded-md  placeholder:!text-black file:border-0 px-3 py-1 file:bg-transparent  transition-colors  bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };

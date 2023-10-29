import React from "react";
import { cn } from "@/lib/utils";
import { ButtonProps } from "@/lib/types";

function Button({
  className,
  size = "text-5xl",
  handleOnClick,
  children,
}: ButtonProps) {
  return (
    <button
      onClick={handleOnClick}
      className={cn(
        className,
        size,
        "font-light border px-4 text-center text-gray-500  hover:bg-slate-600 hover:text-white"
      )}
    >
      {children}
    </button>
  );
}

export default Button;

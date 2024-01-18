import React, { HTMLAttributes } from "react";
import { FC } from "react";
import { cn } from "../lib/utils";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      style={{
        backgroundColor: "gray",
        padding: "10px",
        borderRadius: "18px",
        border: "1.25px solid blue",
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

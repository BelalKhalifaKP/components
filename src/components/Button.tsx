import { FC } from "react";

interface ButtonProps {}

const Button: FC<ButtonProps> = ({}) => {
  return (
    <button className="bg-blue-400 rounded-md border-2 border-white flex items-center justify-center h-10">
      This is a CC Button-Component
    </button>
  );
};

export default Button;

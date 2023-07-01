import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  to?: string;
}

const Button: React.FC<ButtonProps> = ({ children, disabled, to }) => {
  const className =
    "focus:bg inline-block rounded-full       bg-yellow-400 px-4 py-3 font-semibold uppercase        -tracking-widest text-stone-800 transition-colors duration-300        hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4";
  if (to)
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
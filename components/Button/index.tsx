import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const button = cva([
  "font-semibold",
  "bg-transparent",
  "border",
  "border-blue-500",
  "rounded",
  "hover:bg-blue-500",
  "text-blue-800",
  "hover:text-white",
  "hover:border-transparent",
  "text",
], {
  variants: {
    intent: {
      primary: [
        "bg-blue-600",
        "focus:border-blue-500",
        "focus:ring-2",
        "focus:ring-blue-200",
      ],
    },

    size: {
      s: ["px-4", "py-2", "text-base"],
      m: ["px-6", "py-3", "text-lg"],
      l: ["px-8", "py-4", "text-xl"],
    },
  },
  defaultVariants: {
    size: "m",
  },
});

export type ButtonProps = VariantProps<typeof button>;
interface Props extends ButtonProps, ButtonHTMLAttributes<{}> {}

const Button: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  size,
  ...rest
}) => (
  <button
    {...rest}
    type="button"
    className={button({ size })}
  >
    {children}
  </button>
);

export default Button;

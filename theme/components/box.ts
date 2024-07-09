import { ComponentStyle } from "@yamada-ui/react";

export const Box: ComponentStyle = {
  sizes: {
    sm: { p: "sm", fontSize: "sm" },
    md: { p: "md", fontSize: "md" },
    lg: { p: "lg", fontSize: "lg" },
  },
  variants: {
    default: {
      border: "none",
    },
  },
  defaultProps: {
    size: "md",
    variant: "none",
  },
};

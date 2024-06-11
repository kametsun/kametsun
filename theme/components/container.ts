import { ComponentStyle } from "@yamada-ui/react";

export const Container: ComponentStyle = {
  sizes: {
    sm: { p: "sm", fontSize: "sm" },
    md: { p: "md", fontSize: "md" },
    lg: { p: "lg", fontSize: "lg" },
  },
  variants: {
    default: {
      border: "none",
    },
    "with-border-solid": {
      borderWidth: "1px",
    },
    "with-border-dotted": {
      borderWidth: "1px",
      borderStyle: "dotted",
    },
  },
  defaultProps: {
    size: "md",
    variant: "none",
  },
};

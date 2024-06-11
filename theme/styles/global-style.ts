import { UIStyle } from "@yamada-ui/react";

export const globalStyle: UIStyle = ({ colorMode }) => ({
  body: {
    bg: colorMode === "light" ? "white" : "black",
    color: colorMode === "light" ? "black" : "white",
  },
});

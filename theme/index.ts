import { UsageTheme, extendConfig, extendTheme } from "@yamada-ui/react";
import tokens from "./tokens";
import { semantics } from "./semantics";
import styles from "./styles";
import components from "./components";
import { customConfig } from "./config";

const customTheme: UsageTheme = {
  styles,
  components,
  semantics,
  ...tokens,
};

export const theme = extendTheme(customTheme)();
export const config = extendConfig(customConfig);

import { Box } from "@yamada-ui/react";
import Icon from "./Icon ";
import ThemeToggleButton from "./ThemeToggleButton";

/**
 * ヘッダーコンポーネント
 * @returns Header
 */
export default function Header() {
  return (
    <Box display="flex" justifyContent={"space-between"} alignItems={"center"}>
      <Icon size="40px" />
      <ThemeToggleButton size="40px" />
    </Box>
  );
}

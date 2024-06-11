import { Box, motion, useColorMode } from "@yamada-ui/react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

/**
 * カラーモードを変更するボタン
 * @returns ThemeToggleButton
 */
export default function ThemeToggleButton({ size }: { size: string }) {
  /**
   * colorMode: 現在のlightとdarkを返す
   * toggleColorMode:
   * ライトモード => ダークモード
   * ダークモード => ライトモード
   */
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as={motion.button}
      /** タップ時の処理 */
      whileTap={{
        /** 回転アニメーション */
        rotate: [0, 0, 180, 180, 0],
        /** ボーダー半径アニメーション */
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      }}
      transition={{
        /** 継続時間 */
        duration: 0.5,
        /** イージング */
        ease: "easeInOut",
        /** タイミング */
        times: [0, 0.2, 0.5, 0.8, 1],
      }}
      onClick={toggleColorMode}
      width={size}
      height={size}
      display="flex"
      /** 垂直方向に中央揃え */
      alignItems="center"
      /** 水平方向に中央揃え */
      justifyContent="center"
      borderRadius={"50%"}
      /** はみ出ないようにする */
      overflow="hidden"
      /** 透明にする */
      background="transparent"
      /** カーソルをポインタにする */
      cursor="pointer"
    >
      {colorMode === "light" ? (
        <IoMoonOutline size={size} />
      ) : (
        <IoSunnyOutline size={size} />
      )}
    </Box>
  );
}

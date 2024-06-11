import { ThemeConfig } from "@yamada-ui/react";

export const customConfig: ThemeConfig = {
  /**
   * ユーザが初めてアクセスしたときに(ストレージがリセットされた時)のカラーモードの初期値
   * @param light ライトモード
   * @param dark ダークモード
   * @param system OSからカラーモードを取得する
   */
  initialColorMode: "system",
  /** カラーモードの切り替え時のトランジションなどによる不要な動きを避けるための設定 */
  disableTransitionOnChange: false,
};

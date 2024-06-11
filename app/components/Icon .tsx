import { Image, LinkBox, LinkOverlay } from "@yamada-ui/react";

export default function Icon({ size }: { size: string }) {
  return (
    <LinkBox
      width={size}
      height={size}
      borderRadius="50%"
      overflow="hidden"
      display="inline-block"
    >
      <LinkOverlay href="/" />
      <Image
        src="/images/icon.png"
        alt="kametsun's icon"
        size={size}
        objectFit="cover"
      />
    </LinkBox>
  );
}

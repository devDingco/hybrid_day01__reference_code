import { ICONS } from "@/commons/constants/images";
import Image from "next/image";
import styles from "./styles.module.css";

interface IAddImageButtonBaseProps {
  size: "s" | "m";
}

function AddImageButtonBase({ size }: IAddImageButtonBaseProps) {
  const isSmall = size === "s";
  const imageClass = isSmall ? styles.s : styles.m;
  const { src, alt } = isSmall ? ICONS.addImageS : ICONS.addImageM;
  const imageSize = isSmall ? 100 : 160;

  return <Image className={imageClass} src={src} alt={alt} width={imageSize} height={imageSize} />;
}

export function ButtonAddImageSS() {
  return <AddImageButtonBase size="s" />;
}

export function ButtonAddImageMM() {
  return <AddImageButtonBase size="m" />;
}

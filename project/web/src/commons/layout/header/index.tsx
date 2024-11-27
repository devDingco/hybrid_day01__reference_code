"use client";

import { ICONS } from "@/commons/constants/images";
import Image from "next/image";
import styles from "./styles.module.css";
import { useParams, usePathname } from "next/navigation";
import { Title } from "@/components/commons/title";
import clsx from "clsx";
import { headerType } from "./constnats";

export default function Header() {
  const pathname = usePathname();
  const params = useParams();

  const props = headerType(params)[pathname];

  return (
    <div
      className={clsx(styles.header, { [styles.header_detail]: pathname === `/solplace-logs/${params.solplaceLogId}` })}
    >
      {pathname === "login" && <Image src={ICONS.logo.src} alt={ICONS.logo.alt} width={51.52} height={32} />}
      {pathname === "list" || <Image src={ICONS.leftArrow.src} alt={ICONS.leftArrow.alt} width={24} height={24} />}
      <Title title={props?.headerText ?? ""} />
    </div>
  );
}

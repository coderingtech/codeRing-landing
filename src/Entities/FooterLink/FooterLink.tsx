import { IconArrowRight } from "@tabler/icons-react";
import cn from "classnames";

import useMultiLanguage from "@/Shared/Hooks/useMultiLanguage.ts";
import { type MultiLanguage } from "@/Shared/Types/MultiLanguage.ts";

import styles from "./FooterLink.module.scss";

interface Props {
  text: MultiLanguage;
  href: string;
  className?: string;
}

const FooterLink = ({ text, href, className }: Props) => {
  const { getText } = useMultiLanguage();

  return (
    <a
      className={cn(styles.link, className)}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <span className={styles.label}>{getText(text)}</span>
      <IconArrowRight className={styles.arrow} />
    </a>
  );
};

export default FooterLink;

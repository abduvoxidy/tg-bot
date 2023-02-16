import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.scss";
import TopHeader from "./TopHeader";
import BodyHeader from "./BodyHeader";

export function Header() {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <header className={styles.header}>
      <TopHeader />
      <BodyHeader />
    </header>
  );
}

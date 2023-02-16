import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import cls from "./Header.module.scss";
import TopHeader from "./TopHeader";
import BodyHeader from "./BodyHeader";
import BottomHeader from "./BottomHeader";

export function Header() {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <>
      <header>
        <TopHeader />
      </header>
      <header className={cls.header}>
        <BodyHeader />
        <BottomHeader />
      </header>
    </>
  );
}

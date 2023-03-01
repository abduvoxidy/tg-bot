import { Footer } from "components/UI/Footer";
import { Header } from "components/UI/Header";
import { SimpleHeader } from "components/UI/Header/SimpleHeader";
import cls from "./style.module.scss";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { loadYandexMap } from "utils/yandexMapUtils";

export default function Layout({ children }) {
  useEffect(() => {
    loadYandexMap("ru");
  }, []);
  const router = useRouter();
  const onlyMain = ["/login"];
  const simpleHeader = ["/checkout"];

  return (
    <div className={cls.wrapper}>
      {onlyMain.includes(router.pathname) ? null : simpleHeader.includes(
          router.pathname
        ) ? (
        <SimpleHeader />
      ) : (
        <Header />
      )}
      {children}
      {onlyMain.includes(router.pathname) ||
      simpleHeader.includes(router.pathname) ? null : (
        <Footer />
      )}
    </div>
  );
}

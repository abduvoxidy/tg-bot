import { Footer } from "components/UI/Footer";
import { Header } from "components/UI/Header";
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
  const routePaths = ["/login"];

  useEffect(() => {
    // router.push("/login");
  }, []);

  return (
    <div className={cls.wrapper}>
      {!routePaths.includes(router.pathname) && <Header />}
      {children}
      {!routePaths.includes(router.pathname) && <Footer />}
    </div>
  );
}

import { Footer } from "components/UI/Footer";
import { Header } from "components/UI/Header";
import cls from "./style.module.scss";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Layout({ children }) {
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

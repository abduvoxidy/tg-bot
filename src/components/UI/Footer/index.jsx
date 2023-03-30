import cls from "./Footer.module.scss";
import Link from "next/link";
import { Container } from "@mui/material";
import {
  FacebookIcon,
  InstagramIcon,
  PayMeIcon,
  YouTubeIcon,
  TelegramIcon,
  OdnoKlassnikiIcon,
} from "../Icons";

export function Footer() {
  return (
    <footer className={cls.footer}>
      <Container>
        <div className={cls.root}>
          <nav>
            <ul className={cls.navMenu}>
              <li className={cls.navItem}>
                <h3>Информация</h3>
                <Link href="/about">
                  <a>О нас</a>
                </Link>
                <Link href="/blog">
                  <a>Блог</a>
                </Link>
                <Link href="/contacts">
                  <a>Контакты</a>
                </Link>
                <Link href="/public-offer">
                  <a>Публичный оферта</a>
                </Link>
              </li>
              <li className={cls.navItem}>
                <h3>Контакты для предложений</h3>
                <a href="mailto: abc@example.com">Support@paragraf.uz</a>
                <Link href="/format">
                  <a>Форма обратной связи</a>
                </Link>
              </li>
              <li className={cls.navItem}>
                <h3>Телефон</h3>
                <a href="tel:+998901234567">+998901234567</a>
                <h3 className={cls.address}>Адрес</h3>
                <address>
                  <p>
                    <a>Алмазарский район, ул. Джами, 12.</a>
                  </p>
                </address>
              </li>
              <li className={cls.navItem}>
                <h5>Платежная система</h5>
                <div className={cls.icons}>
                  <div className={cls.circle}>
                    <PayMeIcon />
                  </div>
                  <div className={cls.circle}>
                    <InstagramIcon />
                  </div>
                </div>
                <h5 className={cls.logoTitle}>LOGO в соц.сетях</h5>
                <div className={cls.icons}>
                  <div className={cls.circle}>
                    <InstagramIcon />
                  </div>
                  <div className={cls.circle}>
                    <FacebookIcon />
                  </div>
                  <div className={cls.circle}>
                    <YouTubeIcon />
                  </div>
                  <div className={cls.circle}>
                    <TelegramIcon />
                  </div>
                  <div className={cls.circle}>
                    <OdnoKlassnikiIcon />
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          <div className={cls.bottom}>
            <p>
              <a href="#">Paragraf.uz - Все права защищены.</a>
            </p>
            <div className={cls.privacy}>
              <p>
                <a href="#">Политика конфиденциальности</a>
              </p>
              <p>
                <a href="#">Условия использования</a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

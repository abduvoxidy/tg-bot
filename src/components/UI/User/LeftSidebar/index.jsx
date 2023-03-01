import { Container } from "@mui/material";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import cls from "./LeftSidebar.module.scss";
import {
  UserProfileIcon,
  UserCardsIcon,
  UserAddressIcon,
  UserOrdersIcon,
  UserHeartIcon,
  UserNotificationIcon,
} from "components/UI/Icons";
import { useRouter } from "next/router";

const links = [
  {
    url: "/user",
    icon: <UserProfileIcon />,
    title: "Профиль",
  },
  {
    url: "/user/cards",
    icon: <UserCardsIcon />,
    title: "Мои карты",
  },
  {
    url: "/user/address",
    icon: <UserAddressIcon />,
    title: "Мои адреса",
  },
  {
    url: "/user/orders",
    icon: <UserOrdersIcon />,
    title: "Мои заказы",
  },
  {
    url: "/user/favorites",
    icon: <UserHeartIcon />,
    title: "Избранное",
  },
  {
    url: "/user/notifications",
    icon: <UserNotificationIcon />,
    title: "Уведомления",
  },
];

export default function LeftSidebar() {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div className={cls.sidebar}>
      <div className={cls.list}>
        {links.map((el) => (
          <Link key={el.url} href={el.url}>
            <a>
              <div
                className={`${cls.item} ${
                  router.pathname === el.url ? cls.active : ""
                }`}
              >
                {el.icon} {el.title}
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

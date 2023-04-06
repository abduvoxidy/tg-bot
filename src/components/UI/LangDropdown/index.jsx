import cls from "./Dropdown.module.scss";
import { useEffect, useState } from "react";
import { Popover } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useStyles } from "./styles";

import { useRouter } from "next/router";
import { RectangleIcon } from "../Icons";

const languages = [
  {
    name: "O’zbekcha",
    icon: "/images/russian.png",
  },
  {
    name: "Русскый",
    icon: "/images/uzbekistan.png",
  },
  {
    name: "English",
    icon: "/images/england.png",
  },
];

export default function Dropdown() {
  const { t } = useTranslation("common");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const classes = useStyles();
  const router = useRouter();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      handleClose();
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <>
      <div onClick={handleClick} className={cls.wrap}>
        <span>Рус</span>
        <img src="/icons/ru.png" alt="ru" />
      </div>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        classes={classes}
      >
        <div className={cls.items}>
          {languages.map((el, index) => (
            <Link key={index} scroll={false} href={router.asPath}>
              <a>
                {" "}
                <div className={cls.item}>
                  {el.name}
                  <img className={cls.img} src={el.icon} alt="uzbek" />
                  {/* {t("uzbek")} */}
                </div>
              </a>
            </Link>
          ))}
        </div>
      </Popover>
    </>
  );
}

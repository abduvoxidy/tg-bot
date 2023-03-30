import CBreadcrumbs from "@mui/material/Breadcrumbs";
import { Typography } from "@mui/material";
import cls from "./BreadCrumbs.module.scss";
import { useRouter } from "next/router";

const BreadCrumbs = ({ items }) => {
  const router = useRouter();

  const navigateHandler = (link, index) => {
    if (index === items?.length - 1) return null;
    router.push(link);
  };
  return (
    <CBreadcrumbs aria-label="breadcrumb">
      {items?.map((item, index) => (
        <div key={index} onClick={() => navigateHandler(item.link, index)}>
          <p
            className={`${cls.breadcrumb} ${
              index + 1 === items.length && cls.breadcrumb__last
            }`}
          >
            {item.label}
          </p>
        </div>
      ))}
    </CBreadcrumbs>
  );
};

export default BreadCrumbs;

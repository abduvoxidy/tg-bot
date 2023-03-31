import cls from "./Contacts.module.scss";
import { Container } from "@mui/material";
import BreadCrumbs from "components/UI/BreadCrumbs";
import RegionsMap from "./RegionsMap";
import ContactUs from "./ContactUs";

const breadcrumbItems = [
  {
    link: "/",
    label: "Главная",
  },
  {
    link: "/contacts",
    label: "Контакты",
  },
];

export function Contacts() {
  return (
    <main className={cls.main}>
      <Container>
        <BreadCrumbs items={breadcrumbItems} />
        <h1 className={cls.title}>Контакты</h1>
        <div className={cls.body}>
          <RegionsMap />
          <ContactUs />
        </div>
      </Container>
    </main>
  );
}

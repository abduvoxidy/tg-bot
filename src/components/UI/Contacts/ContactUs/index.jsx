import React, { useState } from "react";
import cls from "./ContactUs.module.scss";
import { contacts } from "./data";
import ContactDialog from "./ContactDialog";

function ContactUs() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className={cls.contactUs}>
        <h2>Как с нами связаться </h2>
        <div className={cls.row}>
          {contacts.map((el, index) => (
            <div
              onClick={() => {
                if (index === 3) {
                  setOpen(true);
                }
              }}
              key={index}
              className={cls.card}
            >
              <div className={cls.logo}>{el.icon()}</div>
              <div className={cls.content}>
                <p className={cls.title}>{el.title}</p>
                <a className={cls.link} href="#">
                  {el.linkName}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactDialog open={open} handleClose={handleClose} />
    </>
  );
}

export default ContactUs;

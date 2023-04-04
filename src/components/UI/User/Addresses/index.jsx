import React, { useState } from "react";
import cls from "./Addresses.module.scss";
import { Container } from "@mui/material";
import LeftSidebar from "../LeftSidebar";
import MainButton from "components/UI/Buttons/MainButton";
import { PlusIcon, EditIcon, DeleteIcon } from "components/UI/Icons";
import AddressDeleteModal from "./AddressDeleteModal";
import EditAddressModal from "components/UI/Address/EditAddressModal";

const addresses = [
  {
    id: 1,
    name: "Дом",
    address: "Якуб коласа, 9",
  },
  {
    id: 2,
    name: "Работа",
    address: "Бешкайрагач, 12",
  },
];

export function Addresses() {
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState(null);
  const [addNewAddress, setAddNewAddress] = useState(false);

  const deleteAddress = (id) => {
    setOpen(false);
  };

  return (
    <>
      <main className={cls.main}>
        <Container>
          <h1>Мои адреса</h1>
          <div className={cls.box}>
            <LeftSidebar />
            <div className={cls.rightSide}>
              {addresses && addresses.length > 0 ? (
                <d  iv className={cls.list}>
                  {addresses?.map((item) => (
                    <div className={cls.item} key={item.id}>
                      <div className={cls.leftItem}>
                        <span>{item.name || item.address}</span>
                        <span>{item.address}</span>
                      </div>
                      <div className={cls.rightItem}>
                        <span
                          onClick={() => {
                            setAddNewAddress(true);
                            setAddress(item);
                          }}
                        >
                          <EditIcon />
                        </span>
                        <span
                          onClick={() => {
                            setOpen(item.id);
                          }}
                        >
                          <DeleteIcon />
                        </span>
                      </div>
                    </div>
                  ))}
                </d>
              ) : (
                <div className={cls.emptyBox}>
                  <h3 className={cls.title}>Привязанной карты пока нет</h3>
                  <p className={cls.text}>
                    Радуйте себя быстрыми платежами, сохраняя свои карты на
                    долгий срок
                  </p>
                </div>
              )}

              <MainButton
                onClick={() => {
                  // setOpen(true);
                  setAddNewAddress(true);
                }}
                icon={<PlusIcon />}
                size="medium"
                className={cls.addBtn}
              >
                {addresses.length > 0
                  ? "Добавить новый адрес"
                  : "Добавить адрес "}
              </MainButton>
            </div>
          </div>
        </Container>
      </main>
      <AddressDeleteModal
        setOpen={setOpen}
        open={open}
        confirmFn={deleteAddress}
      />
      <EditAddressModal
        addNewAddress={addNewAddress}
        setAddNewAddress={setAddNewAddress}
        // initialValue={address}
      />
    </>
  );
}

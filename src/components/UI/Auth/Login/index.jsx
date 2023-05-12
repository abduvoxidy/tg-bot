import cls from "./Login.module.scss";

import { useState } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// components
import MainButton from "components/UI/Buttons/MainButton";
import { CloseIcon } from "components/UI/Icons";
import InputMask from "components/UI/Forms/InputMask";

// functions
import { useSendMessageMutation } from "services/auth.service";
import useCodeExpire from "hooks/useCodeExpire";
import { replaceAll } from "utils/commonUtils";
import validationForm from "utils/validation";

export default function Login() {
  const router = useRouter();
  const [isConfirm, setIsConfirm] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [expired, setExpired] = useState(false);
  const { t } = useTranslation("common");

  const schemaValidation = yup
    .object()
    .shape({
      phone: validationForm("phoneNumber"),
    })
    .required();

  const { mutate: sendMessage, isLoading } = useSendMessageMutation({});

  const {
    handleSubmit,
    watch,
    control,
    register,
    formState: { errors },
    setError,
  } = useForm({
    reValidateMode: "onChange",
    defaultValues: {
      phone: "",
      register_type: "phone",
    },
    resolver: yupResolver(schemaValidation),
  });

  useCodeExpire({
    seconds,
    setExpired,
    isConfirm,
    setSeconds,
  });

  const onSubmit = (data) => {
    // loginMutation.mutate({
    //   ...data,
    //   phone: replaceAll(data.phone),
    // });

    sendMessage({
      ...data,
      phone: replaceAll(data.phone),
    });
  };

  return (
    <div className={cls.login}>
      <div className={cls.close} onClick={() => router.push("/")}>
        <CloseIcon />
      </div>
      <h1 className={cls.title}>Вход на сайт</h1>

      <p className={cls.desc}>Войдите с вашим номером телефона</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cls.input}>
          <label htmlFor="phone">Номер телефона</label>
          <InputMask
            id="phone"
            mask={`+\\9\\9\\8 99 999 99 99`}
            placeholder={"Введите номер"}
            control={control}
            name="phone"
            required
          />
        </div>

        <MainButton
          // loading={isLoading}
          type="submit"
          className={cls.btn}
          fullWidth
        >
          Выслать код
        </MainButton>
      </form>
    </div>
  );
}

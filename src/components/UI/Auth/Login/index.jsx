import MainButton from "components/UI/Buttons/MainButton";
import Input from "components/UI/Forms/Input";
import cls from "./Login.module.scss";
import { useRouter } from "next/router";
import { CloseIcon } from "components/UI/Icons";
import useTranslation from "next-translate/useTranslation";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import InputMask from "components/UI/Forms/InputMask";
import useCodeExpire from "hooks/useCodeExpire";
import formatCodeExpireDuration from "utils/formatCodeExpireDuration";

export default function Login() {
  const router = useRouter();
  const [isConfirm, setIsConfirm] = useState(false);
  const [isPhone, setIsPhone] = useState(true);
  const [isName, setIsName] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [expired, setExpired] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation("common");

  const {
    handleSubmit,
    watch,
    control,
    register,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      phone: "",
      code: "",
      name: "",
    },
  });

  useCodeExpire({
    seconds,
    setExpired,
    isConfirm,
    setSeconds,
  });

  const resendNumber = () => {
    if (expired) {
      setExpired(false);
      setSeconds(60);
      // loginMutation.mutate({
      //   phone: replaceAll(watch("phone")),
      // });
    }
  };

  const onSubmit = (value) => {
    // setIsName(false)
    setIsLoading(true);
    setTimeout(() => {
      router.push("/");
      setIsLoading(false);
    }, 3000);
  };

  const sendCode = (value) => {
    // confirmLoginMutation.mutate({
    //   code: value.code,
    //   phone: replaceAll(watch("phone")),
    // });
    console.log("value", value);
    setIsConfirm(false);
    setIsName(true);
  };

  const sendNumber = (value) => {
    // loginMutation.mutate({
    //   ...data,
    //   phone: replaceAll(data.phone),
    // });
    setIsConfirm(true);
    setIsPhone(false);
  };

  const checkDisable = useMemo(() => {
    return (
      expired ||
      (isConfirm
        ? watch("code").length !== 6
        : isPhone
        ? watch("phone").length !== 17
        : isName
        ? watch("name").length < 3
        : false)
    );
  }, [watch()]);

  return (
    <div className={cls.root}>
      <div className={cls.wrapper} />
      <div className={cls.login}>
        <div className={cls.close} onClick={() => router.push("/")}>
          <CloseIcon />
        </div>
        <h1 className={cls.title}>{isName ? "Регистрация" : "Вход на сайт"}</h1>
        {isConfirm ? (
          <span>
            <p className={cls.desc}>Код отправили сообщением на номер</p>
            <p className={cls.phone}>{watch("phone")}</p>
          </span>
        ) : isPhone ? (
          <p className={cls.desc}>Войдите с вашим номером телефона</p>
        ) : isName ? (
          <p className={cls.desc}>Войдите с вашим именем</p>
        ) : null}

        <form
          onSubmit={handleSubmit(
            isConfirm ? sendCode : isPhone ? sendNumber : onSubmit
          )}
        >
          {isConfirm && (
            <>
              <div className={cls.input}>
                <label htmlFor="code">Код подтверждения</label>
                <InputMask
                  id="code"
                  mask="999999"
                  placeholder={"Код подтверждения"}
                  control={control}
                  name="code"
                  errors={errors}
                  size="medium"
                  required
                />
              </div>
              <div className={cls.timer} onClick={resendNumber}>
                {expired ? (
                  <span>Отправить ещё раз</span>
                ) : (
                  formatCodeExpireDuration(seconds)
                )}
              </div>
            </>
          )}
          {isPhone && (
            <div className={cls.input}>
              <label htmlFor="phone">Номер телефона</label>
              <InputMask
                id="phone"
                mask={`+\\9\\9\\8 99 999 99 99`}
                placeholder={"Введите номер"}
                control={control}
                disabled={isConfirm}
                name="phone"
                errors={errors}
                size="medium"
                required
              />
            </div>
          )}
          {isName && (
            <div className={cls.input}>
              <label htmlFor="name">{"Имя"}</label>
              <Input
                id="name"
                placeholder={"Введите ваше имя"}
                name="name"
                register={register}
                errors={errors}
                size="medium"
                required
              />
            </div>
          )}
          <MainButton
            loading={isLoading}
            type="submit"
            disabled={checkDisable}
            className={cls.btn}
            fullWidth
          >
            {isConfirm || isName ? "Подтвердить" : " Выслать код"}
          </MainButton>
        </form>
      </div>
    </div>
  );
}

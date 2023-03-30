import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { useForm } from "react-hook-form";
import { Dialog, Slide } from "@mui/material";
import MainButton from "components/UI/Buttons/MainButton";
import InputMask from "components/UI/Forms/InputMask";
import { CloseIcon } from "components/UI/Icons";
import cls from "./AddCard.module.scss";
import { useStyles } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import * as yup from "yup";
import useCodeExpire from "hooks/useCodeExpire";
import formatCodeExpireDuration from "utils/formatCodeExpireDuration";
import { cardValidation } from "utils/validation";
import SuccessFullyAdded from "./SuccessFullyAdded";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} timeout={560} {...props} />;
});

export default function AddCard({ open, setOpen, refetch }) {
  const [smsSend, setSmsSend] = useState(false);
  const [cardId, setCardId] = useState(null);
  const [expired, setExpired] = useState(false);
  const [resend, setResend] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [isSuccess, setIsSuccess] = useState(false);
  const schemaCard = cardValidation();
  const schema = yup.object().shape({
    sms_code: yup.string().required("Обязательное поле"),
  });

  const classes = useStyles();
  const { t } = useTranslation("common");
  //   const { createMutation, confirmSmsMutation } = usePaymentCard({
  // createMutationProps: {
  //   onSuccess: (res) => {
  //     setSmsSend(true);
  //     setCardId(res.id);
  //     reset({ card_num: "", card_expire_date: "" });
  //   },
  //   onError: () => {
  //     [
  //       {
  //         name: "card_num",
  //         message: t("wrong_card_number"),
  //       },
  //       {
  //         name: "card_expire_date",
  //         message: t("wrong_card_expired_date"),
  //       },
  //     ].forEach(({ name, message }) => setError(name, { message }));
  //   },
  // },
  // confirmSmsMutationProps: {
  //   onSuccess: () => {
  //     Mixpanel.track("Add_Card_Successfully_Web");
  //     setOpen(false);
  //     setSmsSend(false);
  //     setResend(false);
  //     toast.success(t("card_added_successfully"));
  //     refetch();
  //   },
  //   onError: () => {
  //     Mixpanel.track("Wrong_OTP_Card_Web");
  //     setError("sms_code", { message: t("wrong_code") });
  //   },
  // },
  //   });

  const {
    handleSubmit,
    reset,
    watch,
    control,
    setError,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    defaultValues: {
      card_num: "",
      card_expire_date: "",
      sms_code: "",
    },
    resolver: smsSend ? yupResolver(schema) : yupResolver(schemaCard),
  });

  const onSubmit = (data) => {
    // createMutation.mutate({
    //   card_expire_date: data.card_expire_date,
    //   card_num: data.card_num,
    //   user_id: user.id,
    // });
    setSmsSend(true);
    reset({ card_num: "", card_expire_date: "" });
  };

  const confirmSms = (data) => {
    console.log("data", data);
    setIsSuccess(true);

    // confirmSmsMutation.mutate({
    //   card_id: cardId,
    //   sms_code: data.sms_code,
    //   user_id: user.id,
    // });
  };

  useCodeExpire({
    seconds,
    setExpired,
    isConfirm: smsSend,
    setSeconds,
  });

  const reSendCode = () => {
    if (expired) {
      setExpired(false);
      setSeconds(60);
      setResend(true);
      //   createMutation.mutate({
      //     card_expire_date: state.card_expire_date,
      //     card_num: state.card_num,
      //     user_id: user.id,
      //   });
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setOpen(false);
    setSmsSend(false);
    setResend(false);
    reset({ card_num: "", card_expire_date: "", sms_code: "" });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      className={classes.root}
      aria-describedby="alert-dialog-slide-description"
    >
      {!isSuccess ? (
        <form
          onSubmit={handleSubmit(smsSend || resend ? confirmSms : onSubmit)}
        >
          <div className={cls.cardBox}>
            <div className={cls.close} onClick={handleClose}>
              <CloseIcon />
            </div>
            <p>Добавить карту</p>
            {!smsSend ? (
              <>
                <div className={cls.input}>
                  <label>Номер карты</label>
                  <InputMask
                    mask="9999 9999 9999 9999"
                    placeholder="Введите карту"
                    control={control}
                    name="card_num"
                    errors={errors}
                    required
                  />
                </div>
                <div className={cls.input}>
                  <label>Срок карты</label>
                  <InputMask
                    mask="99/99"
                    placeholder="ММ/ГГ"
                    control={control}
                    name="card_expire_date"
                    errors={errors}
                    required
                  />
                </div>
              </>
            ) : (
              <>
                <div className={cls.input}>
                  <label>СМС код</label>
                  <InputMask
                    mask="999999"
                    placeholder="Введит код подтверждения"
                    control={control}
                    name="sms_code"
                    errors={errors}
                    required
                  />
                </div>
                <div className={cls.reSendCode} onClick={reSendCode}>
                  {expired
                    ? "Отправить код ёще раз"
                    : formatCodeExpireDuration(seconds)}
                </div>
              </>
            )}
            <MainButton
              className={cls.addBtn}
              loading={false}
              type="submit"
              size="medium"
              disabled={expired}
              fullWidth
            >
              {!smsSend ? "Продолжить" : "Подтвердить"}
            </MainButton>
          </div>
        </form>
      ) : (
        <SuccessFullyAdded handleClose={handleClose} />
      )}
    </Dialog>
  );
}

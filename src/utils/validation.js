import * as yup from "yup";

export default function validationForm(name) {
  const YupValidation = {
    cardNumber: yup
      .string()
      .required("Обязательное поле")
      .matches(
        /^([8][6][0][0]|[9][8][6][0]|[6][2][6][2]|[5][4][4][0]|[5][6][1][4])/,
        "Неправильный номер карты"
      )
      .min(19, "Номер карты должен содержать 16 символов"),
    pinfl: yup
      .number()
      .strict(true)
      .trim("Поле не должно быть пустым")
      .required("Обязательное поле")
      .min(14, "ПИНФЛ должен содержать 14 цифр символов"),
    phoneNumber: yup
      .string()
      .strict(true)
      .trim("Поле не должно быть пустым")
      .min(17, "Неправильный номер телефона")
      .required("Обязательное поле"),
    passportSeria: yup
      .string()
      .strict(true)
      .trim("Поле не должно быть пустым")
      .required("Обязательное поле")
      .min(2, "Серия паспорта должно содержать 2 символа"),
    passportNumber: yup
      .string()
      .strict(true)
      .trim("Поле не должно быть пустым")
      .required("Обязательное поле")
      .min(7, "Номер паспорта должен содержать 7 символов"),
    selection: yup.object().required("Обязательное поле").nullable(),
    defaultText: yup
      .string()
      .strict(true)
      .trim("Поле не должно быть пустым")
      .required("Обязательное поле")
      .min(3, "Поле должно содержать более 3 символов"),
  };

  return YupValidation[name];
}

export const cardValidation = () => {
  return yup
    .object()
    .shape({
      card_num: validationForm("cardNumber"),
      card_expire_date: yup
        .string()
        .min(5, "Неправильный срок истечения")
        .required("Обязательное поле")
        .test(
          "Неправильный срок истечения",
          "Срок действия карты истек",
          (expirationDate) => {
            if (!expirationDate) {
              return false;
            }
            const today = new Date();
            const monthToday = today.getMonth() + 1;
            const yearToday = today.getFullYear().toString().substr(-2);

            const [expMonth, expYear] = expirationDate.split("/");

            if (Number(expYear) < Number(yearToday)) {
              return false;
            } else if (
              Number(expMonth) < monthToday &&
              Number(expYear) <= Number(yearToday)
            ) {
              return false;
            }

            return true;
          }
        )
        .test(
          "Срок действия тестовой кредитной карты",
          "Срок действия карты не должен быть больше 5 лет",
          (expirationDate) => {
            if (!expirationDate) {
              return false;
            }
            const today = new Date().getFullYear().toString().substr(-2);

            const [expMonth, expYear] = expirationDate.split("/");
            if (Number(expMonth) > 12) {
              return false;
            }
            if (Number(expYear) <= Number(today) + 5) {
              return true;
            } else {
              return false;
            }
          }
        )
        .matches(/([0-9]{2})\/([0-9]{2})/, "Неправильный срок истечения"),
    })
    .required();
};

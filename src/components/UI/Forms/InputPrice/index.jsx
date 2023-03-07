import { Controller } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";
import cls from "./InputPrice.module.scss";
import { NumericFormat } from "react-number-format";

export default function InputPrice({
  placeholder,
  startAdornment,
  endAdornment,
  className = "",
  endAdorment,
  name = "name",
  errors = {},
  control = {},
  required,
  disabled,
  size,
  labelText,
  defaultValue,
  id,
  customOnChange = () => {},
  ...restProps
}) {
  const { t } = useTranslation("common");

  return (
    <div className={`${cls.inputBox} ${className}`}>
      {labelText && (
        <label htmlFor={id}>
          {labelText} {required ? "*" : ""}
        </label>
      )}
      {startAdornment && (
        <div className={cls.startAdornment}>{startAdornment}</div>
      )}
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        rules={{ required }}
        render={({ field: { value, onChange, name } }) => {
          return (
            <>
              <NumericFormat
                thousandsGroupStyle="thousand"
                thousandSeparator=" "
                decimalSeparator="."
                displayType="input"
                autoComplete="off"
                allowNegative={false}
                name={name}
                id={id}
                onChange={(e) => {
                  onChange(e.target.value);
                  customOnChange(e);
                }}
                className={`${cls.input} ${
                  startAdornment ? cls.withStartAdornment : ""
                } ${endAdorment ? cls.withEndAdornment : ""} 
              ${errors[name] ? cls.error : ""}
              ${disabled ? cls.disabled : ""}
              ${cls[size]}
              `}
                {...restProps}
              />
            </>
          );
        }}
      />

      {endAdorment && <div className={cls.endAdorment}>{endAdorment}</div>}
      {errors && errors[name] && errors[name]?.type === "required" ? (
        <span>{t("required_field")}</span>
      ) : (
        errors && errors[name] && <span>{errors && errors[name]?.message}</span>
      )}
    </div>
  );
}

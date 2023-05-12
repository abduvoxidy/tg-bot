import { Controller } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";
import cls from "./InputMask.module.scss";
import InputMaskCopy from "react-input-mask";

export default function InputMask({
  startAdornment,
  endAdornment,
  className = "",
  endAdorment,
  name = "name",
  control = {},
  required,
  disabled,
  size,
  labelText,
  id,
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
        rules={{ required }}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <>
              <InputMaskCopy
                mask="99"
                maskChar=""
                value={value}
                onChange={onChange}
                disabled={disabled}
                id={id}
                className={`${cls.input} ${
                  startAdornment ? cls.withStartAdornment : ""
                } ${endAdorment ? cls.withEndAdornment : ""} 
              ${error ? cls.error : ""}
              ${disabled ? cls.disabled : ""}
              ${cls[size]}
              `}
                {...restProps}
              />
              {error && error?.type === "required" ? (
                <span>{t("required_field")}</span>
              ) : (
                error && <span>{error?.message}</span>
              )}
            </>
          );
        }}
      />
      {endAdorment && <div className={cls.endAdorment}>{endAdorment}</div>}
    </div>
  );
}

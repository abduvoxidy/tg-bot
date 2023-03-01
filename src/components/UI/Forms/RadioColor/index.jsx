import cls from "./RadioColor.module.scss";

export default function RadioColor({
  checked,
  color = "primary",
  ...restProps
}) {
  return (
    <div className={cls.radio}>
      <input type="radio" checked={checked} {...restProps} />
      <div
        className={`${cls.box} ${checked ? cls.active : ""} ${cls[color]}`}
      ></div>
    </div>
  );
}

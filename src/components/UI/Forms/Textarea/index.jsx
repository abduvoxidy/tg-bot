import cls from "./Textarea.module.scss";

export default function Textarea({
  placeholder,
  startAdornment,
  endAdornment,
  className = "",
  id,
  labelText = "",
  ...restProps
}) {
  return (
    <div className={`${cls.textareaBox} ${className}`}>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <textarea
        placeholder={placeholder}
        className={cls.textarea}
        id={id}
        rows="4"
        {...restProps}
      />
    </div>
  );
}

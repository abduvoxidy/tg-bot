import cls from "./CheckoutCard.module.scss";

export default function CheckoutCard({
  children,
  title,
  scrollRef,
  className = "",
  isEdit,
  handleClick = () => {},
  ...restProps
}) {
  return (
    <>
      <div
        className={`${cls.card} ${className}`}
        ref={scrollRef}
        {...restProps}
      >
        <h3 className={cls.title}>{title}</h3>
        <p
          onClick={() => {
            handleClick();
          }}
          className={cls.edit}
        >
          {isEdit && "Изменить"}
        </p>
        {children}
      </div>
    </>
  );
}

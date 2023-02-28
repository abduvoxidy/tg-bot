import { useMemo } from "react";
import { rem } from "utils/pxToRem";
import SecondaryButton from "components/UI/Buttons/SecondaryButton";
import { AddIcon, SubstractIcon } from "components/UI/Icons";
import cls from "./CartButton.module.scss";

export default function CartButton({
  className = "",
  size = 40,
  increment = () => {},
  decrement = () => {},
  count,
}) {
  const styles = useMemo(
    () => ({
      width: rem(size),
      height: rem(size),
      maxWidht: rem(size),
      maxHeight: rem(size),
    }),
    [size]
  );

  return (
    <div className={`${cls.buttons} ${className}`}>
      <SecondaryButton className={cls.btn} style={styles} onClick={decrement}>
        <SubstractIcon />
      </SecondaryButton>
      <div className={cls.count} style={styles}>
        {count || 1}
      </div>
      <SecondaryButton className={cls.btn} style={styles} onClick={increment}>
        <AddIcon />
      </SecondaryButton>
    </div>
  );
}

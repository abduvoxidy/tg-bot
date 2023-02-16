import { RightArrowIcon } from "../Icons";
import cls from "./Arrows.module.scss";

export function SampleNextArrow(props) {
  const { className, styles = "", onClick } = props;
  return (
    <div
      className={` ${cls.nextArrow} ${className} ${styles}`}
      onClick={onClick}
    >
      <RightArrowIcon />
    </div>
  );
}

export function SamplePrevArrow(props) {
  const { className, styles = "", onClick } = props;
  return (
    <div
      className={` ${cls.prevArrow} ${className} ${styles}`}
      onClick={onClick}
    >
      <RightArrowIcon />
    </div>
  );
}

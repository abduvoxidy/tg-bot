import cls from "./Controls.module.scss";

const SliderControls = ({ dots }) => {
  return (
    <span className={`${cls.controls} slick-dots`}>
      <ul className={cls.controls__dotsList}>{dots}</ul>
    </span>
  );
};

export default SliderControls;

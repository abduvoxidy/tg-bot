import cls from "./ShowMoreBtn.module.scss";
import { ReadMoreIcon } from "components/UI/Icons";
import useTranslation from "next-translate/useTranslation";

const ShowMoreBtn = ({
  setIsOpenContent = () => {},
  isOpenContent,
  ...restProps
}) => {
  const { t } = useTranslation("common");
  return (
    <button
      className={cls.showMoreBtn}
      onClick={() => setIsOpenContent((prev) => !prev)}
      {...restProps}
    >
      <span>{isOpenContent ? "Развернуть" : "Cвернуть"}</span>
      <div className={isOpenContent ? cls.openBtn : ""}>
        <ReadMoreIcon />
      </div>
    </button>
  );
};

export default ShowMoreBtn;

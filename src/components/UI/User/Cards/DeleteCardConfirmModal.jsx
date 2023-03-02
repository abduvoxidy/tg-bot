import { Dialog } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import MainButton from "components/UI/Buttons/MainButton";
import SecondaryButton from "components/UI/Buttons/SecondaryButton";
import cls from "./Cards.module.scss";
import { useStyles } from "./styles";

export default function DeleteCardConfirmModal({
  open,
  handleClose,
  confrimFn,
}) {
  const classes = useStyles();
  const { t } = useTranslation("common");

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={classes.root}
    >
      <div className={cls.dialog}>
        <p>Удалить карту</p>
        <p>Вы уверены что хотите удалить карту?</p>
        <div className={cls.groupButton}>
          <SecondaryButton fullWidth onClick={handleClose}>
            Отменить
          </SecondaryButton>
          <MainButton
            fullWidth
            onClick={() => {
              confrimFn();
            }}
          >
            Подтвердить
          </MainButton>
        </div>
      </div>
    </Dialog>
  );
}

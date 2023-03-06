import { Dialog } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import MainButton from "components/UI/Buttons/MainButton";
import SecondaryButton from "components/UI/Buttons/SecondaryButton";
import cls from "./Addresses.module.scss";
import { useStyles } from "./styles";

export default function AddressDeleteModal({
  open,
  setOpen,
  confirmFn = () => {},
}) {
  const classes = useStyles();
  const { t } = useTranslation("common");

  return (
    <Dialog
      className={classes.root}
      open={!!open}
      onClose={() => {
        setOpen(false);
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className={cls.dialog}>
        <p>Удалить адрес"</p>
        <p>Вы уверены что хотите удалить адрес?"</p>
        <div className={cls.groupButton}>
          <SecondaryButton fullWidth onClick={() => setOpen(false)}>
            Отменить
          </SecondaryButton>
          <MainButton loading={false} fullWidth onClick={confirmFn}>
            Подтвердить
          </MainButton>
        </div>
      </div>
    </Dialog>
  );
}

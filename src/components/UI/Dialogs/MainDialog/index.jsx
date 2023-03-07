import React from "react";
import { useStyles } from "./styles";
import { Dialog } from "@mui/material";
import { CloseIcon } from "components/UI/Icons";
import cls from "./MainDialog.module.scss";

function MainDialog({ children, open, handleClose, className, ...restProps }) {
  const classes = useStyles();
  return (
    <Dialog
      className={classes.root}
      open={!!open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      {...restProps}
    >
      <div className={`${cls.dialog} ${className}`}>
        <span onClick={handleClose} className={cls.close}>
          <CloseIcon />
        </span>
        {children}
      </div>
    </Dialog>
  );
}

export default MainDialog;

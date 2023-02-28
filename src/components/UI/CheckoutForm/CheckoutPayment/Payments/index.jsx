import React, { useState } from "react";
import RadioPayment from "components/UI/Forms/RadioPayment";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
} from "@mui/material";
import cls from "./Payments.module.scss";

function Payments({ data = [] }) {
  const [payment, setPayment] = useState(data[0]?.title || "");
  return (
    <div className={cls.root}>
      <FormControl>
        <RadioGroup
          className={cls.radioGroup}
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={data[0]?.title || ""}
          name="radio-buttons-group"
        >
          {data.map((el) => (
            <div onClick={() => setPayment(el.title)} key={el.title}>
              <FormControlLabel
                className={cls.label}
                value={el}
                checked={payment ? el.title === payment : false}
                control={<RadioPayment imgSrc={el.img} labelText={el.title} />}
              />
            </div>
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default Payments;

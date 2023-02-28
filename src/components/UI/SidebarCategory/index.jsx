import React from "react";
import cls from "./SidebarCategory.module.scss";
import Input from "../Forms/Input";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import CustomSlider from "./styles";
import Checkbox from "../Forms/Checkbox";
import RadioColor from "../Forms/RadioColor";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
} from "@mui/material";
import SecondaryButton from "../Buttons/SecondaryButton";

function SidebarCategory() {
  const [value, setValue] = useState([200000, 1000000]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [checkedStocks, setCheckedStocks] = useState([]);
  const [color, setColor] = useState(null);

  const handleCheck = (data) => {
    const item = checkedItems.find((val) => val === data);
    if (item) {
      setCheckedItems((prev) => prev.filter((el) => el !== data));
    } else {
      setCheckedItems((prev) => [...prev, data]);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // console.log("newValue", newValue);
  };

  const handleColor = (data) => {
    setColor(data);
  };

  const handleStock = (data) => {
    const item = checkedStocks.find((val) => val === data);
    if (item) {
      setCheckedStocks((prev) => prev.filter((el) => el !== data));
    } else {
      setCheckedStocks((prev) => [...prev, data]);
    }
  };

  const handleFilter = () => {
    setCheckedItems([]);
    setCheckedStocks([]);
    setColor(null);
    setValue([200000, 1000000]);
  };

  const brands = ["Redmi", "Apple", "Samsung", "Huawei", "Windows"];
  const colors = ["green", "black", "red", "primary", "secondary"];
  const stocks = ["В продаже", "В наличии"];

  return (
    <div className={cls.root}>
      <form>
        <div className={cls.price}>
          <label>Цена</label>
          <div className={cls.inputs}>
            <Input
              id="price"
              // defaultValue={value[0]}
              onChange={(e) => {
                const arr = [];
                arr.push(+e.target.value);
                arr.push(value[1]);
                setValue(arr);
              }}
              value={value[0]}
              className={cls.inputBox}
              placeholder="От 20 000"
            />
            <Input
              id="price"
              value={value[1]}
              onChange={(e) => {
                const arr = [];
                arr.push(value[0]);
                arr.push(+e.target.value);
                setValue(arr);
              }}
              className={cls.inputBox}
              placeholder="До 20 000"
            />
          </div>
          <div className={cls.slider}>
            <CustomSlider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              min={200000}
              // step={1}
              max={1000000}
              // defaultValue={[25000, 75000]}
              defaultValue={[20, 40]}
            />
          </div>
        </div>

        <div className={cls.brands}>
          <label>Бренд</label>
          {brands.map((el, i) => (
            <div key={i} onClick={() => handleCheck(el)} className={cls.brand}>
              <Checkbox value={el} checked={checkedItems.includes(el)} />
              <p>{el}</p>
            </div>
          ))}
          <p className={cls.showMore}>Посмотреть все</p>
        </div>

        <div className={cls.colors}>
          <FormControl>
            <label>Цвет</label>
            <RadioGroup
              className={cls.radioGroup}
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="green"
              name="radio-buttons-group"
            >
              {colors.map((el) => (
                <div onClick={() => handleColor(el)} key={el}>
                  <FormControlLabel
                    value={el}
                    checked={color ? el === color : false}
                    control={<RadioColor color={el} />}
                  />
                </div>
              ))}
            </RadioGroup>
          </FormControl>
        </div>

        <div className={cls.stocks}>
          <label>Наличие на складе</label>
          {stocks.map((el, index) => (
            <div
              key={index}
              onClick={() => handleStock(el)}
              className={cls.stock}
            >
              <Checkbox value={el} checked={checkedStocks.includes(el)} />
              <p>{el}</p>
            </div>
          ))}
        </div>

        <SecondaryButton
          onClick={handleFilter}
          className={cls.filterBtn}
          fullWidth
        >
          Сбросить фильтр
        </SecondaryButton>
      </form>
    </div>
  );
}

export default SidebarCategory;

import cls from "./SidebarCategory.module.scss";
import Input from "components/UI/Forms/Input";
import { useState } from "react";
import CustomSlider from "./styles";
import Checkbox from "components/UI/Forms/Checkbox";
import RadioColor from "components/UI/Forms/RadioColor";
import { FormControl, FormControlLabel, RadioGroup } from "@mui/material";
import SecondaryButton from "components/UI/Buttons/SecondaryButton";
import { useBrandsQuery } from "services/brands.service";
import { useRouter } from "next/router";
import useKeyTranslation from "hooks/useKeyTranslation";
import { useEffect } from "react";
import { useAttributesQuery } from "services/attributes.service";
import { useQueryClient, useQueries } from "react-query";
import { useMemo } from "react";
import { attributesService } from "services/attributes.service";

function SidebarCategory() {
  const [attributes, setAttributes] = useState();
  const [value, setValue] = useState([200000, 1000000]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [checkedStocks, setCheckedStocks] = useState([]);
  const [color, setColor] = useState(null);
  const router = useRouter();
  const getKey = useKeyTranslation();
  const category_id = router.query.id;

  const { data: brandsData, isLoading } = useBrandsQuery({
    data: {
      // category_id: [category_id],
    },
    queryParams: {
      enabled: !!category_id,
    },
  });

  const { data, isLoading: attributesLoading } = useAttributesQuery({
    data: {
      // category_id,
    },
    queryParams: {
      enabled: !!category_id,
      onSuccess: (res) => {
        setAttributes(res);
      },
    },
  });

  // const attributeQueries = useMemo(() => {
  //   return attributes?.map((el) => ({
  //     queryKey: [
  //       "ATTRIBUTE_VARIANTS",
  //       {
  //         attributes_id: el?.guid,
  //       },
  //     ],
  //     queryFn: () =>
  //       attributesService.getVariantsList({ attributes_id: el.guid }),
  //   }));
  // }, [attributes]);

  // const variantsQueryResults = useQueries(attributeQueries);

  // console.log("variantsQueryResults", variantsQueryResults);

  useEffect(() => {
    if (router.query.hasOwnProperty("brand_ids") || checkedItems.length > 0) {
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          brand_ids: checkedItems.join(","),
        },
      });
    }
  }, [router.isReady, checkedItems]);

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
          {brandsData &&
            brandsData.map((el) => (
              <div key={el.guid} className={cls.brand}>
                <Checkbox
                  onChange={(e) => {
                    handleCheck(el.guid);
                  }}
                  id={el?.[getKey("title")]}
                  value={el.guid}
                  checked={checkedItems.includes(el.guid)}
                />
                <label className={cls.label} htmlFor={el?.[getKey("title")]}>
                  {el?.[getKey("title")]}
                </label>
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
                    control={<RadioColor onChange={() => {}} color={el} />}
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
              <Checkbox
                onChange={(e) => {
                  console.log("e", e.target.checked);
                }}
                value={el}
                checked={checkedStocks.includes(el)}
              />
              <p>{el}</p>
            </div>
          ))}
        </div>

        <SecondaryButton
          onClick={() => {
            handleFilter();
          }}
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

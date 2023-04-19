import cls from "./SidebarCategory.module.scss";
import Input from "components/UI/Forms/Input";
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
import { useGetAttributesResources } from "services/attributes.service";
import { useMemo, useState } from "react";
import SimpleLoader from "components/UI/Loaders/SimpleLoader";
import Link from "next/link";

function SidebarCategory(subData) {
  const [value, setValue] = useState([200000, 1000000]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [checkedStocks, setCheckedStocks] = useState([]);
  const [brands, setBrands] = useState([]);
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
      onSuccess: (res) => {
        const data = res.slice(0, 5);
        setBrands(data);
      },
    },
  });

  /* 
  // Please don't remove this section
  const { data: attributes, isLoading: attributesLoading } = useAttributesQuery(
    {
      data: {
        // category_id,
      },
      queryParams: {
        enabled: !!category_id,
        onSuccess: (res) => {},
      },
    }
  );

  const variantQueryResults = useGetAttributesResources({ list: attributes });

  const variants = useMemo(() => {
    const list = [];
    variantQueryResults.forEach((query) => {
      query.data?.forEach((item) => {
        list.push({
          ...item,
          name_ru: item.name_ru,
        });
      });
    });
    attributes &&
      attributes.length > 0 &&
      attributes.forEach((attr) => {
        attr.children = list.filter((el) => el.attributes_id === attr.guid);
      });

    return attributes;
  }, [variantQueryResults]); */

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
  const data = subData?.subData?.category?.children;
  const colors = ["green", "black", "red", "primary", "secondary"];
  const stocks = ["В продаже", "В наличии"];
  console.log("data", subData.subData);
  return (
    <>
      {data && (
        <div className={cls.category}>
          {data?.map((el) => (
            <Link href={`/category/${el.slug}`}>
              <a>{el?.[getKey("name")]}</a>
            </Link>
          ))}
        </div>
      )}

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
            {brands &&
              brands.map((el) => (
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
            <p
              onClick={() => {
                setBrands(brandsData);
              }}
              className={cls.showMore}
            >
              Показать ещё
            </p>
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
    </>
  );
}

export default SidebarCategory;

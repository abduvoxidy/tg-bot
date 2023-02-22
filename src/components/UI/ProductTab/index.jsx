import React from "react";
import cls from "./ProductTab.module.scss";
// import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { StyledTabs, StyledTab } from "./styles";

function ProductTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={cls.root}>
      <div className={cls.header}>
        <StyledTabs value={value} onChange={handleChange}>
          <StyledTab label="Item One" />
          <StyledTab label="Item Two" />
          <StyledTab label="Item Three" />
        </StyledTabs>
      </div>
      <div className={cls.main}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
        temporibus deleniti saepe perferendis nulla natus ab esse eius illum
        doloribus culpa expedita atque reiciendis ullam pariatur distinctio
        necessitatibus perspiciatis ducimus!
      </div>
    </div>
  );
}

export default ProductTab;

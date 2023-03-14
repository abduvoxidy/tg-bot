import React from "react";
import cls from "./ProductTab.module.scss";

import { StyledTabs, StyledTab } from "../CTabs";
import { useState } from "react";
import Description from "./Description";
import Characteristic from "./Characteristic";
import Delivery from "./Delivery";
import TabBody from "components/UI/CTabs/TabBody";

function ProductTab() {
  const [tabValue, setTabValue] = useState("description");
  return (
    <div className={cls.root}>
      <div className={cls.header}>
        <StyledTabs
          onChange={(e, val) => {
            setTabValue(val);
          }}
          value={tabValue}
        >
          <StyledTab value="description" label="Описание" />
          <StyledTab value="characters" label="Характеристика" />
          <StyledTab value="delivery" label="Доставка" />
        </StyledTabs>
      </div>
      <div className={cls.main}>
        <TabBody tab="description" tabValue={tabValue}>
          <Description />
        </TabBody>
        <TabBody tab="characters" tabValue={tabValue}>
          <Characteristic />
        </TabBody>
        <TabBody tab="delivery" tabValue={tabValue}>
          <Delivery />
        </TabBody>
      </div>
    </div>
  );
}

export default ProductTab;

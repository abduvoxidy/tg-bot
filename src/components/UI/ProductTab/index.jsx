import React from "react";
import cls from "./ProductTab.module.scss";

import { StyledTabs, StyledTab } from "../CTabs";
import { useCallback } from "react";
import { useState } from "react";
import Description from "./Description";
import Characteristic from "./Characteristic";
import Delivery from "./Delivery";

function ProductTab() {
  const [tabValue, setTabValue] = useState("description");

  const TabBody = useCallback(
    ({ tab, children }) => {
      if (tab === tabValue) return children;
      return <></>;
    },
    [tabValue]
  );
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
        <TabBody tab="description">
          <Description />
        </TabBody>
        <TabBody tab="characters">
          <Characteristic />
        </TabBody>
        <TabBody tab="delivery">
          <Delivery />
        </TabBody>
      </div>
    </div>
  );
}

export default ProductTab;

import React from "react";
import cls from "./ProductTab.module.scss";

import { StyledTabs, StyledTab } from "./styles";
import { useCallback } from "react";
import { useState } from "react";
import Description from "./Description";
import Characteristic from "./Characteristic";

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
          <StyledTab value="map" label="Доставка" />
        </StyledTabs>
      </div>
      <div className={cls.main}>
        <TabBody tab="description">
          <Description />
        </TabBody>
        <TabBody tab="characters">
          <Characteristic />
        </TabBody>
        <TabBody tab="map">
          <h3>Description 3</h3>
        </TabBody>
      </div>
    </div>
  );
}

export default ProductTab;

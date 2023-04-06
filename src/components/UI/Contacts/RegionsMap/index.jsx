import React from "react";
import cls from "./RegionsMap.module.scss";
import { merchants } from "./data";
import { MapPhoneIcon, MapLocationIcon } from "components/UI/Icons";
import { useState } from "react";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import { mapDefaults } from "utils/yandexMapUtils";
import { useBranchesQuery } from "services/branches.service";

function RegionsMap() {
  const [mapPosition, setMapPosition] = useState({
    center: [41.311151, 69.279737],
    zoom: 15,
  });
  const [isMerchant, setIsMerchant] = useState(0);

  const { data: branches } = useBranchesQuery({ data: {}, queryParams: {} });

  const handlePlacemark = (item, index) => {
    setIsMerchant(index);
    setMapPosition((prev) => ({
      ...prev,
      center: [item.lat || 41.311151, item.long || 69.279737],
      zoom: 16,
    }));
  };

  return (
    <div className={cls.regionsMap}>
      <div className={cls.merchants}>
        <h2>Магазины</h2>
        <div className={cls.items}>
          {branches &&
            branches.length &&
            branches.map((el, i) => (
              <div
                key={el.guid}
                onClick={() => {
                  handlePlacemark(el, i);
                }}
                className={cls.item}
              >
                <h3 className={`${isMerchant === i ? cls.activeTitle : ""}`}>
                  {el.name}
                </h3>
                <span>
                  <MapPhoneIcon />
                  <a href={`tel:${el?.phone_number}`}>{el?.phone_number}</a>
                </span>
                <span>
                  <MapLocationIcon />
                  <p>{el?.address}</p>
                </span>
              </div>
            ))}
        </div>
      </div>
      <div className={cls.map}>
        <YMaps>
          <Map
            instanceRef={(ref) => {
              ref && ref.behaviors.disable("scrollZoom");
            }}
            modules={[
              "multiRouter.MultiRoute",
              "coordSystem.geo",
              "geocode",
              "util.bounds",
            ]}
            defaultState={mapDefaults}
            state={mapPosition}
            width="100%"
            height="100%"
          >
            <ZoomControl />
            {branches &&
              branches.length &&
              branches.map((item, i) => (
                <Placemark
                  key={i}
                  onClick={() => {
                    //   handlePlacemark(item);
                  }}
                  options={{
                    iconLayout: "default#image",
                    iconImageHref: "/icons/map.svg",
                    iconImageSize: [50, 50],
                    iconImageOffset: [0, 0],
                  }}
                  properties={{
                    balloonContentBody: item.name,
                  }}
                  geometry={[item?.lat || 41.311151, item?.long || 69.279737]}
                />
              ))}
          </Map>
        </YMaps>
      </div>
    </div>
  );
}

export default RegionsMap;

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
    center: [merchants[0]?.coordinates.lat, merchants[0]?.coordinates.long],
    zoom: 15,
  });
  const [isMerchant, setIsMerchant] = useState(0);

  const { data: branches } = useBranchesQuery({ data: {}, queryParams: {} });

  console.log("branches", branches);

  const handlePlacemark = (item, index) => {
    setIsMerchant(index);
    setMapPosition((prev) => ({
      ...prev,
      center: [item.coordinates.lat, item.coordinates.long],
      zoom: 16,
    }));
  };

  return (
    <div className={cls.regionsMap}>
      <div className={cls.merchants}>
        <h2>Магазины</h2>
        <div className={cls.items}>
          {merchants.map((el, i) => (
            <div
              onClick={() => {
                handlePlacemark(el, i);
              }}
              className={cls.item}
            >
              <h3 className={`${isMerchant === i ? cls.activeTitle : ""}`}>
                {el.title}
              </h3>
              <span>
                <MapPhoneIcon />
                <a href={`tel:${el?.number}`}>{el?.number}</a>
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
            {merchants.map((item, i) => (
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
                geometry={[item.coordinates.lat, item.coordinates.long]}
              />
            ))}
          </Map>
        </YMaps>
      </div>
    </div>
  );
}

export default RegionsMap;

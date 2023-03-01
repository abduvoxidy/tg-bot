import React from "react";
import cls from "./Delivery.module.scss";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import { mapDefaults } from "utils/yandexMapUtils";
import WhatWeOffer from "./WhatWeOffer";
import { useState } from "react";
import { useRef } from "react";
import { coordinates } from "./data";

function Delivery() {
  const [mapPosition, setMapPosition] = useState({
    center: [41.311151, 69.279737],
    zoom: 11,
  });
  const mapRef = useRef(null);
  const [yMaps, setYmaps] = useState(null);
  return (
    <div className={cls.root}>
      <div className={cls.map}>
        <YMaps>
          <Map
            instanceRef={(ref) => {
              ref && ref.behaviors.disable("scrollZoom");
            }}
            onLoad={(ymaps) => {
              setYmaps(ymaps);
            }}
            modules={[
              "multiRouter.MultiRoute",
              "coordSystem.geo",
              "geocode",
              "util.bounds",
            ]}
            // instanceRef={mapRef}
            defaultState={mapDefaults}
            state={mapPosition}
            width="100%"
            height="100%"
          >
            <ZoomControl />
            {coordinates.map((el, i) => (
              <Placemark
                key={i}
                onClick={() => {
                  console.log("hi icon");
                }}
                options={{
                  iconLayout: "default#image",
                  iconImageHref: "/icons/map.svg",
                  iconImageSize: [60, 50],
                  iconImageOffset: [0, 0],
                }}
                geometry={[el.lat, el.long]}
              />
            ))}
          </Map>
        </YMaps>
      </div>
      <WhatWeOffer />
    </div>
  );
}

export default Delivery;

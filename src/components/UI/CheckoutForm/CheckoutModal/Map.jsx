import React from "react";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import { useState } from "react";
import { mapDefaults } from "utils/yandexMapUtils";

function YandexMap() {
  const [mapPosition, setMapPosition] = useState({
    center: [41.311151, 69.279737],
    zoom: 11,
  });
  const [yMaps, setYmaps] = useState(null);

  return (
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
        {/* {coordinates.map((el, i) => (
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
          ))} */}
      </Map>
    </YMaps>
  );
}

export default YandexMap;

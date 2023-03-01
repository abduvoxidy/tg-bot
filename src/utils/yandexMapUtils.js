export function loadYandexMap(lang) {
  const hasAdded = !!document.getElementById("yandex-map-script");
  if (!hasAdded) {
    var jsElm = document.createElement("script");
    jsElm.type = "application/javascript";
    jsElm.src = `https://api-maps.yandex.ru/2.1/?lang=${
      lang == "en" ? "en-US" : "ru_RU"
    }&apikey=55119bed-98a3-46f6-8b74-b9e9fd7f87a9`;
    jsElm.id = "yandex-map-script";
    document.body.appendChild(jsElm);
  }
}

export const mapDefaults = {
  center: [41.311151, 69.279737],
  zoom: 12,
  duration: 1000,
  timingFunction: "ease-in",
  behaviors: ["default", "scrollZoom"],
  // controls: [
  //   // "zoomControl",
  //   // "fullscreenControl",
  //   //"smallZoomControl",
  //   // "geolocationControl",
  //   // "rulerControl",
  //   // "trafficControl",
  //   // "typeSelector"
  // ],
};

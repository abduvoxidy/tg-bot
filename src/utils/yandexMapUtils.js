import axios from "axios";

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

export async function searchAddress(params) {
  try {
    const result = await axios({
      method: "get",
      url: "https://geocode-maps.yandex.ru/1.x",
      params: {
        ...params,
        apikey: "55119bed-98a3-46f6-8b74-b9e9fd7f87a9",

        // add_chains_loc: 1,
        // add_rubrics_loc: 1,
        // bases: 'geo,biz,transit',
        // client_reqid: '1660758707366_576464',
        // fullpath: 1,
        lang: "ru_UZ",
        format: "json",
        rspn: 0,
        results: 10,
        spn: "6.5,6.5",
        sco: "latlong",
        // ll: '69.1863925,41.34644307412243',
        // origin: 'maps-search-form',
        // outformat: 'json',
        // pos: 5,
        // spn: '0.013198226956717463,0.0026048852360531782',
        // ull: '69.251891,41.330278'
        // v: '9',
        // yu: 5878686631660629771
      },
    });
    console.log("result==>", result);
    return result?.data?.response?.GeoObjectCollection?.featureMember;
  } catch (e) {
    console.log("e", e);
    return [];
  }
}

var searchEl = document.getElementById("default-search").value
var APIkey = "AIzaSyCQ2C-bnOvVf1LWKDlWlQy0DSckI8OR-XI"

let map;

function initMap() {
  const localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById("map"),
    placeTypePreferences: [
      { type: "restaurant" },
      { type: "tourist_attraction" },
    ],
    maxPlaceCount: 12,
  });

  map = localContextMapView.map;
  map.setOptions({
    center: { lat: 51.507307, lng: -0.08114 },
    zoom: 14,
  });
}

window.initMap = initMap;

//Crimeometer
const x_api_key_level11 = "2X4xrZBDZf54VsUfgHEhl5KXKq6P4r975zhfrOhL";
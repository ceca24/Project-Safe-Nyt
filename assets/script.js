var searchEl = document.getElementById("default-search").value
var APIkey = "AIzaSyCQ2C-bnOvVf1LWKDlWlQy0DSckI8OR-XI"


function citySearch() {
    // var queryURL = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCQ2C-bnOvVf1LWKDlWlQy0DSckI8OR-XI
    // &q=Space+Needle,Seattle+WA`
    var queryURL = `https://www.google.com/maps/embed/v1/search?key=${APIkey}&q=${searchEl}`

fetch(queryURL)
    .then(res => res.json())
    .then(data => console.log(data))
}

citySearch()

// let map;
// let service;
// let infowindow;
// var APIkey = "5238afc3f846ceadbc3c137f84bf5d39"

// // update with google's coordinate system
// // function geocodeCall(cityValue) {
// //   var queryURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityValue}&limit=5&appid=${APIkey}`

// //   fetch(queryURL)
// //       .then(response=> response.json())
// //       .then(data=> {
// //           console.log(data);
// //           initMap(data[0].lat, data[0].lon)
// //       });
// //     }
    
// function initMap() {
//   const city = new google.maps.LatLng(lat, lon);

//   infowindow = new google.maps.InfoWindow();
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: city,
//     zoom: 15,
//   });

//   const request = {
//     // value for drop down goes here
//     query: "bar",
//     fields: ["name", "geometry"],
//   };

//   service = new google.maps.places.PlacesService(map);
//   service.findPlaceFromQuery(request, (results, status) => {
//     if (status === google.maps.places.PlacesServiceStatus.OK && results) {
//       for (let i = 0; i < results.length; i++) {
//         createMarker(results[i]);
//       }

//       map.setCenter(results[0].geometry.location);
//     }
//   });
// }

// function createMarker(place) {
//   if (!place.geometry || !place.geometry.location) return;

//   const marker = new google.maps.Marker({
//     map,
//     position: place.geometry.location,
//   });

//   google.maps.event.addListener(marker, "click", () => {
//     infowindow.setContent(place.name || "");
//     infowindow.open(map);
//   });
// }

// window.initMap = initMap;

// // geocodeCall("Seattle")
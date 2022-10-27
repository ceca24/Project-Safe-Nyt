// Use this key in your application by passing it with the key=API_KEY parameter.
var APIkey = "AIzaSyCQ2C-bnOvVf1LWKDlWlQy0DSckI8OR-XI"
// var searchEL = document.getElementbyID("")
var queryURL = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCQ2C-bnOvVf1LWKDlWlQy0DSckI8OR-XI
&q=${SearchEl}`

fetch(queryURL)
    .then(res => res.json())
    .then(data => console.log(data))





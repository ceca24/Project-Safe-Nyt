/*
*    crimeometer-google-maps-control-v2.1.js
*    Data Visualization with Google
*/
  
function initMap() {

    //Load parameters
    var script_tag = document.getElementById('crimeometer-google-maps-control-v2');
    var data_tk = script_tag.getAttribute("data-tk");
    var data_zoom = script_tag.getAttribute("data-zoom");
    var data_lat = script_tag.getAttribute("data-lat");
    var data_lon = script_tag.getAttribute("data-lon");
    var data_distance = script_tag.getAttribute("data-distance");
    var data_datetime_ini = script_tag.getAttribute("data-datetime-ini");
    var data_datetime_end = script_tag.getAttribute("data-datetime-end");
    var data_max_incidents = script_tag.getAttribute("data-max-incidents");

    //Map settings
    var map;

    const origin_lat = data_lat; 
    const origin_lng = data_lon;
    const zoom = parseInt(data_zoom);

    map = new google.maps.Map(
        document.getElementById('crime-map'),{
            center: new google.maps.LatLng(origin_lat, origin_lng), 
            zoom: zoom, 
            fullscreenControl: false
        });

    var logoControlDiv = document.createElement('div');
    var logoControl = new MyLogoControl(logoControlDiv);
    logoControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(logoControlDiv);

    var graphicControlDiv = document.createElement('div');
    var graphicControl = new MyGraphicControl(graphicControlDiv);
    graphicControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(graphicControlDiv);

    if (data_tk != ''){

        var layer;

        var TILE_URL = 'https://tiles.crimeometer.com/get-tile-v2?tk={tk}&z={z}&x={x}&y={y}'

        layer = new google.maps.ImageMapType({
            name: 'layerID',
            getTileUrl: function(coord, zoom) {
              //console.log(coord);
              var url_tile = TILE_URL
                .replace('{x}', coord.x)
                .replace('{y}', coord.y)
                .replace('{z}', zoom)
                .replace('{tk}',data_tk);
              return url_tile;
            },
            tileSize: new google.maps.Size(256, 256),
            minZoom: 1,
            maxZoom: 20
        });

       map.overlayMapTypes.push(layer); 

    }

    if (x_api_key != '' && x_api_key != '{YOUR API KEY}'){

        var request = new XMLHttpRequest();

        // JSON Payload to call crimeometer-handler-v2
        const payload = {
            "method": "crimeometer_google_maps_markers",
            "lat": data_lat,
            "lon": data_lon,
            "distance": data_distance,
            "datetime_ini": data_datetime_ini,
            "datetime_end": data_datetime_end,
            "max_incidents": data_max_incidents
        }

        // crimeometer-handler-v2 URL
        const url_level1 = 'https://api.crimeometer.com/v2/handler/level1';

        request.onreadystatechange=function(){
            if (request.readyState==4 && request.status==200){
                
                let res = JSON.parse(request.responseText);
                result_data = res['incidents'];
            
                //Load data.
                var features = [];
                var info = [];
                for (var i = 0; i < result_data.length; i++) {
                    var item = {
                        position: new google.maps.LatLng(result_data[i].lat, result_data[i].lon),
                        type: result_data[i].offense,
                        }
                    features.push(item)
                    var item_info = {
                        content: result_data[i].offense
                    }
                    info.push(item_info)
            
                }

                var infowindow = new google.maps.InfoWindow();
            
                // Create markers.
                for (var i = 0; i < features.length; i++) {
            
                    var marker = new google.maps.Marker({
                        position: features[i].position,
                        icon: icons[features[i].type].icon,
                        map: map
                    });
            
                    google.maps.event.addListener(marker, 'click', (function(marker, i) {
                        return function() {
                            infowindow.setContent(info[i].content);
                            infowindow.open(map, marker);
                        }
                    })(marker, i));
            
                };
            }

        }
        request.open("POST", url_level1);
        request.setRequestHeader('Content-Type','aplication/json')
        request.setRequestHeader('x-api-key',x_api_key)
        request.send(JSON.stringify(payload));
    }
    
}

function MyLogoControl(controlDiv) {
    controlDiv.style.padding = '10px';

    var logo = document.createElement('img');
    logo.src = 'crimeometer-data-visualization-kit/static/crimeometer_logo.png';
    logo.style.cursor = 'pointer';
    controlDiv.appendChild(logo);

    var source = window.location.hostname;
    if (window.location.hostname == '' || window.location.hostname == null){
        source = window.location.href;
    }
    var url = 'https://crimeometer.com/?utm_medium=embeddablemap&utm_source='+source;

    google.maps.event.addDomListener(logo, 'click', function() {
        window.open(url, '_blank');
    });
}



function MyGraphicControl(controlDiv) {
    controlDiv.style.padding = '10px';

    var graphic = document.createElement('img');
    graphic.src = 'crimeometer-data-visualization-kit/static/risk_graphic.png';
    controlDiv.appendChild(graphic);
}
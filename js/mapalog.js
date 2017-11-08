 


 var map;
      var infoWindow;

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 19,
          center: {lat: 6.170865, lng:  -75.427611},
          mapTypeId: 'terrain'
        });

        // Define the LatLng coordinates for the polygon.
        var airportCoords = [
            {lat: 6.170020, lng:  -75.428374}, {lat: 6.170305, lng:  -75.428442},
            {lat: 6.170318, lng:  -75.428375}, {lat: 6.170363, lng:  -75.428383},
            {lat: 6.170474, lng:  -75.428113}, {lat: 6.170605, lng:  -75.427934},
            {lat: 6.170766, lng:  -75.427791}, {lat: 6.171023, lng:  -75.427657},
            {lat: 6.171238, lng:  -75.427607}, {lat: 6.171543, lng:  -75.427613},
            {lat: 6.171816, lng:  -75.427695}, {lat: 6.171992, lng:  -75.427804},
            {lat: 6.171990, lng:  -75.427803}, {lat: 6.172152, lng:  -75.427955},
            {lat: 6.172315, lng:  -75.428204}, {lat: 6.172385, lng:  -75.428398},

            {lat: 6.172448, lng:  -75.428457}, {lat: 6.172729, lng:  -75.428390},
            {lat: 6.172669, lng:  -75.428148}, {lat: 6.172456, lng:  -75.427769},
            {lat: 6.172175, lng:  -75.427505}, {lat: 6.171876, lng:  -75.427347},
            {lat: 6.171628, lng:  -75.427272}, {lat: 6.171277, lng:  -75.427252},
            {lat: 6.171005, lng:  -75.427303}, {lat: 6.170721, lng:  -75.427413},
            {lat: 6.170614, lng:  -75.427475}, {lat: 6.170511, lng:  -75.427551},
            {lat: 6.170417, lng:  -75.427630}, {lat: 6.170315, lng:  -75.427737},
            {lat: 6.170234, lng:  -75.427844}, {lat: 6.170105, lng:  -75.428073},
        ];

        // Construct the polygon.
        var airportpolygon = new google.maps.Polygon({
          paths: airportCoords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 3,
          fillColor: '#FF0000',
          fillOpacity: 0.35
        });
        airportpolygon.setMap(map);


        airportpolygon.addListener('click', showArrays);

        infoWindow = new google.maps.InfoWindow;
      }

      function showArrays(event) {

        var vertices = this.getPath();

        var contentString = '<b>airport polygon</b><br>' +
            'Clicked location: <br>' + event.latLng.lat() + ',' + event.latLng.lng() +
            '<br>';

        // Iterate over the vertices.
        for (var i =0; i < vertices.getLength(); i++) {
          var xy = vertices.getAt(i);
          contentString += '<br>' + 'Coordinate ' + i + ':<br>' + xy.lat() + ',' +
              xy.lng();
        }

        infoWindow.setContent(contentString);
        infoWindow.setPosition(event.latLng);

        infoWindow.open(map);
      }


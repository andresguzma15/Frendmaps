 


 var map;
      var infoWindow;

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 19,
          center: {lat: 6.170865, lng:  -75.427611},
          mapTypeId: 'terrain'
        });

        // Define the LatLng coordinates for the polygon.
        var zone1 = [
              {lat: 6.170037, lng:  -75.428365},
              {lat: 6.170040, lng:  -75.428277},
              {lat: 6.170131, lng:  -75.428271},
              {lat: 6.170198, lng:  -75.428298},
              {lat: 6.170180, lng:  -75.428397},
            ];

        var zone2 = [
              {lat: 6.170040, lng:  -75.428277},
              {lat: 6.170134, lng:  -75.428029},
              {lat: 6.170200, lng:  -75.428123},
              {lat: 6.170125, lng:  -75.428170},
              {lat: 6.170040, lng:  -75.428277},
            ];

        var zone3 = [
              {lat: 6.170134, lng:  -75.428029},
              {lat: 6.170285, lng:  -75.427799},
              {lat: 6.170250, lng:  -75.427944},
              {lat: 6.170206, lng:  -75.428014},
              {lat: 6.170134, lng:  -75.428029},
            ];

        var zone4 = [
              {lat: 6.170285, lng:  -75.427799},
              {lat: 6.170473, lng:  -75.427598},
              {lat: 6.170399, lng:  -75.427804},
              {lat: 6.170285, lng:  -75.427799},
            ];


        var zone5 = [
              {lat: 6.170473, lng:  -75.427598},
              {lat: 6.170707, lng:  -75.427433},
              {lat: 6.170725, lng:  -75.427501},
              {lat: 6.170618, lng:  -75.427528},
              {lat: 6.170533, lng:  -75.427614},
              {lat: 6.170473, lng:  -75.427598},
            ];

        var zone6 = [
              {lat: 6.170707, lng:  -75.427433},
              {lat: 6.170981, lng:  -75.427315},
              {lat: 6.171067, lng:  -75.427396},
              {lat: 6.170966, lng:  -75.427360},
              {lat: 6.170841, lng:  -75.427422},
              {lat: 6.170707, lng:  -75.427433},
            ];

        var zone7 = [
              {lat: 6.170981, lng:  -75.427315},
              {lat: 6.171251, lng:  -75.427264},
              {lat: 6.171228, lng:  -75.427317},
              {lat: 6.171231, lng:  -75.427402},
              {lat: 6.171152, lng:  -75.427418},
              {lat: 6.171067, lng:  -75.427396},
              {lat: 6.170981, lng:  -75.427315},
            ];

        var zone8 = [
              {lat: 6.171251, lng:  -75.427264},
              {lat: 6.171570, lng:  -75.427278},
              {lat: 6.171847, lng:  -75.427345},
              {lat: 6.171835, lng:  -75.427386},
              {lat: 6.171695, lng:  -75.427340},
              {lat: 6.171637, lng:  -75.427341},
              {lat: 6.171545, lng:  -75.427306},
              {lat: 6.171389, lng:  -75.427350},
              {lat: 6.171251, lng:  -75.427264},
            ];

        var zone9 = [
              {lat: 6.171847, lng:  -75.427345},
              {lat: 6.172154, lng:  -75.427498},
              {lat: 6.172121, lng:  -75.427622},
              {lat: 6.172087, lng:  -75.427508},
              {lat: 6.171912, lng:  -75.427421},
              {lat: 6.171847, lng:  -75.427345},
            ];

        var zone10 = [
              {lat: 6.172154, lng:  -75.427498},
              {lat: 6.172436, lng:  -75.427765},
              {lat: 6.172370, lng:  -75.427852},
              {lat: 6.172361, lng:  -75.427739},
              {lat: 6.172268, lng:  -75.427652},
              {lat: 6.172226, lng:  -75.427669},
              {lat: 6.172121, lng:  -75.427626},
              {lat: 6.172154, lng:  -75.427498},
            ];

        var zone11 = [
              {lat: 6.172436, lng:  -75.427765},
              {lat: 6.172654, lng:  -75.428132},
              {lat: 6.172685, lng:  -75.428366},
              {lat: 6.172650, lng:  -75.428263},
              {lat: 6.172585, lng:  -75.428074},
              {lat: 6.172557, lng:  -75.428046},
              {lat: 6.172511, lng:  -75.427941},
              {lat: 6.172370, lng:  -75.427852},
              {lat: 6.172436, lng:  -75.427765},
            ];

        var line1 = [
              {lat: 6.172650, lng:  -75.428263},
              {lat: 6.172533, lng:  -75.428295},
              {lat: 6.172503, lng:  -75.428225},
            ];

        var zone12 = [ 
              {lat: 6.172503, lng:  -75.428225},
              {lat: 6.172432, lng:  -75.428057},
              {lat: 6.172368, lng:  -75.428057},
              {lat: 6.172335, lng:  -75.428114},
              {lat: 6.172409, lng:  -75.428270},
              {lat: 6.172503, lng:  -75.428225},

            ];

        var zone13 = [ 
              {lat: 6.172420, lng:  -75.428055},
              {lat: 6.172193, lng:  -75.427795},
              {lat: 6.172366, lng:  -75.428051},
              {lat: 6.172333, lng:  -75.428099},
              {lat: 6.172420, lng:  -75.428055},
             
            ];

        var line2 = [
              {lat: 6.172335, lng:  -75.428114},
              {lat: 6.172308, lng:  -75.428026},

            ];







        // Construct the polygon.
        var airportpolygon = new google.maps.Polygon({
          paths: [zone1, zone2,
            zone3,zone4, zone5,
            zone6, zone7, zone8,
            zone9, zone10, zone11,
            zone12,],
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35
        });

        var flightPath = new google.maps.Polyline({
          path: line1,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        flightPath.setMap(map);
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


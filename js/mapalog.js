var ZonaAeropuerto = function(descripcion, nombre) {
  this.descripcion = descripcion;
  this.nombre =  nombre;
};

dataZonas = [
  new ZonaAeropuerto(
    'On this zone you can find places like: <br>'+
    '<ul>'+
    '<li>Juan Valdez'+
    '<li>Cueros velez'+
    '<li>Gate 1'+
    '</ul>',
    'zone 1'
  ),
  new ZonaAeropuerto(
    'On this zone you can find places like: <br>'+
    '<ul>'+
    '<li>Waiting zone'+
    '<li>libreria internacional el viajero'+
    '<li>kamilas accesorios'+
    '<li>Gate 2'+
    '</ul>',
    'Boarding zone'
  ),
   new ZonaAeropuerto(
    'On this zone you can find places like: <br>'+
    '<ul>'+
    '<li>Waiting zone'+
    '<li>Gate 3'+
    '</ul>',
    'Boarding zone'
  ),
   new ZonaAeropuerto(
    'On this zone you can find places like: <br>'+
    '<ul>'+
    '<li>Waiting zone'+
    '<li>Gate 4'+
    '</ul>',
    'Boarding zone'
  ),

   new ZonaAeropuerto(
    'On this zone you can find places like: <br>'+
    '<ul>'+
    '<li>Waiting zone'+
    '<li>Black coffe'+
    '<li>Doger'+
    '<li>Naturally fast'+
    '<li>bathrooms access'+
    '<li>Gate 5'+
    '</ul>',
    'Boarding zone'
  ),

   new ZonaAeropuerto(
    'On this zone you can find places like: <br>'+
    '<ul>'+
    '<li>Bistro'+
    '<li>J & C delicias'+
    '<li>Gate '+
    '</ul>',
    'Boarding zone'
  ),
]


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
              {lat: 6.17238, lng:  -75.42804},
              {lat: 6.17232, lng:  -75.42808},
              {lat: 6.17229, lng:  -75.42807},
              {lat: 6.17228, lng:  -75.42805},
              {lat: 6.17226, lng:  -75.42805},
              {lat: 6.17222, lng:  -75.42795},
              {lat: 6.17213, lng:  -75.42785},
              {lat: 6.17219, lng:  -75.42777},
              {lat: 6.17227, lng:  -75.42787},
              {lat: 6.17233, lng:  -75.42793},
              {lat: 6.17236, lng:  -75.42799},
              {lat: 6.17238, lng:  -75.42802},
              {lat: 6.17238, lng:  -75.42804},
            ];


        var zone14 = [ 
              {lat: 6.17212, lng:  -75.42781},
              {lat: 6.17197, lng:  -75.42775},
              {lat: 6.17174, lng:  -75.42762},
              {lat: 6.17188, lng:  -75.42753},
              {lat: 6.17196, lng:  -75.42757},
              {lat: 6.17201, lng:  -75.42761},
              {lat: 6.17204, lng:  -75.42766},
              {lat: 6.17211, lng:  -75.42772},
              {lat: 6.17212, lng:  -75.42781},

             
             
            ];


        var zone15 = [ 
              {lat: 6.17174, lng:  -75.42762},
              {lat: 6.17173, lng:  -75.42747},
              {lat: 6.17162, lng:  -75.42745},
              {lat: 6.17159, lng:  -75.42748},
              {lat: 6.17147, lng:  -75.42745},
              {lat: 6.17135, lng:  -75.42744},
              {lat: 6.17101, lng:  -75.4275},
              {lat: 6.17099, lng:  -75.42764},
              {lat: 6.1712,  lng:   -75.42758},
              {lat: 6.1714,  lng:  -75.42756},
              {lat: 6.17158, lng: -75.42758},
              {lat: 6.17173, lng: -75.42762},  
            ];



        var zone16 = [ 
              {lat: 6.17099, lng:  -75.42764},
              {lat: 6.17097, lng:  -75.42755},
              {lat: 6.17091, lng:  -75.42752},
              {lat: 6.17075, lng:  -75.42759},
              {lat: 6.17061, lng:  -75.4277},
              {lat: 6.17051, lng:  -75.42781},
              {lat: 6.17036, lng:  -75.428},
              {lat: 6.17025, lng:  -75.42821},
              {lat: 6.17031, lng:  -75.42825},
              {lat: 6.17036, lng:  -75.42826},
              {lat: 6.1704,  lng:  -75.42824},
              {lat: 6.17043, lng:  -75.42814},
              {lat: 6.17048, lng:  -75.42804},
              {lat: 6.17065, lng:  -75.42784},
              {lat: 6.17079, lng:  -75.42774},
              {lat: 6.17099, lng:  -75.42764},

             
             
            ];


        var zone17 = [ 
              {lat: 6.1705, lng:  -75.42765},
              {lat: 6.17058, lng: -75.42774},
              {lat: 6.17065, lng:  -75.42766},
              {lat: 6.17059, lng:  -75.42758},
              {lat: 6.1705, lng:  -75.42765},

             
             
            ];



        var zone18 = [ 
              {lat: 6.17158, lng:  -75.42733},
              {lat: 6.17156, lng:  -75.42745},
              {lat: 6.17168, lng:  -75.42746},
              {lat: 6.1717,  lng:  -75.42735},
              {lat: 6.17158, lng:  -75.42733},

             
             
            ];


        var zone19 = [ 
              {lat: 6.17243, lng:  -75.42802},
              {lat: 6.17249, lng:  -75.42814},
              {lat: 6.17258, lng:  -75.42809},
              {lat: 6.17251,  lng:  -75.42797},
              {lat: 6.17243, lng:  -75.42802},

             
             
            ];




        // Zona de comidas
        var food_zone = new google.maps.Polygon({
          paths: [zone1],
          strokeColor: '#0D47A1',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#2196F3',
          fillOpacity: 0.35
        });

        food_zone.setMap(map);
        food_zone.addListener('click', function(event){
          showArrays(event, this.getPath(),  0)
        });


        var abording_zone = new google.maps.Polygon({
          paths: [zone2],
          strokeColor: '#0D47A1',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#2196F3',
          fillOpacity: 0.35
        });

        abording_zone.setMap(map);
        abording_zone.addListener('click', function(event){
          showArrays(event, this.getPath(),  1);
        });



       var abording_zone2 = new google.maps.Polygon({
          paths: [zone3],
          strokeColor: '#0D47A1',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#2196F3',
          fillOpacity: 0.35
        });

        abording_zone2.setMap(map);
        abording_zone2.addListener('click', function(event){
          showArrays(event, this.getPath(),  2)
        });


        var abording_zone3 = new google.maps.Polygon({
          paths: [zone4],
          strokeColor: '#0D47A1',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#2196F3',
          fillOpacity: 0.35
        });

        abording_zone3.setMap(map);
        abording_zone3.addListener('click', function(event){
          showArrays(event, this.getPath(),  3)
        });

        var abording_zone4 = new google.maps.Polygon({
          paths: [zone5],
          strokeColor: '#0D47A1',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#2196F3',
          fillOpacity: 0.35
        });

        abording_zone4.setMap(map);
        abording_zone4.addListener('click', function(event){
          showArrays(event, this.getPath(),  4)
        });

        var abording_zone5 = new google.maps.Polygon({
          paths: [zone6],
          strokeColor: '#0D47A1',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#2196F3',
          fillOpacity: 0.35
        });

        abording_zone5.setMap(map);
        abording_zone5.addListener('click', function(event){
          showArrays(event, this.getPath(),  5)
        });


        var abording_zone6 = new google.maps.Polygon({
          paths: [zone7],
          strokeColor: '#0D47A1',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#2196F3',
          fillOpacity: 0.35
        });

        abording_zone6.setMap(map);
        abording_zone6.addListener('click', function(event){
          showArrays(event, this.getPath(),  6)
        });


        var abording_zone7 = new google.maps.Polygon({
          paths: [zone8],
          strokeColor: '#0D47A1',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#2196F3',
          fillOpacity: 0.35
        });

        abording_zone7.setMap(map);
        abording_zone7.addListener('click', function(event){
          showArrays(event, this.getPath(),  7)
        });




        var abording_zone8 = new google.maps.Polygon({
          paths: [zone9],
          strokeColor: '#0D47A1',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#2196F3',
          fillOpacity: 0.35
        });

        abording_zone8.setMap(map);
        abording_zone8.addListener('click', function(event){
          showArrays(event, this.getPath(),  8)
        });


        var abording_zone9 = new google.maps.Polygon({
          paths: [zone10],
          strokeColor: '#0D47A1',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#2196F3',
          fillOpacity: 0.35
        });

        abording_zone9.setMap(map);
        abording_zone9.addListener('click', function(event){
          showArrays(event, this.getPath(),  9)
        });



        var abording_zone10 = new google.maps.Polygon({
          paths: [zone11],
          strokeColor: '#0D47A1',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#2196F3',
          fillOpacity: 0.35
        });

        abording_zone10.setMap(map);
        abording_zone10.addListener('click', function(event){
          showArrays(event, this.getPath(),  10)
        });


        var international_fly = new google.maps.Polygon({
          paths: [zone12],
          strokeColor: '#E91E63',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#880E4F',
          fillOpacity: 0.35
        });

        international_fly.setMap(map);
        international_fly.addListener('click', function(event){
          showArrays(event, this.getPath(),  11)
        });

        var checkin_zone = new google.maps.Polygon({
          paths: [zone13],
          strokeColor: '#FFEB3B',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#F57F17',
          fillOpacity: 0.35
        });

        checkin_zone.setMap(map);
        checkin_zone.addListener('click', function(event){
          showArrays(event, this.getPath(),  12)
        });



        var register_zone = new google.maps.Polygon({
          paths: [zone14],
          strokeColor: '#FF9800',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#E65100',
          fillOpacity: 0.35
        });

        register_zone.setMap(map);
        register_zone.addListener('click', function(event){
          showArrays(event, this.getPath(),  13)
        });


        var register_zone2 = new google.maps.Polygon({
          paths: [zone15],
          strokeColor: '#FF9800',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#E65100',
          fillOpacity: 0.35
        });

        register_zone2.setMap(map);
        register_zone2.addListener('click', function(event){
          showArrays(event, this.getPath(),  14)
        });



        var bathroom_zone = new google.maps.Polygon({
          paths: [zone17],
          strokeColor: '#673AB7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#311B92',
          fillOpacity: 0.35
        });

        bathroom_zone.setMap(map);
        bathroom_zone.addListener('click', function(event){
          showArrays(event, this.getPath(),  15)
        });




        var bathroom_zone2 = new google.maps.Polygon({
          paths: [zone18],
          strokeColor: '#673AB7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#311B92',
          fillOpacity: 0.35
        });

        bathroom_zone2.setMap(map);
        bathroom_zone2.addListener('click', function(event){
          showArrays(event, this.getPath(),  16)
        });


        var bathroom_zone3 = new google.maps.Polygon({
          paths: [zone19],
          strokeColor: '#673AB7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#311B92',
          fillOpacity: 0.35
        });

        bathroom_zone3.setMap(map);
        bathroom_zone3.addListener('click', function(event){
          showArrays(event, this.getPath(),  19)
        });


        // Zona de comidas
        var shopping_hall = new google.maps.Polygon({
          paths: [zone16],
          strokeColor: '#1B5E20',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#4CAF50',
          fillOpacity: 0.35
        });

        shopping_hall.setMap(map);
        shopping_hall.addListener('click', function(event){
          showArrays(event, this.getPath(),  20)
        });

        var flightPath = new google.maps.Polyline({
          path: line1,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        flightPath.setMap(map);
        

        infoWindow = new google.maps.InfoWindow;
      }

      function showArrays(event, vertices,  zoneId) {
        var contentString = '<div id="popup_data"><h1>' + dataZonas[zoneId - 0].nombre + '<br><p>' + dataZonas[zoneId - 0].descripcion + '</p></div>';

        infoWindow.setContent(contentString);
        infoWindow.setPosition(event.latLng);

        infoWindow.open(map);
      }

/**
#popup_data {}
#popup_data h1 {}
#popup_data p{}
**/
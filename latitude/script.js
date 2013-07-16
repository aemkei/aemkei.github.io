google.maps.visualRefresh = true;


var app = {

  baseUrl: "http://{user}.cartodb.com/api/v2/viz/{id}/viz.json",
  pointsId: ["aemkei", "3c32d908-eb0d-11e2-8fc0-09619d7480f3"],
  linesId: ["aemkei2", "5dbfb502-edf4-11e2-b397-05b0583ab863"],

  styles: [
    {
      "stylers": [
        { "invert_lightness": true },
        { "saturation": -100 }
      ]
    },{
      "featureType": "landscape",
      "stylers": [
        { "visibility": "on" },
        { "color": "#000000" }
      ]
    },{
      "featureType": "poi",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
      "featureType": "road",
      "stylers": [
        { "saturation": -100 },
        { "visibility": "simplified" },
        { "weight": 1.1 },
        { "lightness": -63 }
      ]
    },{
      "featureType": "administrative.province",
      "elementType": "geometry",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
      "elementType": "labels",
      "stylers": [
        { "lightness": -70 }
      ]
    },{
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
      "featureType": "administrative",

      "elementType": "geometry",
      "stylers": [
        { "lightness": -40 }
      ]
    },{
      "featureType": "water"  }
  ],

  init: function(){
    this.map = new google.maps.Map(document.getElementById('map'),  {
      backgroundColor: "#101010",
      zoom: 11,
      styles: this.styles,
      center: new google.maps.LatLng(53.56116814208211, 9.95835542678833),
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    this.addPoints();
  },

  getUrl: function(data){
    return this.baseUrl
      .replace("{user}", data[0])
      .replace("{id}", data[1]);
  },

  addPoints: function(){
    cartodb
      .createLayer(this.map, this.getUrl(this.pointsId))
      .addTo(this.map)
      .done(this.loadLines.bind(this));
  },

  loadLines: function(){
    cartodb
      .createLayer(this.map, this.getUrl(this.linesId))
      .done(this.drawLines.bind(this));
  },

  drawLines: function(layer){
    var interval = setInterval(function(){
      if (!layer.tilejson){ return; }
      clearInterval(interval);
      var imageMapType = new google.maps.ImageMapType({
        tileSize: new google.maps.Size(256, 256),
        getTileUrl: function(coord, zoom) {
          if (!layer.tilejson){ return false; }

          var host = (coord.x + coord.y + zoom) % 4;

          return layer.tilejson.tiles[host]
            .replace("{x}", coord.x)
            .replace("{y}", coord.y)
            .replace("{z}", zoom);
        }
      });

      this.map.overlayMapTypes.insertAt(0, imageMapType);
    }.bind(this), 100);
  }
};

app.init();
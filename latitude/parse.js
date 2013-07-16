var fs = require('fs'),
  input = 'latitude.json',
  outputPoints = "latitude-points.geojson",
  outputLines = "latitude-lines.geojson",
  last;

function computeDistance(a,b,c,d,e,z){with(Math)return z=PI/360,e*atan2(sqrt(z=pow(sin((c-a)*z),2)+cos(a*z*2)*cos(c*z*2)*pow(sin((d-b)*z),2)),sqrt(1-z))}

function computeSpeed(distance, timeMS){
  return (distance/1000) / (timeMS/1000/60/60);
}

var buckets = {
  "100": 1,
  "500": 2,
  "1000": 3,
  "2000": 4,
  "10000": 5,
  "100000": 6
};

function getBucket(distance){

  for (var all in buckets){
    if (distance < (1*all)){
      console.log(buckets[all], distance);
      return 1*buckets[all];
    }
  }

  return 7;
}

fs.readFile(input, 'utf8', function(err, data) {
  if (err){ console.error(err); return; }

  var obj = JSON.parse(data),
    items = obj.data.items,
    time2012 = new Date("2012"),
    points = { type: "FeatureCollection", features: [] },
    lines = { type: "FeatureCollection", features: [] },
    line = [],
    oldBucket;

  items.forEach(function(item){

    var distance = 0,
      date = new Date(1*item.timestampMs),
      coordinates = [item.longitude, item.latitude],
      time = ~~(item.timestampMs/1000/60/60),
      speed = 0;

    if (!item.accuracy){ return; }
    if (item.accuracy > 500){ return; }

    if (
      item.latitude > 32.3 &&
      item.latitude < 32.5 &&
      item.longitude > -99.1 &&
      item.longitude < -98.9
    ){ return; }

    if (last){
      distance = computeDistance(
        last.latitude, last.longitude,
        item.latitude, item.longitude,
        2 * 6378137
      );

      if (distance < 10){ return; }
      speed = computeSpeed(distance, last.timestampMs-item.timestampMs);

      if (speed > 250){ return; }

    }


    points.features.push({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: coordinates
      },
      properties: {
        accuracy: item.accuracy,
        time: time
      }
    });


    var newBucket = getBucket(distance);

    if (newBucket != oldBucket){

      var old = line[line.length-1];

      if (newBucket > oldBucket){
        line = [old];
      } else {
        line.push(old);
        line = [];
      }

      oldBucket = newBucket;

      lines.features.push({
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: line
        },
        properties: {
          time: time,
          distance: newBucket
        }
      });
    }

    line.push(coordinates);

    last = item;
  });

  fs.writeFile(outputPoints, JSON.stringify(points));
  fs.writeFile(outputLines, JSON.stringify(lines));

});

# Tutorial : OpenLayers plugin

### Create the map

Here is bootstrap example from OpenLayers:

```js
<!doctype html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.0.1/css/ol.css" type="text/css">
    <style>
        html,
        body,
        #map {
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
        #map {
            position: absolute;
            z-index: 1;
            top: 0;
            bottom: 0;
        }
    </style>
    <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.0.1/build/ol.js"></script>
    <title>Opencage Data with OpenLayers</title>
  </head>
  <body>
    <div id="map" class="map"></div>
    <script type="text/javascript">
      var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([7.7491, 46.0207]),
          zoom: 4
        })
      });
    </script>
  </body>
</html>
```

### Add the geocoding widget to the OL map

To use the OL plugin, load the plugin's CSS and JavaScript files from [jsDelivr](https://www.jsdelivr.com/package/npm/ol-geocoder):

```js
<link href="https://cdn.jsdelivr.net/npm/ol-geocoder@latest/dist/ol-geocoder.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/ol-geocoder"></script>
```

Instantiate the geocoder with some options (ie. OpenCage API Key:

```js
var geocoder = new Geocoder('nominatim', {
  provider: 'opencage', // <----- PROVIDER is opencage
  lang: 'en',
  key: 'YOUR-OPENCAGE-API-KEY',
  placeholder: 'Search with OpenCage for ...',
  limit: 5,
  debug: false,
  autoComplete: false,
  keepOpen: true,
});
```

and add the Control to the map

```js
map.addControl(geocoder);
```

### Add a nice popup plugin

```js
<link rel="stylesheet" href="https://unpkg.com/ol-popup@4.0.0/src/ol-popup.css" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/ol-popup@4.0.0/dist/ol-popup.js"></script>
```

### Display chosen address

Do something when an address is chosen:

```js
geocoder.on('addresschosen', function(evt) {
  console.info(evt);
  popup.show(evt.coordinate, evt.address.formatted);
});
```

## Resources

- OpenCage Data Geocoder API : https://opencagedata.com/

- OpenLayers : https://openlayers.org/

- OpenLayers Control Geocoder : https://github.com/jonataswalker/ol-geocoder

- OpenLayers Popup : https://github.com/walkermatt/ol-popup/

## Licensing

Licensed under the MIT License

A copy of the license is available in the repository's [LICENSE](LICENSE) file.

// creates the map
var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([7.7491, 46.0207]),
    zoom: 4,
  }),
});

// creates a popup
var popup = new ol.Overlay.Popup();
map.addOverlay(popup);

// creates the Geocoder
var geocoder = new Geocoder('nominatim', {
  provider: 'opencage',
  lang: 'en',
  key: 'YOUR-OPENCAGE-API-KEY',
  placeholder: 'Search with OpenCage for ...',
  limit: 5,
  debug: false,
  autoComplete: false,
  keepOpen: true,
});
map.addControl(geocoder);

// Listen for a chosen address
geocoder.on('addresschosen', function(evt) {
  console.info(evt);
  popup.show(evt.coordinate, evt.address.formatted);
});

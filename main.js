var LS_OPENCAGE_API_KEY = 'opencage.key.geocoding';
if (!localStorage.getItem(LS_OPENCAGE_API_KEY)) {
  localStorage.setItem(
    LS_OPENCAGE_API_KEY,
    prompt('What is your OpenCage Data API key?')
  );
}
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
  key: localStorage.getItem(LS_OPENCAGE_API_KEY), // 'YOUR-OPENCAGE-API-KEY',
  placeholder: 'Geocode with OpenCage...',
  limit: 5,
  debug: false,
  autoComplete: false,
  keepOpen: true,
});
map.addControl(geocoder);

// Listen for a chosen address
geocoder.on('addresschosen', function (evt) {
  console.info(evt);
  popup.show(evt.coordinate, evt.address.formatted);
});

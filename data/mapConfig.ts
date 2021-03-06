export const mapStyles = [
  // Main styles taken from Snazzy Maps "Grass is greener. Water is bluer". Added labels for parks/ sport complexes
  {
    stylers: [
      {
        saturation: -100,
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#0099dd",
      },
    ],
  },
  {
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#aadd55",
      },
    ],
  },
  {
    featureType: "poi.park", // Shows labels for public parks/green spaces, where most fountains are located (Place of interest)
    elementType: "labels",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.sports_complex", // Shows labels for sports complexes on map - in many cases municipal complexes may have exterior fountains nearby (Place of interest)
    elementType: "labels",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },

  {
    featureType: "administrative.neighborhood", // Shows neighborhood names on map
    elementType: "labels",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {},
];

export const options = {
  backgroundColor: "#96bff6",
  styles: mapStyles,
  disableDefaultUI: true, // Removes default UI (street view, satelite view etc.)
  zoomControl: true, // Adds zoom control buttons back in after disabling other default UI elements
  minZoom: 11,
  maxZoom: 20,
  noClear: true,
  // gestureHandling: "cooperative"
};

export const boroughs = {
  // List of each borough including, unique ID, center point for map, and twitter handle to pass to backend
  2: {
    borough: "Ahuntsic-Cartierville",
    lat: 45.5447,
    lng: -73.6681,
    id: 2,
    twitterHandle: "@AhuntsicCartier",
  },
  14: {
    borough: "Anjou",
    lng: -73.54974978,
    lat: 45.60825004,
    id: 14,
    twitterHandle: "@MTL_Ville",
  },
  12: {
    borough: "C??te-des-Neiges-Notre-Dame-de-Gr??ce",
    lat: 45.4912,
    lng: -73.6327,
    id: 12,
    twitterHandle: "@CDN_NDG",
  },
  19: {
    borough: "L'??le-Bizard-Sainte-Genevi??ve",
    lng: -73.89995868,
    lat: 45.51647305,
    id: 19,
    twitterHandle: "@MTLibsg",
  },
  3: {
    borough: "Lachine",
    lat: 45.4413,
    lng: -73.6886,
    id: 3,
    twitterHandle: "@Lachine_MTL",
  },
  7: {
    borough: "LaSalle",
    lat: 45.4306,
    lng: -73.6348,
    id: 7,
    twitterHandle: "@MTL_Ville",
  },
  6: {
    borough: "Le Sud-Ouest",
    lat: 45.4661,
    lng: -73.5939,
    id: 6,
    twitterHandle: "@SO_MTL",
  },
  13: {
    borough: "Mercier-Hochelaga-Maisonneuve",
    lat: 45.573,
    lng: -73.5308,
    id: 13,
    twitterHandle: "@MTL_Ville",
  },
  18: {
    borough: "Montr??al-Nord",
    lat: 45.6072,
    lng: -73.6315,
    id: 18,
    twitterHandle: "@MTL_Ville",
  },
  8: {
    borough: "Outremont",
    lat: 45.5143,
    lng: -73.609,
    id: 8,
    twitterHandle: "@MTL_Ville",
  },
  16: {
    borough: "Pierrefonds-Roxboro",
    lng: -73.84578483,
    lat: 45.49282384,
    id: 16,
    twitterHandle: "@pfds_rox",
  },
  9: {
    borough: "Plateau-Mont-Royal",
    lat: 45.5232,
    lng: -73.587,
    id: 9,
    twitterHandle: "@LePMR",
  },
  10: {
    borough: "Rivi??re-des-Prairies-Pointe-aux-Trembles",
    lat: 45.6731,
    lng: -73.5187,
    id: 10,
    twitterHandle: "@MTL_Ville",
  },
  11: {
    borough: "Rosemont-La Petite-Patrie",
    lat: 45.5517,
    lng: -73.5836,
    id: 11,
    twitterHandle: "@Arr_RosemontPP",
  },
  17: {
    borough: "Saint-Laurent",
    lng: -73.72505571,
    lat: 45.50818573,
    id: 17,
    twitterHandle: "@ArrSaintLaurent",
  },
  1: {
    borough: "Saint-L??onard",
    lat: 45.5875,
    lng: -73.597,
    id: 1,
    twitterHandle: "@MTL_Ville",
  },
  5: {
    borough: "Verdun",
    lat: 45.4548,
    lng: -73.5699,
    id: 5,
    twitterHandle: "@Arr_Verdun",
  },
  15: {
    borough: "Ville-Marie",
    lat: 45.5088,
    lng: -73.5553,
    id: 15,
    twitterHandle: "@CentrevilleMTL",
  },
  4: {
    borough: "Villeray-Saint-Michel-Parc-Extension",
    lat: 45.5553,
    lng: -73.6083,
    id: 4,
    twitterHandle: "@MTL_VSP",
  },
};

export const condition = {
  1: {
    FR: "Tr??s bon ??tat",
    EN: "Very Good Condition",
    id: 1,
    rating: "??????????????????????????????",
  },
  2: { FR: "Bon ??tat", EN: "Good Condition", id: 2, rating: "????????????????????????" },
  3: {
    FR: "??tat passable",
    EN: "Passable Condition",
    id: 3,
    rating: "??????????????????",
  },
  4: { FR: "Mauvais ??tat", EN: "Poor Condition", id: 4, rating: "????????????" },
  5: {
    FR: "Tr??s mauvais ??tat",
    EN: "Very Poor Condition",
    id: 5,
    rating: "??????",
  },
  6: { FR: "Enlev??e/D??plac??e", EN: "Removed/Moved", id: 6, rating: "????" },
};

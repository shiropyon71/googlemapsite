'use strict'

const geocoder = new google.maps.Geocoder();

geocoder.geocode({address: "山形市松波4-5-12"}, (results, status) => {
  if (status === 'OK') {
    var center = {
      lat: results[0].geometry.location.lat(),
      lng: results[0].geometry.location.lng()
    };

    console.log("Location is " & center.lat & ","  & center.lng );
  }
})

console.log("test OK!");
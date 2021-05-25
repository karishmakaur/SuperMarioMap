function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 34.66801847847489, lng: 135.43051949804965},
  zoom: 18,
  mapId: '77554aef5e3d5067',
  mapTypeControl: false,
  fullscreenControl: false,
  streetViewControl: false  
});

const markers = [
  [
    "Yoshi\'s House",
    34.66554770586654,
    135.43232194249637,
     "yoshi_house.svg",
    38,
    31
    ]
  ];

  for(let i=0, i<markers.length; i++){
    const currMarker = marker[i];
    
 const marker = new google.maps.Marker({
    position: { lat: currMarker[1], lng: currMarker[2]},
    map,
    title: currMarker[0],
   icon: {
     url: currMarker[3],
     sacledsize: new google.maps.Size(currMarker[4], currMarker[5])
   },
   animation: google.maps.Animation.DROP
   });
   
  const infowindow = new google.maps.InfoWindow({
    content: currMarker[0],
  });
  
   marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
  
}

// 34.66801847847489, 135.43051949804965
// 34.66554770586654, 135.43232194249637

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 34.66801847847489, lng: 135.43051949804965},
  zoom: 18,
  mapId: '77554aef5e3d5067',
  mapTypeControl: false,
  fullscreenControl: false,
  streetViewControl: false  
});

 const marker = new google.maps.Marker({
    position: { lat: 34.66554770586654, lng: 135.43232194249637 },
    map,
    title: "Yoshi\s House",
   icon: {
     url: "yoshi_house.svg",
     sacledsize: new google.maps.Size(38, 31)
   },
   animation: google.maps.Animation.DROP
   });
   
  const infowindow = new google.maps.InfoWindow({
    content: "Yoshi\s House",
  });
  
   marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
  
}

// 34.66801847847489, 135.43051949804965
// 34.66554770586654, 135.43232194249637

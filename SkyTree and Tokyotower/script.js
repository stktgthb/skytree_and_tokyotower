function initMap() {
  const tokyotower = { lat: 35.65875, lng: 139.74537 };
  const skytree = { lat: 35.71015, lng: 139.81065 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: tokyotower,
  });
  const marker = new google.maps.Marker({
    position: tokyotower,
    map: map,
  });
  const marker2 = new google.maps.Marker({
    position: skytree,
    map: map,
  });
  const infoWindow = new google.maps.InfoWindow({ 
        content: '<div class="sample">Tokyo Tower</div>' 
  });
  const infoWindow2 = new google.maps.InfoWindow({ 
        content: '<div class="sample">Tokyo Skytree</div>' 
  });
  marker.addListener('click', function() { 
     infoWindow.open(map, marker); 
    });
  marker2.addListener('click', function() { 
     infoWindow2.open(map, marker2); 
    });
}
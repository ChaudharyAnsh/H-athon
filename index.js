function updateMap(x) {
  console.log("Updating map with realtime data");
  fetch("newjson.json")
    .then((response) => response.json())
    .then((rsp) => {
      // console.log(rsp.data)
      rsp.data.forEach((element) => {
        let latitude = element.latitude;
        let longitude = element.longitude;

        let bud = element.pricee;
        
        
        if (bud <  x) {
          color = "rgb(20, 200, 0)";
        } else if (bud < 1.5 * x) {
          color = "rgb(255, 255, 0)";
        } else {
          color = `rgb(255, 0, 0)`;
        }

        // Mark on the map
        new mapboxgl.Marker({
          draggable: false,
          color: color,
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}
function take(){
        x = document.querySelector('#price').value;
        y = document.querySelector('#days').value;
        updateMap(x/y);
}
updateMap(500);
map.on("load", () => {
  map.addSource("places", {
    // This GeoJSON contains features that include an "icon"
    // property. The value of the "icon" property corresponds
    // to an image in the Mapbox Streets style's sprite.
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
            icon: "theatre-15",
            city: "NEW YORK",
            top1: "FIRE ISLAND",
            top2: "THE FINGER LAKES",
            top3: "NIAGARA FALLS",
            image: '<img src="images/newYork.jpg" width="200" height="200">',
          },
          geometry: {
            type: "Point",
            coordinates: [-74.005941, 40.7127837],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong>Mad Men Season Five Finale Watch Party</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a <a href="http://madmens5finale.eventbrite.com/" target="_blank" title="Opens in a new window">Mad Men Season Five Finale Watch Party</a>, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>',
            icon: "theatre-15",
            city: "COMPTON",
            top1: "CENTENARY TOWER",
            top2: "BLUE LAKE",
            top3: "DOMINGUEZ RANCHO ADOBE MUSEUM",
            image: '<img src="images/Compton.jpg" width="200" height="200">',
          },
          geometry: {
            type: "Point",
            coordinates: [-118.2436849, 34.0522342],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<p> <a href="http://tallulaeatbar.ticketleap.com/2012beachblanket/" target="_blank" title="Opens in a new window">Big Backyard Beach Bash and Wine Fest</a> on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.grill hot dogs.</p>',
            icon: "bar-15",
            city: "CHICAGO",
            top1: "ART INSTITUTE OF CHICAGO",
            top2: "RIVERWALK",
            top3: "MILLENIUM PARK",
            image: '<img src="images/chicago.jpg" width="200" height="200">',
          },
          geometry: {
            type: "Point",
            coordinates: [-87.6297982, 41.8781136],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong>Ballston Arts & Crafts Market</strong><p>The <a href="http://ballstonarts-craftsmarket.blogspot.com/" target="_blank" title="Opens in a new window">Ballston Arts & Crafts Market</a> sets up shop next to the Ballston metro this Saturday for the first of five dates this summer. Nearly 35 artists and crafters will be on hand selling their wares. 10:00-4:00 p.m.</p>',
            icon: "art-gallery-15",
            city: "CALIFORNIA",
            top1: "SEQUOIA NATIONAL PARK",
            top2: "LAKE TAHOE",
            top3: "KINGS CANYON NATIONAL PARK",
            image: '<img src="images/california.jpg" width="200" height="200">',
          },
          geometry: {
            type: "Point",
            coordinates: [-95.3698028, 29.7604267],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong>Seersucker Bike Ride and Social</strong><p>Feeling dandy? Get fancy, grab your bike, and take part in this year\'s <a href="http://dandiesandquaintrelles.com/2012/04/the-seersucker-social-is-set-for-june-9th-save-the-date-and-start-planning-your-look/" target="_blank" title="Opens in a new window">Seersucker Social</a> bike ride from Dandies and Quaintrelles. After the ride enjoy a lawn party at Hillwood with jazz, cocktails, paper hat-making, and more. 11:00-7:00 p.m.</p>',
            icon: "bicycle-15",
            city: "LOS ANGELES",
            top1: "GRIFFITH OBSERVATORY",
            top2: "THE MUSEUM OF JURASSIC TECHNOLOGY",
            top3: "VENICE BEACH",
            image: '<img src="images/losAngeles.png" width="200" height="200">',
          },
          geometry: {
            type: "Point",
            coordinates: [-75.165221, 39.9525839],
          },
        },
      ],
    },
  });
  // Add a layer showing the places.
  map.addLayer({
    id: "places",
    type: "symbol",
    source: "places",
    layout: {
      "icon-image": "{icon}",
      "icon-allow-overlap": true,
    },
  });

  map.on("click", "places", (e) => {
    // Copy coordinates array.
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;
    const image = e.features[0].properties.image;

    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    new mapboxgl.Popup().setLngLat(coordinates).setHTML(image).addTo(map);

    map.getCanvas().style.cursor = "pointer";
    document.querySelector("h2").innerHTML = e.features[0].properties.city;
    document.querySelector(".text").innerHTML =
      e.features[0].properties.description;
    document.querySelector("#li1").innerHTML = e.features[0].properties.top3;
    document.querySelector("#li2").innerHTML = e.features[0].properties.top2;
    document.querySelector("#li3").innerHTML = e.features[0].properties.top1;
    document.getElementById("link").href = e.features[0].properties.link;
    document.querySelector(".right").style.visibility = "visible";
    document.querySelector(".link").innerHTML = "View More";
    document.querySelector("#image").innerHTML = e.features[0].properties.image;
  });

  map.on("mouseleave", "places", (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;

    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
  });

  map.on("mouseenter", "places", (e) => {});
  map.on("mouseleave", "places", () => {
    map.getCanvas().style.cursor = "";
  });
});

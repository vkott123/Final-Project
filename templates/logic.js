// Create a map object
var myMap = L.map("map", {
  center: [34.0522, -118.2437],
  zoom: 10
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

// Define a markerSize function that will give each city a different radius based on its price
function priceColor(price) {
  if (price <= 250) {
    return "purple"
  }
  else if(price > 250 && price <= 500) {
    return "blue"
  }
  else if(price > 500 && price <= 750) {
    return "yellow"
  }

  else if(price > 750 && price <= 1000) {
    return "green"
  }

  else if(price > 1000 && price <= 1250) {
    return "pink"
  }

  else if(price > 1250 && price <= 1500) {
    return "brown"
  }

  else if(price > 1500 && price <= 1750) {
    return "black"
  }

  else if(price > 1750 && price <= 2000) {
    return "white"
  }

  else if(price > 2000 && price <= 2250) {
    return "orange"
  }

  else {
    return "magenta"
  }
  
}


// Loop through the listings array and create one marker for each city object
for (var i = 0; i < listings.length; i++) {
  L.circle(listings[i].location, {
    fillOpacity: 0.75,
    color: priceColor(listings[i].price),
    fillColor: priceColor(listings[i].price),
    // Setting our circle's radius equal to the output of our markerSize function
    // This will make our marker's size proportionate to its price
    radius: 10,
  }).bindPopup("<h1>" + listings[i].id + "</h1> <hr> <h3>price: " + listings[i].price + "</h3>").addTo(myMap);
}

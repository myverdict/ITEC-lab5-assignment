// Before creating a map, set the where (latitude & longitude) & the zoom level
/* Where in the world do you want to show this map at? */
let usCenterCoordinates = [ 39.50, -98.35 ]         // Array of [latitude, longitude]

// 1 = whole world, 10 = large city, 20 = city blocks
let zoomLevel = 4

// Provide your accessToken
L.mapbox.accessToken = 'pk.eyJ1IjoibXl2ZXJkaWN0IiwiYSI6ImNrZmp1cGptMjA5ZXczNG9sZGxqc2FmYXMifQ.fnvKp6XO7EfvfbNZkFxcQA'

// Create a map in the div #college-map (Notice there is no # in front of the college-map id)
let map = L.mapbox.map('bridge-map', 'mapbox.streets').setView(usCenterCoordinates, zoomLevel)

// Add a layer to the map
map.addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'))

// Add a circle to the map
let usCircle = L.circle(usCenterCoordinates, {
    color: "green",
    radius: 1000000,                                            // In meters == 2700 kilometers
    fillOpacity: 0.2
}).bindPopup("United States of America").addTo(map)

let bridges = [
    { "name": "Verrazano-Narrows Bridge", "location": "New York, NY", "span": 1298.4, "coordinates": [ 40.6066, -74.0447 ] },
    { "name": "Golden Gate Bridge", "location": "San Francisco and Marin, CA", "span": 1280.2, "coordinates": [ 37.8199, -122.4783 ] },
    { "name": "Mackinac Bridge", "location": "Mackinaw and St Ignace, MI", "span": 1158.0, "coordinates": [ 45.8174, -84.7278 ] },
    { "name": "George Washington Bridge", "location": "New York, NY and New Jersey, NJ", "span": 1067.0, "coordinates": [ 40.8517, -73.9527 ] },
    { "name": "Tacoma Narrows Bridge", "location": "Tacoma and Kitsap, WA", "span": 853.44, "coordinates": [ 47.2690, -122.5517 ] }
]

// Create a bridge icon
let bridgeIcon = L.icon({
    iconUrl: "bridge.png",
    iconSize:     [50, 50],         // size of the icon
    iconAnchor:   [25, 50],         // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -50]          // point from which the popup should open relative to the iconAnchor
})

// Loop: Add popups to each marker first and then create a marker for each bridge on the map
bridges.forEach(function(eachBridge) {
    // Create a string template for the popup
    let popupText = `<b>${eachBridge.name}<br>${eachBridge.span} meters</b>`

    // Create a generic marker along with a bridge icon
    let marker = L.marker(eachBridge.coordinates, {icon: bridgeIcon})
        .bindPopup(popupText)
        .addTo(map)
})



/*
// Loop: Add popups to each marker first and then create a marker for each bridge on the map
// Without the bridgeIcon
bridges.forEach(function(eachBridge) {
    // Create a string template for the popup
    let popupText = `<b>${eachBridge.name}<br>${eachBridge.span} meters</b>`

    // Create a generic marker
    let marker = L.marker(eachBridge.coordinates)
        .bindPopup(popupText)
        .addTo(map)
})
*/


/*
// Example of doing one bridge at a time

// Coordinates for a bridge
let verrazanoNarrowsBridge = [ 40.6066, -74.0447 ]             // Array of [latitude, longitude]

// Add a popup to a bridge marker first and then create a marker for the bridge on the map
let verrazanoMarker = L.marker(verrazanoNarrowsBridge)
    .bindPopup("<b>Verrazano-Narrows Bridge<br>1298.4 meters</b>")
    .addTo(map)
*/
// Find the canvas id reference and store in a variable
let canvas = document.querySelector("#bridge-chart");

// Get the canvas context
let context = canvas.getContext("2d");

// Create an array of objects that has bridges information
let bridges = [
    { "name": "Verrazano-Narrows Bridge", "location": "New York, NY", "span": 1298.4, "coordinates": [ 40.6066, -74.0447 ] },
    { "name": "Golden Gate Bridge", "location": "San Francisco and Marin, CA", "span": 1280.2, "coordinates": [ 37.8199, -122.4783 ] },
    { "name": "Mackinac Bridge", "location": "Mackinaw and St Ignace, MI", "span": 1158.0, "coordinates": [ 45.8174, -84.7278 ] },
    { "name": "George Washington Bridge", "location": "New York, NY and New Jersey, NJ", "span": 1067.0, "coordinates": [ 40.8517, -73.9527 ] },
    { "name": "Tacoma Narrows Bridge", "location": "Tacoma and Kitsap, WA", "span": 853.44, "coordinates": [ 47.2690, -122.5517 ] }
]

// Create an array of colors
let colors = [ "yellowgreen", "orange", "pink", "yellow", "tomato" ]

// Create 2 empty arrays for the bridge names and spans
let bridgeNames = []
let bridgeSpans = []

// Add each bridge name & span to its respective arrays
bridges.forEach(function(eachBridge) {
    bridgeNames.push(eachBridge.name)
    bridgeSpans.push(eachBridge.span)
})

// Create a chart
let chart = new Chart(context, {
    type: "bar",                                // Type of chart
    data: {
        labels: bridgeNames,                    // This is an array value
        datasets: [{
            label: "Longest US Bridge",
            data: bridgeSpans,                  // This is an array value
            backgroundColor: colors             // This is an array value
        }]
    },
    options: {
        scales: {
            yAxes: [ {
                ticks: {
                    beginAtZero: true           // This is for the scale to begin at 0
                }
            } ]
        }
    }
})


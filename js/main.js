

const locations = [
    {
        name: "Summit",
        top: 25,
        left: 85,
    },
    {
        name: "Military Base",
        top: 23,
        left: 170,
    },
    {
        name: "Salt Mine",
        top: 45,
        left: 235,
    },
    {
        name: "Array",
        top: 100,
        left: 220,
    },
    {
        name: "TV Station",
        top: 110,
        left: 190,
    },
    {
        name: "Air Port",
        top: 105,
        left: 90,
    },
    {
        name: "Super Store",
        top: 125,
        left: 115,
    },
    {
        name: "Factory",
        top: 135,
        left: 145,
    },
    {
        name: "Storage Town",
        top: 135,
        left: 80,
    },
    {
        name: "Stadium",
        top: 145,
        left: 228,
    },
    {
        name: "Lumber",
        top: 143,
        left: 285,
    },
    {
        name: "Hospital",
        top: 177,
        left: 165,
    },
    {
        name: "Bone Yard",
        top: 177,
        left: 77,
    },
    {
        name: "Train Station",
        top: 188,
        left: 120,
    },
    {
        name: "Downtown",
        top: 190,
        left: 212,
    },
    {
        name: "Farmland",
        top: 185,
        left: 275,
    },
    {
        name: "Prome East",
        top: 208,
        left: 155,
    },
    {
        name: "Prom West",
        top: 218,
        left: 93,
    },
    {
        name: "Hills",
        top: 242,
        left: 120,
    },
    {
        name: "Park",
        top: 232,
        left: 201,
    },
    {
        name: "Port",
        top: 225,
        left: 243,
    },
    {
        name: "Prison",
        top: 256,
        left: 285,
    },
]

// -- This is to log all locations!
//locations.forEach(element => console.log(element))


// -- This picks a random location
var dz = locations[Math.floor(Math.random()*locations.length)];

// --- This console logs a random location
console.log(dz)

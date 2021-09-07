

const locations = [
    {
        name: "Summit",
        top: 150,
        left: 252,
    },
    {
        name: "Military Base",
        top: 147,
        left: 474,
    },
    {
        name: "Salt Mine",
        top: 198,
        left: 633,
    },
    {
        name: "Array",
        top: 339,
        left: 599,
    },
    {
        name: "TV Station",
        top: 366,
        left: 521,
    },
    {
        name: "Air Port",
        top: 351,
        left: 273,
    },
    {
        name: "Super Store",
        top: 399,
        left: 329,
    },
    {
        name: "Factory",
        top: 428,
        left: 399,
    },
    {
        name: "Storage Town",
        top: 428,
        left: 246,
    },
    {
        name: "Stadium",
        top: 449,
        left: 612,
    },
    {
        name: "Lumber",
        top: 449,
        left: 756,
    },
    {
        name: "Hospital",
        top: 531,
        left: 458,
    },
    {
        name: "Boneyard",
        top: 530,
        left: 236,
    },
    {
        name: "Train Station",
        top: 560,
        left: 344,
    },
    {
        name: "Downtown",
        top: 566,
        left: 576,
    },
    {
        name: "Farmland",
        top: 557,
        left: 734,
    },
    {
        name: "Promenade East",
        top: 614,
        left: 431,
    },
    {
        name: "Promenade West",
        top: 638,
        left: 281,
    },
    {
        name: "Hills",
        top: 699,
        left: 342,
    },
    {
        name: "Park",
        top: 675,
        left: 548,
    },
    {
        name: "Port",
        top: 653,
        left: 657,
    },
    {
        name: "Prison",
        top: 732,
        left: 756,
    },
]

// -- This is to log all locations!
    //locations.forEach(element => console.log(element))

// -- This picks a random location
    //var dz = locations[Math.floor(Math.random()*locations.length)];

// -- This console logs the random location 
    //console.log(dz)
const pin = document.getElementById("redDot")
const result = document.getElementById("result1");
const jump = document.getElementById("sendIt");
const map = document.getElementById("map");
const list = document.getElementById("dropList");
let li = document.createElement("li");

const IMAGE_WIDTH = 941;
const IMAGE_HEIGHT = 845;

// When you click the button it makes the random location name come up in HTML
jump.addEventListener("click", () => {
    let dz = locations[Math.floor(Math.random()*locations.length)];
    result1.innerText = dz.name;

    let dzLocation = dz.name
    let liNode = document.createElement("li");
    let textNode = document.createTextNode(dzLocation);

    liNode.appendChild(textNode);
    list.appendChild(liNode);


    const { x, y, width, height } = map.getBoundingClientRect();

    const scaleW = width / IMAGE_WIDTH;
    const scaleH = height / IMAGE_HEIGHT;

    console.log(scaleW, scaleH)

    pin.style.top = `${(dz.top * scaleH) + y - (pin.offsetHeight)}px`;
    pin.style.left = `${(dz.left * scaleW) + x - (pin.offsetWidth / 2)}px`;
});

// When you click the button it makes the random location name come up in HTML
//jump.addEventListener("click", () => {
    //let dz = locations[Math.floor(Math.random()*locations.length)];
    //result1.innerText = dz.name;

    //let dzLocation = dz.name
    //let liNode = document.createElement("li");
    //let textNode = document.createTextNode(dzLocation);

    //liNode.appendChild(textNode);
    //list.appendChild(liNode);
    
    //var x = random(0,944)
    //var y = random(0,846)
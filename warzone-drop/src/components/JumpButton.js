import React from "react";
import { Button } from "react-bootstrap";
import styles from './JumpButton.module.css'

function JumpButton () {

    /*const locations = [
        {
            "name": "DOCKS",
            "top": 150,
            "left": 150,
        },
        {
            "name": "ARSENAL",
            "top": 150,
            "left": 150,
        },
        {
            "name": "RUNWAY",
            "top": 150,
            "left": 150,
        },
        {
            "name": "RUINS",
            "top": 150,
            "left": 150,
        },
        {
            "name": "MINES",
            "top": 150,
            "left": 150,
        },
        {
            "name": "PEAK",
            "top": 150,
            "left": 150,
        },
        {
            "name": "BEACHHEAD",
            "top": 150,
            "left": 150,
        },
        {
            "name": "VILLAGE",
            "top": 150,
            "left": 150,
        },
        {
            "name": "LAGOON",
            "top": 150,
            "left": 150,
        },
        {
            "name": "AIRFIELD",
            "top": 150,
            "left": 150,
        },
        {
            "name": "FIELDS",
            "top": 150,
            "left": 150,
        },
        {
            "name": "SUB PEN",
            "top": 150,
            "left": 150,
        },
        {
            "name": "POWER PLANT",
            "top": 150,
            "left": 150,
        },
        {
            "name": "CAPITAL",
            "top": 150,
            "left": 150,
        },
        {
            "name": "RESORT",
            "top": 150,
            "left": 150,
        }
    ]
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
    });*/
    return(
        <>
            <Button variant="danger" className={styles.jump}>Jump</Button>
        </>
    )
}

export default JumpButton;
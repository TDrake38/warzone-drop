import React from "react";
import { Button } from "react-bootstrap";
import styles from './JumpButton.module.css'

function JumpButton () {

    const locations = [
        {
            "name": "DOCKS",
            "top": 107,
            "left": 644,
        },
        {
            "name": "ARSENAL",
            "top": 147,
            "left": 510,
        },
        {
            "name": "RUNWAY",
            "top": 162,
            "left": 788,
        },
        {
            "name": "RUINS",
            "top": 208,
            "left": 390,
        },
        {
            "name": "MINES",
            "top": 238,
            "left": 552,
        },
        {
            "name": "PEAK",
            "top": 245,
            "left": 664,
        },
        {
            "name": "BEACHHEAD",
            "top": 248,
            "left": 805,
        },
        {
            "name": "VILLAGE",
            "top": 306,
            "left": 359,
        },
        {
            "name": "LAGOON",
            "top": 399,
            "left": 387,
        },
        {
            "name": "AIRFIELD",
            "top": 409,
            "left": 484,
        },
        {
            "name": "FIELDS",
            "top": 389,
            "left": 684,
        },
        {
            "name": "SUB PEN",
            "top": 418,
            "left": 821,
        },
        {
            "name": "POWER PLANT",
            "top": 519,
            "left": 503,
        },
        {
            "name": "CAPITAL",
            "top": 510,
            "left": 651,
        },
        {
            "name": "RESORT",
            "top": 511,
            "left": 802,
        }
    ]

    // // -- This console logs the random location 
    
    const pin = document.getElementById("redDot")
    const result = document.getElementById("result1");
    const jump = document.getElementById("sendIt");
    const map = document.getElementById("map");
    //const list = document.getElementById("dropList");
    // let li = document.createElement("li");

    const IMAGE_WIDTH = 1200;
    const IMAGE_HEIGHT = 675;

    // // // When you click the button it makes the random location name come up in HTML
    function jumpClick() {
        let dz = locations[Math.floor(Math.random()*locations.length)];
        result.innerText = dz.name;

        // let dzLocation = dz.name
        // let liNode = document.createElement("li");
        // let textNode = document.createTextNode(dzLocation);

        // liNode.appendChild(textNode);
        // list.appendChild(liNode);


        const { x, y, width, height } = map.getBoundingClientRect();

        const scaleW = width / IMAGE_WIDTH;
        const scaleH = height / IMAGE_HEIGHT;

        // console.log(scaleW, scaleH)
        console.log(dz)
        pin.style.top = `${(dz.top * scaleH) + y - (pin.offsetHeight)}px`;
        pin.style.left = `${(dz.left * scaleW) + x - (pin.offsetWidth / 2)}px`;
    };
    return(
        <>
            <Button variant="danger" onClick={jumpClick} className={styles.jump} id="sendIt">Jump</Button>
        </>
    )
}

export default JumpButton;
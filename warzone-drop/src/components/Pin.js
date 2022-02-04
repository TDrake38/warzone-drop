import React, {useRef, useLayoutEffect, useState} from "react";
import styles from './Pin.module.css'
import Pin from "../photos/pin.png"

const PIN_SIZE = 32;

function PinPic({ dropLocation, mapRef }) {
    // const ref = useRef({offsetWidth: 32, offsetHeight: 32});
    const [pinDimensions, setPinDimensions] = useState();
    // pin.style.top = ;
    // pin.style.left = ;

    const rect = mapRef.current ? mapRef.current.getBoundingClientRect() : {x : 0, y :0, width : 0, height : 0 };
    const { x, y, width, height } = rect;

    const IMAGE_WIDTH = 1200;
    const IMAGE_HEIGHT = 675;
    
    const scaleW = width / IMAGE_WIDTH;
    const scaleH = height / IMAGE_HEIGHT;

    // useLayoutEffect(() => {
    //     //console.log({offsetWidth : ref.current.offsetWidth, offsetHeight : ref.current.offsetHeight})
    //     setPinDimensions({offsetWidth : ref.current.offsetWidth, offsetHeight : ref.current.offsetHeight})
    // },[ref.current])
    
    //console.log(ref.current, mapRef.current)

    return dropLocation? (
        <div>
            <img  className={styles.dot} src={Pin} alt="pin" style={{ top: `${(dropLocation.top * scaleH) + y - PIN_SIZE}px`, left: `${(dropLocation.left * scaleW) + x - (PIN_SIZE / 2)}px` }} />
        </div>
    ): null
}

export default PinPic;
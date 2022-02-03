import React, {useRef} from "react";
import styles from './Pin.module.css'
import Pin from "../photos/pin.png"

function PinPic({ dropLocation, mapRef }) {
    const ref = useRef({offsetWidth: 0, offsetHeight: 0});
    // pin.style.top = ;
    // pin.style.left = ;

    const rect = mapRef.current ? mapRef.current.getBoundingClientRect() : {x : 0, y :0, width : 0, height : 0 };
    const { x, y, width, height } = rect;

    const IMAGE_WIDTH = 1200;
    const IMAGE_HEIGHT = 675;
    
    const scaleW = width / IMAGE_WIDTH;
    const scaleH = height / IMAGE_HEIGHT;


    return dropLocation? (
        <div>
            <img ref={ref} className={styles.dot} src={Pin} alt="pin" style={{ top: `${(dropLocation.top * scaleH) + y - (ref.current.offsetHeight)}px`, left: `${(dropLocation.left * scaleW) + x - (ref.current.offsetWidth / 2)}px` }} />
        </div>
    ): null
}

export default PinPic;
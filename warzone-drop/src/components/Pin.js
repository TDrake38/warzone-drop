import React from "react";
import styles from './Pin.module.css'
import Pin from "../photos/pin.png"

function PinPic() {
    return(
        <>
            <div>
                <img className={styles.dot} src={Pin} alt="pin" id="redDot"/>
            </div>
        </>
    )
}

export default PinPic;
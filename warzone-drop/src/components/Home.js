import React, {useRef} from "react";
import JumpButton from "./JumpButton";
import PinPic from './Pin';
import caldera_map from "../photos/caldera_map.jpg";
import styles from './Home.module.css';

function Home({dropLocation, setDropLocation}) {

    const ref = useRef();

    return(
        <>
            <div>
                <img ref={ref} className={styles.map} src={caldera_map} alt="map" id="map"/>
            </div>
            <PinPic dropLocation={dropLocation} mapRef={ref}/>
            <JumpButton setDropLocation={setDropLocation}/>
        </>
    )
}

export default Home;
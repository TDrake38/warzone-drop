import React from "react";
import JumpButton from "./JumpButton";
import PinPic from './Pin';
import caldera_map from "../photos/caldera_map.jpg";
import styles from './Home.module.css';

function Home() {
    return(
        <>
            <div>
                <img className={styles.map} src={caldera_map} alt="map" id="map"/>
            </div>
            <PinPic />
            <JumpButton/>
        </>
    )
}

export default Home;
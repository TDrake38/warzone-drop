import React from "react";
import JumpButton from "./JumpButton";
import caldera_map from "../photos/caldera_map.jpg"
import styles from './Home.module.css'

function Home() {
    return(
        <>
            <div className={styles.map}>
                <img src={caldera_map} alt="map" />
            </div>
            <JumpButton/>
        </>
    )
}

export default Home;
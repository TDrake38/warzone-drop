import React from "react";
import styles from './Result.module.css'

function Result ({dropLocation}) {
    return(
        <>
            <div>
                Drop Here!
                <div className={styles.rez}>{dropLocation}</div>
            </div>
        </>
    )
}

export default Result;
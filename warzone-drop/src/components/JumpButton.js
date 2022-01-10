import React from "react";
import { Button } from "react-bootstrap";
import styles from './JumpButton.module.css'

function JumpButton () {
    return(
        <>
            <Button variant="danger" className={styles.jump}>Jump</Button>
        </>
    )
}

export default JumpButton;
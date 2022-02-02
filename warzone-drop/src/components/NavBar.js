import React from "react";
import Result from "./Result";
import styles from './NavBar.module.css'
import { Navbar, Nav, Container } from "react-bootstrap"

function NavBar () {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home" className={styles.title}>Random Drop Picker!<Result /></Navbar.Brand>
            <Nav className="me-auto">
            </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default NavBar;
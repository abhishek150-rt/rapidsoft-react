
import React, { Component } from 'react'
import styles from "./StyleSheet.module.css"
export default class StyleSheet extends Component {
    render() {
        const myStyle = {
            border: "2px solid green",
            width: "150px",
            margin: "auto",
            padding: "10px"
        }
        return (
            <>

                <h2 className={styles.primary}>External CSS</h2>
                <h3 style={myStyle} className={styles.secondary}>Inline CSS</h3>
            </>
        )
    }
}

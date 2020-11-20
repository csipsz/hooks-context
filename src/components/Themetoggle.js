import React, { Component, useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

// class Themetoggle extends Component {
//     static contextType = ThemeContext; 
//     render() {
//         const {toggleTheme} = this.context;
//         return (
//          <button onClick={toggleTheme}>Toggle me</button>
//         )
//     }
// }

export const Themetoggle = () => {
    const {toggleTheme} = useContext(ThemeContext)
    return (
        <button onClick={toggleTheme}>Toggle me</button>
    )
}

export default Themetoggle

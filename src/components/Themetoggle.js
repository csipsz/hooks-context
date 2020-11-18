import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

class Themetoggle extends Component {
    static contextType = ThemeContext; 
    render() {
        const {toggleTheme} = this.context;
        return (
         <button onClick={toggleTheme}>Toggle me</button>
        )
    }
}

export default Themetoggle

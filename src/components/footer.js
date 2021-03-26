import React, { Component } from 'react';
import mdaddcircle from "../images//mdaddcircle.png";
import '..//../src/App.css'
import {IconButton, MdPhone} from '@chakra-ui/react'


export default class footer extends Component {
    render() {
        return (
            <footer>
            <div className="iconContainer">
            <div className="icon">
            <img src={mdaddcircle}  alt="mdadcircle"  style={{height:"30px", width:"55"}}/>
          </div>
            </div>
            </footer>
        )
    }
}

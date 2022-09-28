import React, { Component } from 'react'

export class Footer extends Component {
    constructor(){
        super()
    }
  render() {
    const mystyle ={
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        color: "black",
        textAlign: "center",
    }
    return (
      <div>
        <p style={mystyle}>Made with ❤️ by Manpreet Kaur.</p>
      </div>
    )
  }
}

export default Footer

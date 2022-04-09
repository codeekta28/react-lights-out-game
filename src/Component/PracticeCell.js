import React, { Component } from 'react'
import "../Cell.css"

export class PracticeCell extends Component {
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.props.flipCell()
    }
  render() {
      const{litChance}=this.props
      const cellClass=litChance?"Cell-lit":""
    return (
      <td className={`Cell ${cellClass}`} onClick={this.handleClick}></td>
    )
  }
}

export default PracticeCell
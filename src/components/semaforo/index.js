import React, {Component} from 'react'


class trafficLight extends Component{
    constructor(){
      super()
      this.state = {
        color:'gray'
      }
      this.pushButton = this.pushButton.bind(this)
    }
  
    pushButton(event){
      this.setState({color: event.target.value})
    }
  
  
    render(){
      return (
        <>
        <div className = 'container'>
          <div className = {'light '+  this.state.color}>
          </div>
        </div> 
        <div>
          <button onClick={this.pushButton} value= 'red'>Alto</button>
          <button onClick={this.pushButton} value='yellow'>Apurese</button>
          <button onClick={this.pushButton} value='green'>Adelante</button>
        </div>
        </>
      )
    }
  }

  export default trafficLight
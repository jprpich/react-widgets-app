import React from 'react' 

class Clock extends React.Component {
  constructor(props){
    super(props)
    this.state = {time: new Date()} 
    this.tick = this.tick.bind(this)
  }

  tick(){
    this.setState({time: new Date()})
  }

  componentDidMount(){
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillMount(){
    clearInterval(this.interval) 
  }

  render(){
    const seconds = this.state.time.getSeconds()
    const minutes = this.state.time.getMinutes()
    const hours = this.state.time.getHours()
    const date = this.state.time.toDateString()
    return (
      <div>
        <h1 className="widget-title">Clock</h1>
        <div className="clock-div">
          <div>
            <h1>Time:</h1>
            <h1>Date:</h1>
          </div>
          <div>
            <h1>{hours}:{minutes}:{seconds}</h1>
            <h1>{date}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Clock

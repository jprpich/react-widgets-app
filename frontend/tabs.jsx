import React from 'react'

const Headers = (props) => {
  
  const lis = props.panes.map((ele, idx) => {
    return <li key={idx} onClick={ () => props.changeSelect(idx)}>{ele.title}</li>
  })
  return lis 
}

class Tabs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selected: 0
    }
    this.changeSelected = this.changeSelected.bind(this)
  }

  changeSelected(num){
    this.setState({
      selected: num
    })
  } 



  render(){
    return (
      <div>
        <h1 className="widget-title">Tabs!!</h1>
        <div className="tabs-div">
        <ul>
          <Headers panes={this.props.panes} changeSelect={this.changeSelected}/>
        </ul>
        <article>
         {this.props.panes[this.state.selected].content}
        </article>
      </div>
    </div>  
    )
  }
}

export default Tabs 
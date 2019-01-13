import React from 'react'

const Headers = (props) => {
  const headers = props.panes.map((pane, index) => {
    const title = pane.title;
    return (
      <li 
        key={index}
        onClick={()=> props.onTabChosen(index)}>
        <h1>{title}</h1>
      </li>
    );
  });
  return (
    <ul>
      {headers}
    </ul>
  );
}


class Tabs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedPane: 0
    }
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num){
    this.setState({selectedPane: num})
  }

  render(){
    const pane = this.props.panes[this.state.selectedPane]

    return (
      <div>
        <h1>Tabs</h1>
        <Headers 
          onTabChosen={this.selectTab}
          panes={this.props.panes}>
        </Headers>  
        <article>
          {pane.content}
        </article>
      </div>
    );
  }
}

export default Tabs 
import React from 'react';
import Clock from './frontend/clock'
import Tabs from './frontend/tabs'

const Root = () => {
  const panes = [
    {
      title: "one",
      content: "I am the first"
    },
    {
      title: "two",
      content: "Second plane here"
    },
    {
      title: "three",
      content: "Third pane here"
    }
  ]
  return (
    <div>
      <Clock />
      <Tabs panes={panes}/>
    </div>
  )
};

export default Root;

import React from 'react';
import HeaderComponent from "./components/header/index"
import './App.css';

class App extends React.Component{
  componentDidMount(){
    console.log(this.refs["goods"].innerHTML)
  }
  render(){
    var name="张三"
    var content="<span style='color:red'>hongse </span>"
    return(
    <div className="app">
      {name}
      <div dangerouslySetInnerHTML={{__html:content}}></div>
      <div ref="goods">潮流女装</div>
      <div id="cart">购物车</div>
      <HeaderComponent></HeaderComponent>  
    </div>
    )
  }
}

export default App;

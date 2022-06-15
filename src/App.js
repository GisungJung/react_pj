import { Component } from 'react';
import './App.css';
import TOC from './components/TOC'; 
import Content from './components/Content'; 
import Subject from './components/Subject';
class App extends Component {
  //생성자 초기화시킴
  constructor(props){
    super(props);
    this.state = {
      Subject:{
                title : "WEB",
                sub : "World wide Web!"
              },
      contents: [
          {id:1,title:"HTML", desc:"에이치티엠엘 어렵지 않아요!"},
          {id:2,title:"CSS", desc:"씨에스에스 어렵지 않아요!"},
          {id:3,title:"JavaScript", desc:"자바스크립트 어렵지 않아요!"}
      ]
    }
  }

  render() {
    return(
    <div className="App">
      <Subject title={this.state.Subject.title} sub={this.state.Subject.sub}></Subject>
      <TOC data = {this.state.contents}>
        
      </TOC>
      <Content title="HTML" desc="에이치티엠엘은 어렵지 않아요"></Content>
    </div>
    );
  }
}

export default App;

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
      mode : "welcome",
      Subject:{title : "WEB", sub : "World wide Web!"},
      welcome:{title : "Welcome", desc:"Hello React"},
      contents: [
          {id:1,title:"HTML", desc:"에이치티엠엘 어렵지 않아요!"},
          {id:2,title:"CSS", desc:"씨에스에스 어렵지 않아요!"},
          {id:3,title:"JavaScript", desc:"자바스크립트 어렵지 않아요!"}
      ]
    }
  }

  render() {
    console.log('App render');
    var _title, _desc = null;
    if (this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if (this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return(
    <div className="App">
      {<Subject 
          title={this.state.Subject.title} 
          sub={this.state.Subject.sub}
          onChangePage = {function(){
            this.setState({mode : 'welcome'});
          }.bind(this)}
        >
       </Subject>}
      <TOC data = {this.state.contents}>
        
      </TOC>
      <Content title={_title} desc={_desc}></Content>
    </div>
    );
  }
}

export default App;

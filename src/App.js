import { Component } from 'react';
import './App.css';
import TOC from './components/TOC'; 
import ReadContent from './components/ReadContent'; 
import CreateContent from './components/CreateContent'; 
import Subject from './components/Subject';
import BtnGrp from './components/BtnGrp';


class App extends Component {
  //생성자 초기화시킴
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode : "welcome",
      selected_content_id : 2,
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
    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }else if (this.state.mode === 'read'){
      var i = 0;
      while(i<this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
    
        }
        i=i+1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }else if(this.state.mode === 'create'){
      _article= <CreateContent onSubmit={function(_title, _desc){
        //상태에 값 추가
        this.max_content_id = this.max_content_id + 1;
        // push는 원본 데이터를 바꿈
        /* this.state.contents.push(
          {id:this.max_content_id, title: _title, desc: _desc}
        ); */
        // concat는 원본 데이터를 바꾸지 않음
       var _contents =  this.state.contents.concat(
          {id:this.max_content_id, title: _title, desc: _desc}
        );
        this.setState({
          contents:_contents
        });
      }.bind(this)}></CreateContent> 
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
      <TOC 
          onChangePage={function(id){
            this.setState({
              mode : 'read',
              selected_content_id : Number(id)
            });
          }.bind(this)} 
          data = {this.state.contents}
      >
      </TOC>
      <BtnGrp 
          onChangeMode={function(_mode){
            this.setState({
              mode : _mode
            });
        }.bind(this)}> 
      </BtnGrp>
      {_article}
    </div>
    );
  }
}

export default App;

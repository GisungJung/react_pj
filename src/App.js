import { Component } from 'react';
import './App.css';
import TOC from './components/TOC'; // TOC 가져옴
import Contents from './components/Contents'; // TOC 가져옴
import Subject from './components/Subject'; // TOC 가져옴

class App extends Component {
  render() {
    return(
    <div className="App">
      <Subject title="WEB" sub="World Wide Web!"></Subject>
      <TOC></TOC>
      <Contents title="HTML" desc="에이치티엠엘은 어렵지 않아요"></Contents>
    </div>
    );
  }
}

export default App;

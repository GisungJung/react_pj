import { Component } from "react";

class BtnGrp extends Component {
    render() {
      return(
        <ul>
          <li>
            <a href="/create" onClick={function(e){
              e.preventDefault();
              this.props.onChangeM('create');
            }.bind(this)}>저장</a>
          </li>
          <li>
            <a href="/update" onClick={function(e){
              e.preventDefault();
              this.props.onChangeM('update');
            }.bind(this)}>수정</a>
          </li>
          <li>
             <input type="button" value="삭제" onClick={function(e){
              e.preventDefault();
              this.props.onChangeM('delete');
            }.bind(this)}/>
          </li>
       </ul>
      );
    }
  }
export default BtnGrp;

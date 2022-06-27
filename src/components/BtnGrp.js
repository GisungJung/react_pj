import { Component } from "react";

class BtnGrp extends Component {
    render() {
      return(
        <div class="buttonGrp">
          <span>
              <a href="/create" onClick={function(e){
              e.preventDefault()
              this.props.onChangeMode('create');
              }.bind(this)}>입력</a>
          </span>
          &nbsp;&nbsp;
          <span>
              <a href="/update" onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('update');
              }.bind(this)}>수정</a>
          </span>
          &nbsp;&nbsp;
          <span>
             <input type="button" value="삭제" onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode('delete');
            }.bind(this)}/>
          </span>
       </div>
      );
    }
  }
export default BtnGrp;

import { Component } from "react";

class CreateContent extends Component {
    render() {
      console.log("content render");
      return(
        <article>
          <h2>Create</h2>
          <form action="/create_process" method="post" 
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(e.target.title.value, e.target.desc.value);
            }.bind(this)}
          >
            <p><input type='text' name='title' placeholder="title"/></p>
            <p><textarea type='' name='desc' placeholder="내용을 입력하세요..."></textarea></p>
            <p><input type='submit'/></p>
          </form>
        </article>
      );
    }
  }

  export default CreateContent;
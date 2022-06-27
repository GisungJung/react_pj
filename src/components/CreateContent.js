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
            <p><input type='textarea' name='desc' placeholder="내용을 입력하세요..."/></p>
            <p><input type='submit'/></p>
          </form>
        </article>
      );
    }
  }

  export default CreateContent;
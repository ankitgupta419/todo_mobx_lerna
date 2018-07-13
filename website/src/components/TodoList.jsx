import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import axios from 'axios';
import Todo from "./Todo";
var aaAlpha = require("aa-alpha");
@observer
class TodoList extends React.Component {
  @observable newTodoTitle = "";
  @observable allUsers = [];
  constructor(props){
    super(props)
    this.state={
      allUsers:[]
    }
  }
  componentDidMount(){
    axios.get('http://localhost:3030/my-service')
      .then( (response)=> {
        
        this.setState({
          allUsers:response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          New Todo:
          <input
            type="text"
            value={this.newTodoTitle}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add</button>
        </form>
        <hr />
        <ul>
          {this.props.store.todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </ul>
        Tasks left: {this.props.store.unfinishedTodoCount}
        <div>
        {this.state.allUsers.map((user,i) => (
            <div key={i}>{aaAlpha.setDecoratorTags(user.name)}</div>
          ))}
        </div>
      </div>
    );
  }

  @action
  handleInputChange = e => {
    this.newTodoTitle = e.target.value;
  };

  @action
  handleFormSubmit = e => {
    this.props.store.addTodo(this.newTodoTitle);
    this.newTodoTitle = "";
    e.preventDefault();
  };
}

export default TodoList;

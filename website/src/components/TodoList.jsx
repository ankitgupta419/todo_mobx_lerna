import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import axios from "axios";
import Todo from "./Todo";
var aaAlpha = require("aa-alpha");
import { base } from "uibase";
const Button = base.Button;
const Input = base.Input;
const Ul = base.Ul;
const H1 = base.H1;
const H3 = base.H3;
@observer
class TodoList extends React.Component {
  @observable newTodoTitle = "";
  @observable allUsers = [];
  constructor(props) {
    super(props);
    this.state = {
      allUsers: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3030/my-service")
      .then(response => {
        this.setState({
          allUsers: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <H1>TODO</H1>
        <form onSubmit={this.handleFormSubmit}>
          <span className="todoLabel">New Todo:</span>
          <Input
            type="text"
            value={this.newTodoTitle}
            onChange={this.handleInputChange}
          />
          <Button type="submit">Add</Button>
        </form>
        <hr />
        <Ul>
          {this.props.store.todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </Ul>
        <H3>Tasks left: {this.props.store.unfinishedTodoCount}</H3>
        <div>
          <br />
          <br />
          <br />
          <br />
          <h2>User List</h2>
          {this.state.allUsers.map((user, i) => (
            <div key={i}>
              <span>{i + 1 + ")     "}</span>
              <span>{aaAlpha.setDecoratorTags(user.name)}</span>
              <span>{" " + user.address}</span>
            </div>
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

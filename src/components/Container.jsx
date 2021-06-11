import React, { Component } from 'react'
import axios from 'axios'

const api = axios.create({
  baseURL: `http://localhost:3001/toDos`
})
export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedValue: '',
      value: ''
    }
  }


  handleChange = (event) => {
    this.setState({ value: event.target.value });
    console.log(this.props);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ editedValue: this.state.value, value: '' }, () => {
    });
    console.log(this.state.value);
  }

  renderTodo = (item) => {
    return (
      <div className="container-wrapper">
        <div className="down-wrapper">
          <div className="wrapper-text">
            <input type="checkbox" className="to-do-signup-checkbox" />
            <label>{item.toDoText}</label>

            <div className="wrapper-button">
              {/* <div className="button" onClick={() => this.props.editItem(item, this.state.editedValue)} onChange={this.handleChange} > */}
              <div className="button" >
                <div className="button-edit">
                  <img src="images/edit.png" alt="edit-todo" />
                  <span className="tooltip-edit">Edit</span>
                </div>
              </div>
              <div className="button" onClick={() => this.props.deleteItem(item.id)}>
                <div className="button-delete " >
                  <img src="images/remove.png" alt="delete-todo" />
                  <span className="tooltip-delete">Remove</span>
                </div>
              </div>

            </div>
            <div className="created-date" onClick={() => this.props.handleDate} >
              <img src="images/info.png" alt="Created-date" />
              <span className="tooltip-info">Created date</span>
              <p className="date"></p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="to-do-container">
        <div className=" container-content">
          <div className="content-left">
            {this.props.toDos.map((item) => {
              return this.renderTodo(item);
            })};
          </div>
        </div>

        <div className="container-content">
          <div className="content-right">
            <div className="selector">
              <div className="selector-div">
                <div className="selector-list">
                  <label>Filter</label>
                  <select className="selector-list-filterList">
                    <option value="About">All</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="selector">
              <div className="selector-list">
                <label>Sort</label>
                <select className="selector-list-sortList">
                  <option value="Due date">Due date</option>
                  <option value="Added date">Added date</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

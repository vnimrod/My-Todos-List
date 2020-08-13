import React from 'react';

import './todo-list-container.css';
import TodoTaskItem from '../todo-task-item/todo-task-item';


class TodoList extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      tasks: []
    };

    this.addNewTask = this.addNewTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addNewTask(event) {
    //this._inputElement.value is the current value added by writing some text and press add
    if (this._inputElement.value !== "") {
      var newTask = {
        text: this._inputElement.value,
        key: Date.now(), // a uniqe value that will alwayes stay uniqe
      };

     
      this.setState({tasks: [...this.state.tasks, newTask]})

      this._inputElement.value = "";
    }
    
       
    event.preventDefault();
  }

  //4. the key value passing here and creating a new filtered array without the currect key 
  deleteTask(key){
    let filteredTasks = this.state.tasks.filter((task) =>{
      console.log(task)
      return (task.key !== key);
    })

    //5. updating old tasks array with filtered tasks arr
    this.setState({
      tasks: filteredTasks
    });
  }

render(){
    return(
      <div className="task-item-header">
        <p style={{fontFamily: 'Raleway'}}>you have {this.state.tasks.length} todos left</p>
        <div className='task-item'>
          <form onSubmit={this.addNewTask}>
            <input id="task-input"
              ref={(el) =>this._inputElement = el} 
              type="text" placeholder="Enter new task"></input>
            <button type="submit">add</button>
          </form>
        </div>
        {/* 3. (delete call from todo-task-item*/}
        <TodoTaskItem tasks = {this.state.tasks}
                      delete={this.deleteTask}/>
      </div>
    );
  }
}

export default TodoList;
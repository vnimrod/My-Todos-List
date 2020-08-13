import React from 'react';

import './todo-task-item.css';

class TodoTaskItem extends React.Component{

   constructor(props){
     super(props)

     this.createTasks = this.createTasks.bind(this);
   }
  
  createTasks(task) {
    return  (
                                  //1.on click call delete and passing the task key
            <div className="task" onClick={() => this.delete(task.key)} key = {task.id}>
              {task.text}
            </div>
            )
  }

  //2. the delete goes to the current obj and passing the key to todo-list-container throgh the TodoTaskItem conponent call to the func deleteTask
  delete(key) {
    console.log(this.props)
    this.props.delete(key);
  }
  

  render() {

    var tasksArr = this.props.tasks;
    //each task from tasks array - mapping through and apply createTasks func for each obj in the array
    var tasksList = tasksArr.map(this.createTasks);
 
    return (
      <div className="tasks-header">
        {tasksList}
      </div>
    );
  }
}

export default TodoTaskItem;
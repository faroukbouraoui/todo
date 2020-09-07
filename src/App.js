import React,{Component} from 'react';
import Task from "./components/Task";
import CreateNewTask from "./components/CreateNewTask";






class App extends Component {

  state= {
    newtask:"",
    todos : [
      {text:"learn reactjs"},
      {text: "learn nodejs"}
    ]
  }
  completeTask = (index)=>{
    const todos =[...this.state.todos];

    todos.splice(index, 1);

    this.setState({todos});
    
  }
  updateNewTask=(event)=>{
    this.setState({
      newtask: event.target.value
    });
  }

  addTask=()=>{
    const todos =[...this.state.todos];
    todos.push({text: this.state.newtask});
    this.setState({todos, newtask:""});
  
  }

  render(){

   

  return (
    <div className="App">
      {this.state.todos.map( (todo, index) => 
      <Task todo={todo} completeTask={()=>this.completeTask(index)} key={index}/> )}
      <CreateNewTask value={this.state.newtask} updatevalue={this.updateNewTask} addTask={this.addTask}/>
     
    </div>
    );
}
}

export default App;

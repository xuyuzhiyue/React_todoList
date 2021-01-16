// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//  default App;






// 2
// import React,{Component} from 'react'
// import Hello from "./components/hello/hello";

// export default  class App extends Component{
//   render(){
//     return (
//       <div>
//         <Hello />
//       </div>
//     )
//   }
// }


import React,{Component} from 'react'
import Header from "./components/Header/index"
import List from './components/List/index'
import Footer from "./components/Footer/index";

export default  class App extends Component{
  state = {
    todos:[
      {id:1,name:'吃饭',done:true},
      {id:2,name:'睡觉',done:true},
      {id:3,name:'玩游戏',done:false}
    ]
  }

  addFuc = (todoObj)=>{
    const newTodos = [todoObj,...this.state.todos]
    this.setState({
      todos:newTodos
    })
    // console.log(todoObj,'todoObj');
    
  }

  changeFuc =(id,done)=>{
    const todos = this.state.todos
    const newTodos = todos.map(item => {
      if(item.id === id) return {...item,done:done}
      else return item
    })
    this.setState({
      todos:newTodos
    })
  }

  deldeFuc = (id)=>{
    const todos = this.state.todos
    const newTodos = todos.filter(item => {
      return item.id !== id
    })
    this.setState({
      todos:newTodos
    })
  }

  checkedFu=(done)=>{
    const todos = this.state.todos
    const newTodos  = todos.map(item => {
      return {...item,done:done}
    })
    this.setState({
      todos:newTodos
    })
  }

  clearFuc=()=>{
    const todos = this.state.todos
    const newTodos = todos.filter(item => {
      return !item.done
    })
    this.setState({
      todos:newTodos
    })
  }

  render(){
    return (
      <div>
        <Header addFuc={this.addFuc}/>
        <List todos={this.state.todos} changeFuc={this.changeFuc} deldeFuc={this.deldeFuc}/>
        <Footer todos={this.state.todos} checkedFu={this.checkedFu} clearFuc={this.clearFuc}/>
      </div>
    )
  }
}

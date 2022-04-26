import Tasks from './Components/Tasks';
import { useState, useEffect } from 'react';
import AddTask from './Components/AddTask';
import About from './Components/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {

  const [tasks,setTasks] = useState([]);
  
  // useEffect function is used to show changes on the page if any changes occur 
  useEffect(()=>{
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  },[])

  // This function fetches the default tasks from the url.
  const fetchTasks = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/1/todos`);
    const data = await res.json();
    console.log(data);
    return data;
  }

  // A function to add task
  const addTask = async (task) => {
    task = {...task, id: tasks.length + 1, userId: 1};
    console.log(task);
    setTasks([...tasks,task])
    console.log(tasks);
  }

  // A function to delete task
  const deleteTask = async (id) => {
    setTasks(tasks.filter((task)=>(task.id !== id)))
  }


  // Task completed
  const taskCompleted = async (id) => { 
    setTasks(
      tasks.map((task)=>
        task.id === id ? {...task, completed: !task.completed} : task)
    )
    console.log(tasks);
  }

  return (
    <Router>
        <Route path = '/'>
          <div className='container'>
            <p style={{ textAlign: 'center', fontSize: '2vw', fontWeight: 'bold' }}>{ 'THINGS TO DO:' }</p>
            <hr/>
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={taskCompleted} /> : 'You don\'t have any tasks pending!'}
            <hr />
            <p style={{ textAlign: 'center', marginTop: '3vh', cursor:'pointer', fontWeight: 'bold' }}>DONE : {tasks.filter((task)=>(task.completed === true)).length}</p>
            <AddTask onAdd={ addTask } />
          </div>
        </Route>
        <Route path='/about' component= { About } />
    </Router>
  );
}

export default App;
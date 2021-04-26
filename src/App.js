import Header from './Components/Header';
import Tasks from './Components/Tasks';
import { useState, useEffect } from 'react';
import AddTask from './Components/AddTask';
import Footer from './Components/Footer';
import About from './Components/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {

  const [showAddTask,setShowAddTask] = useState(false);
  const [tasks,setTasks] = useState([]);
  const [color,setColor] = useState('green');
  const [text,setText] = useState('Add');
  
  // useEffect function is used to show changes on the page if any changes occur 
  useEffect(()=>{
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  },[])

  // A function to fetch Tasks from Mock Backend i.e. db.json file
  const fetchTasks = async () => {
    const res = await fetch(`http://localhost:5000/tasks`);
    const data = await res.json();
    return data;
  }

  // A funciton to fetch a single task from Mock Backend
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  }

  // A function to add task
  const addTask = async (task) => {
    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newTask = {id, ...task};
    // setTasks([...tasks, newTask]);
    const res = await fetch(`http://localhost:5000/tasks`,{
      method: 'POST',
      headers: {
        'Content-type' : 'application/json',
      },
      body: JSON.stringify(task)
    })

    const data = await res.json();
    setTasks([...tasks,data])
  }
  
  // A function to toggle add task form
  const toggleAddTask = () => {
    if(showAddTask) {
      setText('Add');
      setColor('green');
    }
    else {
      setText('Close');
      setColor('red');
    }
    setShowAddTask(!showAddTask);
  }

  // A function to delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter((task)=>(task.id !== id)))
  }

  // Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const upTask = { ...taskToToggle, reminder: !taskToToggle.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(upTask)
    })
    const data = await res.json();  
    setTasks(
      tasks.map((task)=>
        task.id === id ? {...task, reminder: data.reminder} : task)
    )
  }

  return (
    <Router>
      <div className="container">
        <Header onToggle={ toggleAddTask } color={ color } buttonText = { text }/>
        <Route path = '/' exact render={(props)=>(
          <>
            {showAddTask && <AddTask onAdd={ addTask } />}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'You don\'t have any tasks pending!'}
          </>
        )} />
        <Route path='/about' component= { About } />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
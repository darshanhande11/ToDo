import Header from './Components/Header';
import Tasks from './Components/Tasks';
import { useState } from 'react';
import AddTask from './Components/AddTask'


function App() {

  const [showAddTask,setShowAddTask] = useState(false);
  const [tasks,setTasks] = useState([]);
  const [color,setColor] = useState('green');
  const [text,setText] = useState('Add');
  
  // A function to add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
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
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>(task.id !== id)))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task)=>
        task.id === id ? {...task, reminder: !task.reminder} : task)
    )
  }

  return (
    <div className="container">
      <Header onToggle={ toggleAddTask } color={ color } buttonText = { text } />
      {showAddTask && <AddTask onAdd={ addTask } />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'You don\'t have any tasks pending!'}
    </div>
  );
}

export default App;
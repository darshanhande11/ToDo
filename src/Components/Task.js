import React from 'react';
import { FaTimes } from 'react-icons/fa';

function Task({ task, onDelete, onToggle }) {
    
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className='task' onClick={ () => {onToggle(task.id)}} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <input type="checkbox" checked={task.completed} id={task.id} onChange={() => {onToggle(task.id)}} />
                <div style={{ marginLeft: '3vw', marginRight: '2vw'}}>
                    <label>  
                        {
                            task.completed ?
                            <p style={{ textDecoration: 'line-through' }}>{task.title}</p> :
                            <p>{task.title}</p>
                        }
                    </label>
                </div>
            </div>
            <div className='del-btn' onClick={()=> (onDelete(task.id))}>
                <FaTimes style={{color: 'grey', cursor: 'pointer'}} />
            </div>
        </div>
    )
}

export default Task

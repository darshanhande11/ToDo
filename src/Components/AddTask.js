import { useState } from 'react';

function AddTask({ onAdd }) {

    const [title,setTitle] = useState('');
    const [completed, setCompleted] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault(); // This prevents it from submitting it to a page.
        if(!title) {
            alert('Task field can\'t be empty!');
            return;
        } 
        onAdd({ title, completed, });

        setTitle('');
        setCompleted(false);
    }

    return (
        <form className='add-form' onSubmit={ onSubmit }>
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <div className='form-control'>
                    <input type='text' placeholder='Enter new Task' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                </div>
                
                <input type='submit' value='Add Task' className='btn'/>
            </div>
        </form>
    )
}

export default AddTask

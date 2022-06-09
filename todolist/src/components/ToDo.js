import { useState } from 'react';

// const [toDoEditing, setToDoEditing] = React.useState(null)
// const [editingText, setEditingText] = React.useState("")

const ToDo = ({ todoitem, handleClick }) => {

const [due, setDue] = useState(false);
    
return (
        <div>
            {due ? (
                <h2 style={{ textDecorationLine: 'line-through',    textDecorationThickness: 5 }}>
                    {todoitem}
                </h2>
                    ) : (
                <h2>
                    {todoitem}
                </h2>
        )}

            <button onClick={ handleClick}>Nah, forget about it</button>

            <button onClick={() => setDue(true)}>Boom! Done it!</button>
            
            {/* <input type ="text" 
            onChange={(e) => setEditingText(e.target.value)}
            value ={editingText} />
            <input type="checkbox"
            
            <button onClick ={() => setToDoEditing(todo.id)}>Edit</button> */}

        </div>

        );
        
};

export default ToDo;
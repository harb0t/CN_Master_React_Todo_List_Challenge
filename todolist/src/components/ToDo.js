import { useState } from 'react';
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

            <button onClick={ handleClick}>Nah, forget about</button>

            <button onClick={() => setDue(true)}>Boom! Done it!</button>

        </div>

        );
        
};

export default ToDo;
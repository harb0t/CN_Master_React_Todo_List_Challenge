import { useState } from 'react';
import './App.css';
import ToDo from './components/ToDo';
import Form from './components/Form';

const App = () => {

  const [things, setThings] = useState([]);

  const [toDoItemInput, setToDoItemInput] = useState('');


  const handleClick = (index) => {
      let storedThingsToDo = [...things];
      storedThingsToDo.splice(index, 1);
          setThings(storedThingsToDo);
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  setThings([...things,{toDoItem: toDoItemInput,}]);
  setToDoItemInput('');
  };


  return (
    <div>
      <h1>To Do List</h1>
        <Form handleSubmit={handleSubmit} toDoItemInput={toDoItemInput} setToDoItemInput={setToDoItemInput}/>
      {things.map((thing, index) => {
        return (
          <ToDo todoitem={ thing.toDoItem } key={ index } handleClick={ () => handleClick(index)}/>
        );
      }
      )}

  </div>
  );

};

export default App
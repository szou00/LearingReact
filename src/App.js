import React, { useState } from 'react';
import './App.css';

function ToDoList({ addToDo }) {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addToDo(value);
    setValue("")
  };

  return (
    <form className="submit"onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} 
             onChange={e=>setValue(e.target.value)}/>
    </form>
  )
}

function ToDo({ toDo , index, completeToDo, removeToDo}) {
  return (
    <div className="toDo" style={{ textDecoration:toDo.isCompleted?"line-through":""}}>
      {toDo.text}
      <div>
        <button className="button" style={{ display:toDo.isCompleted?"none":""}} onClick={() => completeToDo(index)}>Complete</button>
        {/* <button className="button" onClick={() => removeToDo(index)}>x</button> */}
      </div>
    </div>
  );
};

function App() {
  const [toDos, setToDos] = React.useState([
    { 
      text: "Cry",
      isComplete: false
    },
    { 
      text: "LeetCode",
      isComplete: false
    },
    { 
      text: "Apply to Job",
      isComplete: false
    }
  ]);
  const addToDo = text => {
    const newToDos = [...toDos,{text}];
    setToDos(newToDos);
  };
  const completeToDo = index => {
    const newToDos = [...toDos];
    newToDos[index].isCompleted=true;
    setToDos(newToDos);
  };
  const removeToDo = index => {
    const newToDos = [...toDos];
    newToDos.splice(index,1);
    setToDos(newToDos);
  };
  return (
    <div className="App">
      <h1 className="title">To-Do List</h1>
      <div className="toDo-list">
        {toDos.map((toDo,index) => (
          <ToDo key={index} index={index} toDo={toDo} 
                completeToDo={completeToDo} removeToDo={removeToDo}/>
        ))}
        <ToDoList addToDo={addToDo}/>
      </div>
    </div>
  );
}

export default App;

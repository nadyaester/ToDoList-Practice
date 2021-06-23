import React, { useState } from "react";

function App() {
  const [newInput, setInput] = useState("");
  const [newItems, setItems] = useState([]);

  function handleChange(event) {
    setInput(event.target.value);
  }
  function addItems() {
    setItems((prevValue) => {
      return [...prevValue, newInput];
    });
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={newInput} />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {newItems.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

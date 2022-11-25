import React, { useState } from "react";
import trashIcon from "./trash-can.png";
import "./App.css";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [toDoList, setTodoList] = useState([]);

  const inputKeyDown = (event) => {
    if (event.keyCode === 13) addNote();
  };
  const getTaskObject = (description, isComplete) => {
    return {
      description,
      isComplete,
    };
  };

  // addNote method
  const addNote = () => {
    if (!taskInput || !taskInput.length) return;
    toDoList.push(getTaskObject(taskInput, false));
    setTodoList(toDoList);
    setTaskInput("");
  };

  // deleting method
  const deleteTask = (index) => {
    let splice = toDoList.filter((item, i) => i !== index);
    setTodoList(splice);
}

  // markComplete method
  const markComplete = (index) => {
    const list = [...toDoList];
    list[index].isComplete = !list[index].isComplete;
    setTaskInput();

  };

  return (
    <div className="app-background">
      <p className="heading-text">Simple Todo App</p>
      <div className="task-container column">
        <div className="row">
          <input
            className="text-input"
            value={taskInput}
            onKeyDown={inputKeyDown}
            onChange={(event) => setTaskInput(event.target.value)}
          />
          <button className="add-button" onClick={addNote}>
            ADD
          </button>
        </div>
        {toDoList?.length ? (
          toDoList.map((toDoObject, index) => (
            <ListItem
              key={index}
              itemData={toDoObject}
              markComplete={markComplete}
              index={index}
              deleteTask={deleteTask}
            />
          ))
        ) : (
          <p className="no-item-text">
            <span role="img" aria-label="react">
              📌
            </span>{" "}
            &nbsp;Add Tasks
          </p>
        )}
      </div>
      <p className="footer-text">Share your review as well</p>
    </div>
  );
}

function ListItem(props) {
  return (
    <div className="list-item row jc-space-between">
      <span
        className={props.itemData.isComplete ? "task-complete" : ""}
        onClick={() => props.markComplete(props.index)}
      >
        {props.itemData.isComplete ? `✔️ ` : ""}&nbsp;
        {props.itemData?.description}
      </span>
      <img
        className="delete-icon"
        src={trashIcon}
        alt="delete-task"
        onClick={() => props.deleteTask(props.index)}
      />
    </div>
  );
}

export default App;

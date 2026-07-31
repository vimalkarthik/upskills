import React, { useState, useEffect } from "react";

function ToDo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
});

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") return;
    setTasks([
      ...tasks,
      {
        text: task,
        completed: false,
      },
    ]);
    setTask("");
  };

  const clearAll = () => {
    setTasks([]);
  };

  const closeBtn = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  const taskStrike = (index) => {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed = !updatedTasks[index].completed;

    setTasks(updatedTasks);
  };

  return (
    <div className="todoContainer">
      <div className="todoWrapper">
        <form className="todoForm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter text here..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button type="submit" className="todoBtn">
            Add
          </button>
        </form>

        <ul className="todoOutput">
          {tasks.map((item, index) => (
            <li key={index}>
              <div className="todoAdded">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => taskStrike(index)}
                />{" "}
                <span className={item.completed ? "completed" : ""}>
                  {item.text}
                </span>
              </div>{" "}
              <button onClick={() => closeBtn(index)}>&#10005;</button>
            </li>
          ))}
        </ul>
      </div>
      {tasks.length > 0 && (
        <button className="todoClear" onClick={clearAll}>
          Clear All
        </button>
      )}
    </div>
  );
}

export default ToDo;

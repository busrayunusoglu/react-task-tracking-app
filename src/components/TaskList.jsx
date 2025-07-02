import React from "react";
import Task from "./Task";

function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0)
    return (
      <h3
        style={{ textAlign: "center", color: "lightblue", marginTop: "100px" }}
      >
        Henüz görev eklenmedi.
      </h3>
    );

  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;

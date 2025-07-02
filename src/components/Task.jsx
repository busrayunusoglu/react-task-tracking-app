import React from "react";
import styles from "../styles/Task.module.css";

function Task({ task, onToggle, onDelete }) {
  return (
    <div className={`${styles.task} ${task.done ? styles.completed : ""}`}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggle(task.id)}
      />
      <span>{task.title}</span>
      <button onClick={() => onDelete(task.id)} className={styles.delete}>
        Sil
      </button>
    </div>
  );
}

export default Task;

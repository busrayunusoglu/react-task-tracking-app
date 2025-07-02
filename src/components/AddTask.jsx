import React, { useState } from "react";
import styles from "../styles/AddTask.module.css";

function AddTask({ onAdd }) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = taskText.trim();
    if (!trimmed) return alert("Görev boş olamaz.");

    onAdd(trimmed);
    setTaskText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ marginBottom: "20px" }}
      className={styles.form}
    >
      <input
        type="text"
        className={styles.input}
        placeholder="Yeni görev ekle..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        style={{ padding: "8px", width: "60%" }}
      />
      <button type="submit" className={styles.button}>
        Ekle
      </button>
    </form>
  );
}

export default AddTask;

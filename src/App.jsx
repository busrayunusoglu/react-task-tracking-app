import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, toggleTask } from "./features/tasks/taskSlice";

function App() {
  const tasks = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (text) => dispatch(addTask(text));
  const handleDeleteTask = (id) => dispatch(deleteTask(id));
  const handleToggleTask = (id) => dispatch(toggleTask(id));

  /*

  REDUX ÖNCESİ

  const [tasks, setTasks] = useState([]);
   
  //LocalStorage'den taskleri okuma
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  //LocalStorage'a task kaydetme
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //Task ekleme
  const handleAddTask = (text) => {
    const newTask = {
      id: Date.now(),
      title: text,
      done: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  //Task tamamlandı mı?
  const handleToggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  //Task silme
  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  */

  return (
    <div>
      <Header />
      <AddTask onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onToggle={handleToggleTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
}

export default App;

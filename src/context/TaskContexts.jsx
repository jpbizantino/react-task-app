import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export const TaskContextsProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  const createTask = (title) => {
    const newTask = {
      title: title,
      id: tasks.length,
      description: "tarea ".concat(tasks.length + 1),
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((n) => n.id !== id));
  };

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <>
      <TaskContext.Provider
        value={{
          tasks,
          createTask,
          deleteTask,
        }}
      >
        {props.children}
      </TaskContext.Provider>
    </>
  );
};

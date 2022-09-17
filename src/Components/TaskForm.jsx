import { useState, useEffect } from "react";
import { TaskContext } from "../context/TaskContexts";
import { useContext } from "react";

export const TaskForm = () => {
  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title);
    setTitle("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        className="bg-slate-800 p-10 mb-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1 className="text-2xl font-bold text-white mb-3">Crear tu tarea</h1>
        <input
          placeholder="Ingrese la tarea"
          onChange={(e) => setTitle(e.target.value.toUpperCase())}
          value={title}
          className="bg-slate-300 px-3 w-full mb-2"
        />
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
};

export default TaskForm;

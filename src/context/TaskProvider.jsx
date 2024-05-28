import { TaskContext } from "./TaskContext";
import { createContext, useContext, useState } from "react";

import { getTasksRequest, deleteTaskRequest} from "../api/tasks.api";

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (context === undefined) {
    throw new Error("useTasks must be used within a TaskContextProvider");
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const response = await getTasksRequest();
    setTasks(response.data);
  }

  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

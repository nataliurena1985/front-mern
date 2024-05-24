import { useEffect } from "react";
import { getTasksRequest } from "../api/tasks.api";
export default function TasksPage() {
  useEffect(() => {
    async function loadTasks() {
      const response = await getTasksRequest();
      console.log(response);
    }
    loadTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
    </div>
  );
}

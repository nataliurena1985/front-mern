import { useEffect, useState } from "react";
import { getTasksRequest } from "../api/tasks.api";
export default function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const response = await getTasksRequest();
      console.log(response.data);
      setTasks(response.data);
    }
    loadTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>

      {    tasks.map((task) => {
           return       <div key={task.id}>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                    <span>{task.done == 1 ? "️✅️" : "❌"}</span>

                    <span>{task.createAt}</span>
                  </div>;
      })}

    </div>
  );
}

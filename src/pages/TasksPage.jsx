import { useEffect } from "react";
import { getTasksRequest } from "../api/tasks.api";


import { useTasks } from "../context/TaskProvider";
import TaskCard from "../components/TaskCard";
export default function TasksPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain (){
    if (tasks.length === 0) return <h1>No tasks yet</h1>;

    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div>
      <h1>Tasks</h1>
      {renderMain()}
    </div>
  );
}

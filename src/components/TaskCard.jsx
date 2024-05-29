
import { useTasks } from "../context/TaskProvider";

import { useNavigate } from "react-router-dom";



const TaskCard = ({ task }) => {

  const { deleteTask, toggleTaskDone } = useTasks();

  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    // <div key={task.id} >
    <div className="bg-stone-600 text-white rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{task.title}</h2>

        <span>{task.done == 1 ? "️✅️" : "❌"}</span>
      </header>

      <p className="text-xs">{task.description}</p>
      <span>{task.createAt}</span>
      <div className="flex gap-x-1">
        <button
          className="bg-red-300 px-2 py-1 text-black"
          onClick={() => {
            //console.log(task.id);
            deleteTask(task.id);
          }}
        >
          Delete
        </button>
        <button
          className="bg-blue-300 px-2 py-1 text-black"
          onClick={() => {
            navigate(`/edit/${task.id}`);
          }}
        >
          Edit
        </button>
        <button
          className="bg-green-300 px-2 py-1 text-black"
          onClick={() => {
            handleDone(task.done);
          }}
        >
          Toogle Task
        </button>
      </div>
    </div>
  );
};

export default TaskCard;

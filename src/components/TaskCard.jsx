
import { useTasks } from "../context/TaskProvider";

import { useNavigate } from "react-router-dom";
const TaskCard = ({ task }) => {

  const { deleteTask} = useTasks();

  const navigate = useNavigate();

  return (
    // <div key={task.id} >
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "️✅️" : "❌"}</span>

      <span>{task.createAt}</span>
      <button
        onClick={() => {
          //console.log(task.id);
          deleteTask(task.id);
        }}
      >
        Delete
      </button>
      <button

         onClick={() =>{navigate(`/edit/${task.id}`);}}
      
      >Edit</button>
    </div>
  );
};

export default TaskCard;

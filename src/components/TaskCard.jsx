
import { useTasks } from "../context/TaskProvider";
const TaskCard = ({ task }) => {

  const { deleteTask} = useTasks();

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
      <button>Edit</button>
    </div>
  );
};

export default TaskCard;

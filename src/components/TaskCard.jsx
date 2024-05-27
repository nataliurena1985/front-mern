import { deleteTaskRequest } from "../api/tasks.api";

const TaskCard = ({ task }) => {
  const handleDelete = async(id) => {

    try {
      const response = await deleteTaskRequest(id);
      console.log(response);
      
    } catch (error) {
      console.error(error);
    }


  };

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
          handleDelete(task.id);
        }}
      >
        Delete
      </button>
      <button>Edit</button>
    </div>
  );
};

export default TaskCard;

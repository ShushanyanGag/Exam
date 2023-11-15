import Styles from "./styles.module.css";
import deleteIcon from "../../icons/delete.svg";
import editIcon from "../../icons/edit.svg";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const Task = (props) => {
  const {
    handleDeleteTask,
    task,
    handleOnChange,
    checkedTasks,
    handleEditTask,
    setTasks,
    tasks,
  } = props;
  return (
    <div className={Styles.task}>
      <div>
        <input
          type="checkbox"
          onChange={() => handleOnChange(task._id)}
          checked={checkedTasks.has(task._id)}
          style={{marginLeft: "10px"}}
        /> 
        <label htmlFor="" style={{fontSize: "13px", color: "white"}}>Check note</label>
        <Link to={`/singleTask/${task._id}`} state={task} style={{textDecoration: ""}}>
          <p>Title: {task.title}</p>
        </Link>
        <p>Description: {task.description}</p>
        <p>Date: {task.created_at.split("T", 1)[0]}</p>
      </div>
      <div className={Styles.iconsContainer}>
        <button
          onClick={() => handleDeleteTask(task._id)}
          disabled={checkedTasks.has(task._id)}
        >
          <img src={deleteIcon} alt="delete" />
        </button>
        <button
          disabled={checkedTasks.has(task._id)}
          onClick={() => handleEditTask(task)}
        >
          <img src={editIcon} alt="edit" />
        </button>
      </div>
      
    </div>
  );
};

export default Task;

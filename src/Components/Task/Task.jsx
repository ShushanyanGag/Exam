import Styles from "./styles.module.css";
import deleteIcon from "../../icons/trash.png";
import editIcon from "../../icons/edit.png";
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
      <div className={Styles.left}>
        <div>
          <input
            type="checkbox"
            onChange={() => handleOnChange(task._id)}
            checked={checkedTasks.has(task._id)}
            style={{marginLeft: "10px", width: "15px", height: "15px"}}
          /> 
          <label htmlFor="" style={{fontSize: "15px", color: "white", marginLeft: "5px"}}>Check note</label>
          <p style={{marginTop: "10px", marginBottom: "5px"}}>Title: {task.title}</p>
          <p style={{}}>Description: {task.description}</p>
          <p>Date: {task.created_at.split("T", 1)[0]}</p>
        </div>
        
        <Form style={{position: "absolute", bottom: "0", left: "40px"}}>
          <Form.Check // prettier-ignore
            className={Styles.form}
            style={{color: "white", marginTop: "", marginLeft: "10px", display: "flex", alignItems: "cemter", justifyContent: "center", padding: "0"}}
            checked={task.status === "done"}
            type="switch"
            id="custom-switch"
            label="Done"
            onChange={async (e) => {
              console.log(e.target.checked);
              const response = await fetch(
                `http://localhost:3001/task/${task._id}`,
                {
                  method: "PUT",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify({
                    status: e.target.checked ? "done" : "active",
                  }),
                }
              );
              const data = await response.json();
              const newTasks = tasks.map((item) => {
                if (item._id === task._id) {
                  return { ...item, status: data.status };
                }
                return item;
              });
              setTasks(newTasks);
            }}
          />
        </Form>
  
      </div>
      <div className={Styles.iconsContainer}>
        <button
          onClick={() => handleDeleteTask(task._id)}
          disabled={checkedTasks.has(task._id)}
        >
          <img src={deleteIcon} alt="delete" style={{}} className={Styles.delete}/>
        </button>
        <button
          disabled={checkedTasks.has(task._id)}
          onClick={() => handleEditTask(task)}
        >
          <img src={editIcon} alt="edit" style={{}} className={Styles.edit}/>
        </button>
      </div>
    </div>
  );
};

export default Task;

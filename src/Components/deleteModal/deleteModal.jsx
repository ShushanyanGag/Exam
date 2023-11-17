import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Deletemodal({
  isOpenDeleteModal,
  onHide,
  handleDeleteAllTasks,
  checkedTasks,
  tasks,
}) {
  let newTask;
  if (checkedTasks?.size === 1) {
    newTask = tasks.find((task) => checkedTasks.has(task._id));
  }
  return (
    <Modal show={isOpenDeleteModal} onHide={() => onHide("isOpenDeleteModal")} style={{backdropFilter: "blur(6px)"}}>
      <Modal.Header closeButton>
        <Modal.Title>Delete notes</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure to delete{" "}
        {checkedTasks.size === 1
          ? ` ${newTask.title} ?`
          : ` ${checkedTasks.size} notes ?`}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => onHide("isOpenDeleteModal")}>
          Close
        </Button>
        <Button variant="danger" onClick={handleDeleteAllTasks}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Deletemodal;

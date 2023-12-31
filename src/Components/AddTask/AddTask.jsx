import Styles from "./styles.module.css";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Filter from "../Filter/Filter";

const AddTask = ({
  isOpenAddModal,
  editableTask,
  inputOnChange,
  onHide,
  submit,
  resetEditTask,
}) => {
  let [editTask, setEditTask] = useState({
    date: editableTask.date,
    title: editableTask.title,
    description: editableTask.description,
    _id: editableTask._id,
  });

  const editInputChange = (e) => {
    setEditTask({
      ...editTask,
      [e.target.name]: e.target.value,
    });
  };

  const isAddState = Object.keys(editableTask).length === 0;
  return (
    <Modal
      show={isOpenAddModal}
      onHide={() => onHide("isOpenAddModal")}
      aria-labelledby="contained-modal-title-vcenter"
      style={{backdropFilter: "blur(10px)"}}
    >
      <Modal.Header closeButton>
        <Modal.Title>{isAddState ? "Add Note" : "Edit Note"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              value={editTask.title}
              placeholder="Title"
              autoFocus
              onChange={isAddState ? inputOnChange : editInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={editTask.description}
              as="textarea"
              rows={3}
              name="description"
              onChange={isAddState ? inputOnChange : editInputChange}
            />
          </Form.Group>
          {isAddState && (
            <input
              value={editTask.date}
              type="date"
              name="date"
              onChange={isAddState ? inputOnChange : editInputChange}
            />
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => onHide("isOpenAddModal")}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => submit(!isAddState ? editTask : undefined)}
          style={{backgroundColor: "black", color: "white", border: "none"}}
        >
          {isAddState ? "Add Note" : "Edit Note"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddTask;

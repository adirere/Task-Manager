import React, { useState } from "react";
import TasksList from "./TasksList";

const TASK_STATUSES = ["Unstarted", "In Progress", "Completed"];

const TasksPage = props => {
  const [cardForm, showCardForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const changeTitle = e => {
    setTitle(e.target.value);
  };

  const changeDescription = e => {
    setDescription(e.target.value);
  };

  const formToggler = () => {
    showCardForm(!cardForm);
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    showCardForm(false);
  };

  const onCreateTask = e => {
    console.log("fired");
    e.preventDefault();
    props.onCreateTask({ title, description });
    resetForm();
  };

  const renderTasksList = () => {
    const { tasks } = props;
    return TASK_STATUSES.map((status, id) => {
      const statusTasks = tasks.filter(task => task.status === status);
      return (
        <div className="col-md-3 card m-2 p-0" key={id}>
          <TasksList
            key={status}
            status={status}
            tasks={statusTasks}
            onStatusChange={props.onStatusChange}
            onRemoveTask={props.onRemoveTask}
          />
        </div>
      );
    });
  };

  return (
    <div className="container my-5">
      <div className="jumbotron py-3">
        <div className="row">
          <div className="col-md-2">
            <buton className="btn btn-success m-3" onClick={formToggler}>
              {cardForm ? "-" : "+"}
            </buton>
          </div>
          <div className="col-md-10">
            <h2 className="display-4 text-center text-uppercase">
              Task Manager
            </h2>
          </div>
        </div>
        {/* {input form} */}
        {cardForm && (
          <form onSubmit={onCreateTask}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Task Title"
                onChange={changeTitle}
              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                className="form-control"
                placeholder="Task Description"
                onChange={changeDescription}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        )}
      </div>
      <div
        className="row d-flex justify-content-center position-relative"
        style={{ background: "#e9ecef" }}
      >
        {renderTasksList()}
      </div>
    </div>
  );
};

export default TasksPage;

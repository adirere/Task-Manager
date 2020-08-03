import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TASK_STATUSES = ["Unstarted", "In Progress", "Completed"];

const Task = props => {
  function onStatusChange(e) {
    props.onStatusChange(props.task.id, e.target.value);
  }

  return (
    <>
      <from onChange={onStatusChange}>
        <select defaultValue={props.task.status}>
          {TASK_STATUSES.map(status => (
            <option value={status} key={status}>
              {status}
            </option>
          ))}
        </select>
      </from>
      <h2
        className="card-title mt-3 text-uppercase px-2"
        style={{ color: "#3a4" }}
      >
        {props.task.title}
      </h2>
      <p className="card-text mb-3 text-muted font-weight-bold px-2">
        {props.task.description}
      </p>
      <FontAwesomeIcon
        icon={faTrash}
        className="float-right m-5"
        style={{ color: "tomato", cursor: "pointer" }}
        onClick={() => props.onRemoveTask(props.task.id)}
      />
    </>
  );
};

export default Task;

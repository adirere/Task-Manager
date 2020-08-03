import React from "react";
import { connect } from "react-redux";
import { editTask } from "./actions";
import TasksPage from "./components/TasksPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App(props) {
  const onStatusChange = (id, status) => {
    props.dispatch(editTask(id, { status }));
  };

  return <TasksPage tasks={props.tasks} onStatusChange={onStatusChange} />;
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

export default connect(mapStateToProps)(App);

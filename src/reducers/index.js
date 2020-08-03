import { EDIT_TASK, CREATE_TASK, REMOVE_TASK } from "../actions/types";

const initialState = [
  {
    id: 1,
    title: "Learn ReactJS",
    description: "I want to learn ReactJS Today",
    status: "In Progress"
  },
  {
    id: 2,
    title: "Learn Redux",
    description: "I want to learn Redux",
    status: "In Progress"
  },
  {
    id: 3,
    title: "Learn MERN",
    description: "I want to learn MERN",
    status: "Unstarted"
  }
];

const tasks = (state = { tasks: initialState }, action) => {
  const { payload } = action;
  switch (action.type) {
    case EDIT_TASK: {
      return {
        tasks: state.tasks.map(task => {
          if (task.id === payload.id) {
            return Object.assign({}, task, payload.params);
          }
          return task;
        })
      };
    }
    case CREATE_TASK: {
      return {
        tasks: state.tasks.concat(action.payload)
      };
    }
    case REMOVE_TASK: {
      return {
        tasks: state.tasks.filter(task => task.id !== action.id)
      };
    }
    default:
      return state;
  }
};

export default tasks;

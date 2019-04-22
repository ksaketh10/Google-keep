import { ADD_TASK } from "../constants/index";

const initialState = {
    tasks : []
}

function tasksReducer(state = initialState, action) {
    if (action.type === ADD_TASK) {
        return Object.assign({}, state, {
          tasks: state.tasks.concat(action.task)
        });
      }
      return state;
}

export default tasksReducer
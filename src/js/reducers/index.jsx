import { ADD_TASK } from "../constants/index";

const initialState = {
    tasks : [],
    remoteArticles : []
}

function tasksReducer(state = initialState, action) {
    if (action.type === ADD_TASK) {
        return Object.assign({}, state, {
          tasks: state.tasks.concat(action.task)
        });
      }
    if (action.type === "DATA_LOADED") {
        return Object.assign({}, state, {
          remoteArticles: state.remoteArticles.concat(action.payload)
        });
      }
      return state;
}

export default tasksReducer
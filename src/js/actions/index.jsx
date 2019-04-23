import { ADD_TASK } from "../constants/index";

export function addTask(task) {
    return{ type : ADD_TASK, task }
}

export function getData() {
    return function(dispatch) {
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "DATA_LOADED", payload: json });
        });
    };
  }
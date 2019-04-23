import { ADD_TASK } from "../constants/index";

export function addTask(task) {
    return{ type : ADD_TASK, task }
}

export function getData() {
    return { type: "DATA_REQUESTED" };
  }
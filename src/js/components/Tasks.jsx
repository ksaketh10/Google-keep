import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return { tasks: state.tasks };
};
const tasksList = ({ tasks }) => (
  <ul className="list-group list-group-flush">
    {tasks.map(task => (
      <li className="list-group-item">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">task.title</h5>
                <p class="card-text">task.body</p>
            </div>
        </div>
      </li>
    ))}
  </ul>
);
const List = connect(mapStateToProps)(tasksList);
export default List;
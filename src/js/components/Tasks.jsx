import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
  console.log(state)
  return { tasks: state.tasks };
};
const tasksList = ({ tasks }) => (
  <ul className="list-group list-group-flush">
    {tasks.map(task => (
      <li className="list-group-item" key={task.title.toString()}>
        <div className="card">
          <div class="card-header">
          <h5 className="card-title">{task.title}</h5>
          </div>
            <div className="card-body">
                <p className="card-text">{task.task}</p>
            </div>
        </div>
      </li>
    ))}
  </ul>
);
const List = connect(mapStateToProps)(tasksList);
export default List;
import React from "react";
import { connect } from "react-redux";
import { Paper, ListItem, List, ListItemText } from "@material-ui/core";

const mapStateToProps = state => {
  return { tasks: state.tasks };
};
export const TasksList = ({ tasks }) => (
  
    <List>
      <Paper>
      {tasks.map(task => (
        <ListItem key={task.title.toString()}>
          <ListItemText primary={task.title} />
          <ListItemText secondary={task.task} />
        </ListItem>
      ))}
      </Paper>
    </List>
);
const List1 = connect(mapStateToProps)(TasksList);
export default List1;
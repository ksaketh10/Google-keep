import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";
import { Paper, ListItem, List, ListItemText } from "@material-ui/core";

class Post extends Component {
  componentWillMount() {
    this.props.getData();
  }
  render() {
    return (
      <List>
        <Paper>
          {this.props.articles.map(el => (
            <ListItem key={el.title.toString()}>
              <ListItemText primary={el.title} />
            </ListItem>
          ))}
        </Paper>
      </List>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10)
  };
}
export default connect(
  mapStateToProps,
  { getData }
)(Post);
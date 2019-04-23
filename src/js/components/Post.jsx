import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";
class Post extends Component {
  componentWillMount() {
    this.props.getData();
  }
  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.articles.map(el => (
          <li className="list-group-item" key={el.title.toString()}>
            {el.title}
          </li>
        ))}
      </ul>
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
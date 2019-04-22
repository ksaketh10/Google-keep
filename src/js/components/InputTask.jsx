import { addTask } from "../actions";
import React, { Component } from "react";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
    return {
        addTask: task => dispatch(addTask(task))
    };
}

class InputTask extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            task: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const { title, task } = this.state
        this.props.addTask({ title, task })
        this.setState({ title: "", task: "" })
    }

    render() {
        const { title } = this.state;
        return (

            <form onSubmit={this.handleSubmit}>
                <div class="form-row">
                    <div class="col-3">
                        <input type="text" class="form-control" placeholder="Title" />
                    </div>
                    <div class="col-6">
                        <input type="text" class="form-control" placeholder="Task" />
                    </div>
                    <div class="col-3">
                        <button type="submit" class="btn btn-primary mb-2">Add</button>
                    </div>
                </div>
            </form>
        );
    }
}
const Form = connect(null, mapDispatchToProps)(InputTask);
export default Form;
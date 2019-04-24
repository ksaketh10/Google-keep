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
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeTask = this.onChangeTask.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const { title, task } = this.state
        this.props.addTask({ title, task })
        this.setState({ title: "", task: "" })
    }

    onChangeTitle(event) {
        event.preventDefault()
        this.setState({title : event.target.value, task : this.state.task})
    }

    onChangeTask(event) {
        event.preventDefault()
        this.setState({title : this.state.title, task : event.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <div className="col-12">
                        <input type="text" className="form-control title" placeholder="Title" onChange={this.onChangeTitle}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12">
                        <textarea type="text" className="form-control task" placeholder="Task" onChange={this.onChangeTask}/>
                    </div>
                </div>
                <div className="form-row mb-4">
                    <div className="col-3">
                        <button type="submit" className="btn btn-primary mb-2 add">Add</button>
                    </div>
                </div>
            </form>
        );
    }
}
const Form = connect(null, mapDispatchToProps)(InputTask);
export default Form;
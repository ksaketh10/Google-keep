import { addTask } from "../actions";
import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField'
import { Paper, Button, Grid } from "@material-ui/core";

function mapDispatchToProps(dispatch) {
    return {
        addTask: task => dispatch(addTask(task))
    };
}

export class InputTask extends Component {
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
        this.setState({ title: event.target.value, task: this.state.task })
    }

    onChangeTask(event) {
        event.preventDefault()
        this.setState({ title: this.state.title, task: event.target.value })
    }

    render() {
        const { css } = this.props;
        return (
            <Paper className={css.root}>
                <form onSubmit={this.handleSubmit} className={css.form}>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <TextField
                                name='title'
                                label='Title'
                                onChange={this.onChangeTitle}
                                margin='normal'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name='task'
                                label='Task'
                                multiline={true}
                                rows={4}
                                rowsMax={8}
                                className="task"
                                onChange={this.onChangeTask}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type='submit'
                                color='primary'
                                variant='raised'
                                className="add"
                            >
                                Add
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        );
    }
}
const Form = connect(null, mapDispatchToProps)(InputTask);
export default Form;
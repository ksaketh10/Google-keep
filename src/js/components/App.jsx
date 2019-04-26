import React, { Component } from "react";
import InputTask from "../components/InputTask";
import Tasks from "../components/Tasks";
import Post from "./Post";
import { Typography } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import { spacing } from '@material-ui/system';

const styles = {
    root: {
        margin: 20,
        padding: 20,
        maxWidth: 400
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}
export default withStyles(styles)(
    class App extends Component {
        render() {
            const { classes } = this.props
            return (
                <div spacing={20}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={6}>
                            <Typography component="h3" variant="display3">Add a new Task</Typography>
                            <InputTask css={classes} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography component="h3" variant="display3">Tasks</Typography>
                            <Tasks />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography component="h3" variant="display3">API Reponse</Typography>
                            <Post />
                        </Grid>
                    </Grid>
                </div>
            )
        }
    }
)
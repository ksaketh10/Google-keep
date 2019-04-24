import React from "react";
import InputTask from "../components/InputTask";
import Tasks from "../components/Tasks";
import Post  from "./Post";
const App = () => (
    <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
            <h2>Add a new Task</h2>
            <InputTask />
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Tasks</h2>
            <Tasks />
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Tasks</h2>
            <Post />
        </div>

    </div>
);
export default App;
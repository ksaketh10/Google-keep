import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from '../../store'
import { Provider } from "react-redux";
import InputTask from '../InputTask'
import Tasks from '../Tasks'
import { addTask } from "../../actions/index";

configure({ adapter: new Adapter() });

describe('App component', () => {
    it('2 + 2 is 4', () => {
        expect(2 + 2).toBe(4)
    });

    it('renders page correctly', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find('InputTask')).toBeDefined();
        expect(wrapper.find('Tasks')).toBeDefined();
        expect(wrapper.find('Post')).toBeDefined();
    })

    it('renders input task', () => {
        const wrapper = shallow(
            <App />
        );
        expect(wrapper.contains(<h2>Add a new Task</h2>)).toBe(true);
        expect(wrapper.contains(<InputTask />)).toBe(true);
    })

    it('renders title and task input and button', () => {
        // const wrapper = shallow(<Provider store={store}>
        //     <InputTask

        //     />
        // </Provider>
        // )
        const addTask = task => store.dispatch(addTask(task))
        const wrapper = shallow(<InputTask addTask={addTask}
            />)
        expect(wrapper.contains(<input type="text" className="title form-control" placeholder="Title" />)).toBe(true);
        expect(wrapper.contains(<input type="textarea" className="task form-control" placeholder="Task" />)).toBe(true)
        expect(wrapper.contains(<button type="submit" className="btn btn-primary mb-2">Add</button>)).toBe(true)
    })

    it('renders tasks list', () => {
        const tasks = [{'title':'title1','task':'task1'}]
        const wrapper = shallow(<Tasks tasks={tasks}/>)
        expect(wrapper.contains( <li className="list-group-item" key="title1">
        <div className="card">
          <div class="card-header">
          <h5 className="card-title">title1</h5>
          </div>
            <div className="card-body">
                <p className="card-text">task1</p>
            </div>
        </div>
      </li>))
    })

    it('Add a task and renders the content', () => {
        const wrapper = mount(<Provider store={store}>
            <App />
        </Provider>)

        const title = wrapper.find('input.title')
        title.simulate('change', { target: { value: 'Title' } })

        const task = wrapper.find('textarea.task')
        task.simulate('change', { target: { value: 'Task' } })

        // const title = wrapper.find('input').get(0)
        // title.value = 'Title'

        // const task = wrapper.find('input').get(1)
        // task.value = 'Task'

        const addButton = wrapper.find('button.add')
        addButton.simulate('click')

        expect(wrapper.contains(<li class="list-group-item">
            <div class="card"><div class="card-header">
                <h5 class="card-title">Title</h5>
            </div>
                <div class="card-body">
                    <p class="card-text">Title</p>
                </div></div>
        </li>)).toBe(true)
    })
});
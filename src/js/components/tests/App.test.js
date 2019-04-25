import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from '../App';
import ConnectedInputTask from '../InputTask';
import { InputTask } from '../InputTask';
import ConnectedTasks from '../Tasks'
import { TasksList } from '../Tasks';
import configureStore from 'redux-mock-store'
import { Provider } from "react-redux";
import { addTask } from "../../actions/index"
import renderer from 'react-test-renderer'

configure({ adapter: new Adapter() });

describe('App component', () => {

    const mockStore = configureStore();

    it('2 + 2 is 4', () => {
        expect(2 + 2).toBe(4)
    });

    it('renders page correctly', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find('InputTask')).toBeDefined();
        expect(wrapper.find('Tasks')).toBeDefined();
        expect(wrapper.find('Post')).toBeDefined();
    })

    it('renders App', () => {
        const wrapper = shallow(
            <App />
        );
        expect(wrapper.contains(<h2>Add a new Task</h2>)).toBe(true)
        expect(wrapper.contains(<ConnectedInputTask />)).toBe(true)
        expect(wrapper.contains(<ConnectedTasks />)).toBe(true)
    })

    it('renders title and task input and button', () => {
        const props = {
            addTask: jest.fn()
        }
        const wrapper = shallow(<InputTask {...props} />)
        expect(wrapper.find('form').length).toEqual(1)
        expect(wrapper.find('input[placeholder="Title"]')).toBeDefined()
        expect(wrapper.find('textarea[placeholder="Task"]')).toBeDefined()
        expect(wrapper.find('button.add').text()).toEqual('Add')
        // expect(wrapper.contains(<input type="text" className="form-control title" placeholder="Title" />)).toBe(true);
        //expect(wrapper.contains(<input type="textarea" className="task form-control" placeholder="Task" />)).toBe(true)
        // expect(wrapper.contains(<button type="submit" className="btn btn-primary mb-2">Add</button>)).toBe(true)
    })

    it('renders dumb component tasks', () => {
        const tasks = [{ 'title': 'title1', 'task': 'task1' }]
        const wrapper = shallow(<TasksList tasks={tasks} />)

        expect(wrapper.contains(<h5 className="card-title">title1</h5>))
        expect(wrapper.contains(<p className="card-text">task1</p>))
        expect(wrapper.find('li').length).toBe(1)
        expect(wrapper.length).toEqual(1)
    })

    it('check action on dispatch', () => {
        // const initialState = {
        //     tasks: [],
        //     remoteArticles: []
        // }
        // let store = mockStore(initialState)

        // const wrapper = shallow(<ConnectedInputTask store={store} />)
        // expect(wrapper.length).toEqual(1)

    })

    it('renders Connected component tasks', () => {
        const initialState = {
            tasks: [],
            remoteArticles: []
        }
        let store = mockStore(initialState)
        const wrapper = shallow(<ConnectedTasks store={store} />)
        expect(wrapper.length).toEqual(1)
        expect(wrapper.find(TasksList).prop('tasks')).toEqual(initialState.tasks)
    })

    it('check action dispatch ', () => {
        const initialState = {
            tasks: [],
            remoteArticles: []
        }
        let store = mockStore(initialState)
        const wrapper = mount(<Provider store={store}>
            <ConnectedTasks store={store} />
        </Provider>)
        store.dispatch(addTask({ 'title': 'title1', 'task': 'task1' }));
        let action = store.getActions()
        expect(action[0].type).toBe("ADD_TASK")
        expect(wrapper.find(TasksList).prop('tasks')).toEqual(initialState.tasks)
    })

    it('click on add check action', () => {
        const mockCallBack = jest.fn();
        const props = {
            addTask: mockCallBack
        }
        const wrapper = shallow(<InputTask  {...props} />)
        const addButton = wrapper.find('button.add')
        addButton.simulate('click')
        expect(mockCallBack.mock.calls.length).toEqual(1)
    })

    it('+++capturing Snapshot of Home', () => {
        const initialState = {
            tasks: [],
            remoteArticles: []
        }
        let store = mockStore(initialState)
        const renderedValue = renderer.create(<Provider store={store}><App /></Provider>).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

    // it('Add a task and renders the content', () => {
    //     const wrapper = mount(<Provider store={store}>
    //         <App />
    //     </Provider>)

    //     const title = wrapper.find('input.title')
    //     title.simulate('change', { target: { value: 'Title' } })

    //     const task = wrapper.find('textarea.task')
    //     task.simulate('change', { target: { value: 'Task' } })

    //     // const title = wrapper.find('input').get(0)
    //     // title.value = 'Title'

    //     // const task = wrapper.find('input').get(1)
    //     // task.value = 'Task'

    //     const addButton = wrapper.find('button.add')
    //     addButton.simulate('click')

    //     expect(wrapper.contains(<li class="list-group-item">
    //         <div class="card"><div class="card-header">
    //             <h5 class="card-title">Title</h5>
    //         </div>
    //             <div class="card-body">
    //                 <p class="card-text">Title</p>
    //             </div></div>
    //     </li>)).toBe(true)
    // })
});
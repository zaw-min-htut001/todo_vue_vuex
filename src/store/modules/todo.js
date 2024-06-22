import axios from "axios";

export default ({
    state: {
        todos: []
    },
    getters: {
        getTododata(state) {
            return state.todos
        },
    },
    mutations: {
        setTodos(state , todos){
            state.todos = todos
        },
        setnewTodo(state , todo){
            state.todos.unshift(todo);
        },
        deleteTodo(state , todo){
            state.todos= state.todos.filter((item) => {
                return item.id !== todo;
            })
        },
        updateTodo(state , data){
            state.todos.forEach(e => {
                if(e.id === data.id){
                    e = data
                }
            });
        },
    },
    actions: {
        async getData({commit}){
            let res =await axios.get('https://jsonplaceholder.typicode.com/todos');
            let todos = res.data;
            commit('setTodos' ,todos)
        },
        async createTodo({commit} ,newTodo){
            let res =await axios.post('https://jsonplaceholder.typicode.com/todos' ,newTodo);
            commit('setnewTodo' ,res.data)
        },
        async deleTodo({commit} ,todo){
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todo}`);
            commit('deleteTodo' ,todo)
        },
        async limit({commit} , value){
            let res =await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${value}`);
            commit('setTodos' ,res.data)
        },
        async completeCheck({commit} , value){
            let res =await axios.put(`https://jsonplaceholder.typicode.com/todos/${value.id}`, value);
            commit('updateTodo' ,res.data)
        },
    },
})
  
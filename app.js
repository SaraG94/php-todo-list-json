const { createApp } = Vue

createApp({
    data() {
        return {
            title: 'Todolist',
            todolists:[],
        }
    },
    methods:{
        createToDoList(){
            axios
            .get('./server.php')

        }
    },
    mounted(){
        this.createToDoList()
    }
}).mount('#app')
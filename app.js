const { createApp } = Vue

createApp({
    data() {
        return {
            title: 'Todolist',
            todolists:[],
            newElToDo:'',
        }
    },
    methods:{
        saveTask(){
            console.log('invio',this.newElToDo);
        },
        createToDoList(){
            axios
            .get('./server.php')
            .then(res =>{
                console.log(res.data);
                this.todolists = res.data;
            })
            .catch((err)=>{
                console.log(err);
                this.todolists = [];
            })
        }
    },
    mounted(){
        this.createToDoList()
    }
}).mount('#app')
const { createApp } = Vue

createApp({
    data() {
        return {
            title: 'Todolist',
            todolists:[],
        }
    },
    methods:{
        saveTask(){
            console.log('invio');
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
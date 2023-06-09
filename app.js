const { createApp } = Vue

createApp({
    data() {
        return {
            title: 'Todolist',
            toDoLists:[],
            newElToDo:'',
        }
    },
    methods:{
        saveTask(){
            console.log('invio',this.newElToDo);

            data_list ={
                todo:this.newElToDo
            }
            //chiamata con post:indico percorso, indico oggetto che passo, configuro l'oggetto come se provenisse da un form
            axios.post('./server.php', data_list,{
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res=>{
                this.toDoLists = res.data;
                this.newElToDo = '';
            }).catch((err)=>{
                console.log(err);
            })
        },
        createToDoList(){
            axios
            .get('./server.php')
            .then(res =>{
                console.log(res.data);
                this.toDoLists = res.data;
            })
            .catch((err)=>{
                console.log(err);
                this.toDoLists = [];
            })
        }
    },
    mounted(){
        this.createToDoList()
    }
}).mount('#app')
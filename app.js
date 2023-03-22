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

            $data_list ={
                todo:this.newElToDo
            }
            //chiamata con post:indico percorso, indico oggetto che passo, configuro l'oggetto come se provenisse da un form
            axios.post('./server.php', $data_list,{
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            })
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
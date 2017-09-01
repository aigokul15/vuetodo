new Vue({
    el : '#todo',

    data : {
        tasks : [
            { body : 'Pickup my family', completed : false } 
        ],
        newTask : '',
    },

    computed :{

        remaining : function(){
            return this.tasks.filter(function(task){
                return !task.completed;
            })
        },
        completions : function(){
            return this.tasks.filter(function(task){
                return task.completed;
            })
        },

    },

    methods : {

        addTask : function(e){

            e.preventDefault();
            if(!this.newTask) return;

            this.tasks.push( {
            body : this.newTask,
            completed : false
            })
            this.newTask = ''
        },

        removeTask : function(index){
            console.log(index);
            this.tasks.splice(index, 1);
        },

        editTask : function(task,index){
            console.log( task.body );
            this.removeTask(index);
            this.newTask = task.body;
            this.focus();
           
        },
        completeTask : function(task){
            console.log(" complete ");
            task.completed = true;

        },
        markAllComplted : function(){
            this.newTask = '';
            this.tasks.forEach(function(task){
                task.completed = true;
            })
        },
        toggleTaskCompletion : function(task){
            task.completed = !task.completed;
        },
        clearCompleted : function(){
                this.tasks =   this.tasks.filter(function(task){
                   return !task.completed;
                })
        },
        focus : function(){
            var self = this;
            Vue.nextTick(function () {
                self.$refs.newTask.focus();
                });
        } 
    }
});
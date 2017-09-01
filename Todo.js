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


        markAllComplted : function(){
            this.newTask = '';
            this.tasks.forEach(function(task){
                task.completed = true;
            })
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
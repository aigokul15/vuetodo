new Vue({
    el : '#tasks',

    data : {
        tasks : [
            { body : 'Pickup my family', completed : false } 
        ],
        newTask : '',
    },

    methods : {

        addTask : function(e){

            e.preventDefault();
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
            //this.$$.newTask.focus();

            
            var self = this;
                Vue.nextTick(function () {
                self.$refs.newTask.focus();
            });

        }
    }

    
});
Vue.component(

    'todo-list', {
        template : '<div> \
                        <ol class="list-group">\
                            <li v-if="!task.completed"  v-for="(task, index) in tasklist" class="list-group-item">\
                                <span v-on:dblclick="editTask(task, index)">{{ task.body }}</span>\
                                <button v-on:click="removeTask(index)" >&#10007;</button>\
                                <button v-if="!task.completed" v-on:click="toggleTaskCompletion(task)" >&#10004;</button>\
                            </li> \
                        </ol> \
                    </div>',
         props : {
             tasklist : Array,
             newTask : String,
         },
methods : {

    removeTask : function(index){
            console.log(index);
            this.tasklist.splice(index, 1);
        },

        editTask : function(task,index){
            console.log( task.body );
            //this.removeTask(index);
            this.newTask = task.body;
            //this.focus();

              var self = this;
                Vue.nextTick(function () {
                self.$refs.newTask.focus();
            });
           
        },
        completeTask : function(task){
            console.log(" complete ");
            task.completed = true;

        },
        toggleTaskCompletion : function(task){
            task.completed = !task.completed;
        },
        focus : function(){
            var self = this;
            Vue.nextTick(function () {
                self.$refs.newTask.focus();
                });
        } 
}
});
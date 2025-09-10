//define and export the following functions

function addTask (tasks, task) {
    tasks.push (task);
}

function listTasks(tasks){
    
    for (const task of tasks){
        console.log(task);
    }
}


//testing code
let  fullTasks = ["Sweep", "Mop", "Vaccuum"];


addTask(fullTasks, "Rest");

listTasks(fullTasks);

module.exports = {addTask, listTasks};
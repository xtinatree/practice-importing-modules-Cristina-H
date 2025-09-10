const path = require("path");
const taskManager = require(./taskManager");
const fileHandler = require("./fileHandler");

const filePath = path.join(__dirname, "tasks.json");

let tasks = fileHandler.loadTasks(filePath);

taskManager.addTask(tasks, "Dishes");
taskManager.addTask(tasks, "Laundry");

taskManager.listTasks(tasks);

fileHandler.saveTasks

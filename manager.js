const prompt = require('prompt-sync')();

// Menu

let tasks = ["hello", "hi"]


menu()

function menu () {
console.log('Welcome to your task manager, Press:\n'
,'1. to see all your tasks\n'
,'2. to add a task\n'
,'3. to delete a task\n'
,'4. to mark a task as done\n'
,'5. to Exit the task manager\n')

let choice = prompt("Enter a number from 1 to 5")

if (choice==1){seeall()}

if (choice==2){add()}

if (choice==3){del()}

if (choice==4){done()}

if (choice==5){exit()}

}

// 1. To see all the tasks


function seeall() {
        for (x=0; x<= tasks.length-1; x++)
    console.log('\n',(x+1),tasks[x],'\n')

    menu()
}


// 2. To add a task

function add() {
    taskname = prompt("Task name:")
tasks.push(taskname)

menu()
}

// 3. To delete a task

function del() {
    x = prompt("Delete task n°")
    tasks.splice(x-1, 1)

    menu()
}

// 4. To mark a task as done

function done() {
    y = prompt("Mark done task n°")
    tasks[y-1]=(tasks[y-1]+" Done")

    menu()
}

// 5 To exit the task manager

function exit() {
    console.log("Exit")
}



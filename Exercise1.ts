//assigning array
let myTasks: Array<string>=[];
let i : number;

//function that added strings into an array
function addTask(task:string){
    myTasks.push(task);

    //display message when string added successfully
    console.log(task + " String added successfully");
    return myTasks.length;

}

//adding strings to the arrays
addTask("Eat");
addTask("Dog")


//function to list all the values in the array
function listAllTask(){
    for(i=0; i<myTasks.length; i++){
        console.log(" " + myTasks[i]);
    }
}

//calling function
listAllTask();

//function to delete an index/string from an array
function deleteTask(task:string){

    //assign number to determine index
    let number = myTasks.indexOf(task);

    //delete index
    if(number === -1){
        console.log("Index not found for string " + task);
    }
    else {
        myTasks.splice(number , 1);
        console.log("You have deleted an index in your array");
    }

}

//calling function
deleteTask("Dog");

//listing the values after deleting
listAllTask();

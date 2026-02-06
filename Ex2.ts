//interface 
interface arrayManager {
    myTask: Array<string>

    //implementing functions here
    addTask(task: string): number;
    listAllTasks(): void;
    deleteTask(task: string): number;


}

class Tasks implements arrayManager {

    constructor() { }

    // creating array
    myTask: string[] = [];


    //function to add a string to an array
    addTask(task: string): number {
        this.myTask.push(task);


        //display message when string added successfully
        console.log(task + " String added successfully");
        return this.myTask.length;

    }

   
    



    //function to list all the elements of the array
    listAllTasks() {

        for (let i = 0; i < this.myTask.length; i++) {
            console.log(" " + this.myTask[i]);
        }
    }



    //function to delete an index/string from an array
    deleteTask(task: string): number {

        //assign number to determine index
        let indexArray = this.myTask.indexOf(task);

        //not deleting anything string not found
        if (indexArray === -1) {
            console.log("Index not found for string " + task);
        }
        //deleting the index if string matches
        else {
            this.myTask.splice(indexArray, 1);
            console.log("You have deleted an index in your array");
        }
        return this.myTask.length;


    }
}

let myToDO = new Tasks();
myToDO.addTask("Sheep");
myToDO.addTask("cow");
myToDO.listAllTasks();
myToDO.deleteTask("cow");
myToDO.listAllTasks();




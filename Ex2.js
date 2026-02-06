var Tasks = /** @class */ (function () {
    function Tasks() {
        // creating array
        this.myTask = [];
    }
    //function to add a string to an array
    Tasks.prototype.addTask = function (task) {
        this.myTask.push(task);
        //display message when string added successfully
        console.log(task + " String added successfully");
        return this.myTask.length;
    };
    //function to list all the elements of the array
    Tasks.prototype.listAllTasks = function () {
        for (var i = 0; i < this.myTask.length; i++) {
            console.log(" " + this.myTask[i]);
        }
    };
    //function to delete an index/string from an array
    Tasks.prototype.deleteTask = function (task) {
        //assign number to determine index
        var indexArray = this.myTask.indexOf(task);
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
    };
    return Tasks;
}());
var myToDO = new Tasks();
myToDO.addTask("Sheep");
myToDO.addTask("cow");
myToDO.listAllTasks();
myToDO.deleteTask("cow");
myToDO.listAllTasks();

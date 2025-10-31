//this is a change made in app.js file
function readContent(){
let title = $("#txtTitle").val();
let desc = $("#txtDescription").val();
let color = $("#selColor").val();
let date = $("#selDate").val();
let status = $("#selStatus").val();
let budget = $("#numBudget").val();
console.log(title, desc, color, date, status, budget);

let taskToSave = new Task(title, desc, color, date, status, budget);
console.log(taskToSave);

displayTask(taskToSave);

}

function displayTask(task){
    // Use template literals to create the layout
    let html = `
        <div class="task">
            <h3>${task.title}</h3>
            <div class="task-body">
                <div>${task.description}</div>
                <div>${task.date}</div>
                <div>${task.status}</div>
                <div>$${task.budget}</div>
            </div>
        </div>
    `;
    $(".pending-task").append(html);

    // create a container with class pending-task and append the html inside the title, 
    // the description, the date, the status, and the budget
}

function testConection(){
    $.ajax({
        type: "get",
        url: "https://106api-b0bnggbsgnezbzcz.westus3-01.azurewebsites.net/",
        success: function(res){
            console.log("Server says hi",res);
        },
        error: function(error){
            console.log("Error",error);
        }
    });
}

function init(){
    console.log("App initialized");
    $("#btnSave").click(readContent);
}


window.onload = init;
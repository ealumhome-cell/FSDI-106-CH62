const API = "https://106api-b0bnggbsgnezbzcz.westus3-01.azurewebsites.net/api/tasks";

//this is a change made in app.js file
function readContent() {
    let title = $("#txtTitle").val();
    let desc = $("#txtDescription").val();
    let color = $("#selColor").val();
    let date = $("#selDate").val();
    let status = $("#selStatus").val();
    let budget = $("#numBudget").val();
    console.log(title, desc, color, date, status, budget);
    let taskToSave = new Task(title, desc, color, date, status, budget);
    console.log(taskToSave);
    saveTask(taskToSave);
    loadTask();
    //displayTask(taskToSave);
}

function saveTask(task) {
    $.ajax({
        type: "POST",
        url: API,
        data: JSON.stringify(task),
        contentType: "application/json",
        success: function (created) {
            console.log("created", created);
        },
        error: function (error) {
            console.error("Post server", error);
            alert("Task could not be saved");
        }
        // instead of sending the task from the form, i want to get it from the server
    });

    loadTask()
}



function displayTask(task) {
    console.log("displayTask... ", task);
    
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

function loadTask() {
    $.ajax({
        type: "get",
        url: API,
        dataType: "json",
        success: function (list) {
            $(".pending-task").empty();
            for(let i = 0;i < list.length;i++)
            {
                console.log("task..", list[i].name);
                
                if(list[i].name === "ashton"){
                    displayTask(list[i])
                }
            }
            //list.forEach(displayTask);
        },
        error: function (err) {
            console.error("Get error", err);
        }
    });
};

function testConection() {
    $.ajax({
        type: "get",
        url: API,
        success: function (res) {
            console.log("Server says hi", res);
        },
        error: function (error) {
            console.log("Error", error);
        }
    });
}

function init() {
    console.log("App initialized");
    $("#btnSave").click(readContent);
    loadTask();
}

window.onload = init;
// miniCHALLENGE
//Just READ those messages created by y
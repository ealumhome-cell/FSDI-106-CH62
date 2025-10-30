//this is a change made in app.js file
function readContent(){
let title = $("#txtTitle").val();
let desc = $("txtDescription").val();
let color = $("selColor").val();
let date = $("selDate").val();
let status = $("selStatus").val();
let budget = $("numBudget").val();
console.log(title, desc, color, date, status, budget);
}




function init(){
    console.log("App initialized");
    $("btnSave").click(readContent);
}


window.onload = init;
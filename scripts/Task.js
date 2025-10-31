class Task{
    constructor(title, desc, color, status, budget){
    this.title = title;
    this.description = description;
    this.color = color;
    this.date = date;
    this.status = status;
    this.budget = budget;
    console.log(title, desc,color, this.date, status, budget);

    let taskToSave = new Task(title, desc, color, date, status, budget)
    console.log(taskToSave);
    }
}
let taskId = 0;

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskName = taskInput.value.trim();

    if (taskName === "") return;

    const task = document.createElement("div");
    task.className = "task";
    task.id = "task-" + taskId++;
    task.draggable = true;
    task.ondragstart = drag;

    const date = new Date().toLocaleDateString();
    task.innerHTML = `<strong>${taskName}</strong><br><small>${date}</small>`;

    document.getElementById("todo").appendChild(task);
    taskInput.value = "";
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text");
    const task = document.getElementById(taskId);

    if (event.target.classList.contains("column")) {
        event.target.appendChild(task);

        task.classList.remove("in-progress", "completed");
        document.getElementById("message").innerText = "";

        if (event.target.id === "inprogress") {
            task.classList.add("in-progress");
        }

        if (event.target.id === "completed") {
            task.classList.add("completed");
            document.getElementById("message").innerText =
                "Task Completed Successfully";
        }
    }
}

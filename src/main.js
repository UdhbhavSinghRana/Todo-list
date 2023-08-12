const sub_btn = document.getElementById("btn-id");
const form = document.getElementById("form-id");
const tasks = document.getElementById("tasks-id");
let bool = 1;
const inp = document.getElementById("inp-id");
const alltasks = document.getElementById("all-tasks-id");
const taskarr = [];

sub_btn.addEventListener("click", () => {
    if (bool) {
        form.className = "form-box";
        tasks.className = "task-box-hidden";
        bool = 0;
    }
    else {
        form.className = "form-box-hidden";
        tasks.className = "task-box";
        bool = 1;
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let text = inp.value;  
    taskarr.push(text);

    inp.value = '';
    console.log(taskarr); 
    let value = '';
    taskarr.forEach(task => value += `<div>${task}</div>`);
    alltasks.innerHTML = value;

    form.className = "form-box-hidden";
    tasks.className = "task-box";
    bool = 1;
})

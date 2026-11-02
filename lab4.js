"use strict";
let tasks = [];
let task;
let txt = document.getElementById("txt1");
let btn = document.getElementById("btnadd");
let btnshow = document.getElementById("show");
let lst = document.getElementById("lst");
function addtask() {
    task = txt.value;
    if (task !== "") {
        tasks.push(task);
        txt.value = "";
        lst.innerHTML = "";
        for (let i = 0; i < tasks.length; i++) {
            let item = document.createElement("li");
            item.textContent = tasks[i];
            lst.appendChild(item);
        }
    }
}
function showtasks() {
    lst.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let item = document.createElement("li");
        item.textContent = tasks[i];
        lst.appendChild(item);
    }
}
btn.addEventListener("click", addtask);
btnshow.addEventListener("click", showtasks);

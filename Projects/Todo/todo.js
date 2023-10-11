var addbtn=document.getElementById("add-task")
var taskinput= document.getElementById("task")
var tasklist= document.getElementById("tasks")

addbtn.addEventListener("click",function(){

var task =taskinput.value
addtask(task)
taskinput.value =""

})

function addtask(task) {
    var li=document.createElement("li")
    li.innerHTML =task
    tasklist.appendChild(li)

}



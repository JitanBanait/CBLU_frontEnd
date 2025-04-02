let input = document.getElementById("inp")
let btn = document.getElementById("btn")
let list = document.getElementById("list")
let todoArr = []
let id = 1;
getData();




function showTask(data){
    let li = document.createElement("li")

    li.addEventListener("click" , (event)=>{
        let localdata = JSON.parse(localStorage.getItem("todo"))
        let filterData = localdata.filter((task)=>{
           
            return task.taskId != data.taskId
        })

        localStorage.setItem("todo" ,JSON.stringify(filterData) )

        list.removeChild(event.target)
    })


    li.innerText = data.task;
    list.appendChild(li);
}


function getData(){
    let data = JSON.parse(localStorage.getItem("todo"))

    todoArr = data || [];
    if(todoArr.length){
        id = todoArr[todoArr.length-1].taskId
        id++;
    
    }
    todoArr.forEach((v)=>{

        showTask(v)
       
    })

}

btn.addEventListener("click",(e)=>{
    let data = {
        task: input.value,
        taskId  : id
    }

    todoArr.push(data);

    localStorage.setItem("todo" ,JSON.stringify(todoArr) )
   

    showTask(data)

    input.value = ""
    id++;

})




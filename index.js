let input = document.getElementById("inp")
let btn = document.getElementById("btn")
let list = document.getElementById("list")
let todoArr = []

function showTask(data){
    let li = document.createElement("li")

    li.innerText = data.task;
    list.appendChild(li);
}
getData();

let id = 1;

function getData(){
    let data = JSON.parse(localStorage.getItem("todo"))

    todoArr = data || [];

    todoArr.forEach((v)=>{

        showTask(v)
       
    })

}

btn.addEventListener("click",(e)=>{
    let data = {
        task: input.value,
    }

    todoArr.push(data);

    localStorage.setItem("todo" ,JSON.stringify(todoArr) )
   

    showTask(data)

    input.value = ""

})





//Ajouter task
// supprime task 
//modifie task
//completed task


let tasks = [

  {
    "title": "cree web site ",
    "date": "12/23/3023",
    "isDone": false,

  },
  {
    "title": "cree desktop site ",
    "date": "14/23/3023",
    "isDone": true,

  },

]


  let taskl=JSON.parse(localStorage.getItem("tasks"))

  if (taskl == null){
    tasks=[]

  }else{
    tasks=taskl
  }



function getTasks() {

  document.getElementById("tasks").innerHTML = " "
  index=0
  for (task of tasks) {
    let content =
      `
        <div class="task ${task.isDone ? 'done': ''}">
          <div class="info" ">
            <h2>${task.title}</h2>
            <div>
              <span>${task.date}</span>
            </div>
    
          </div>
          <div class="action" ">
            <button onclick="deleteTask(${index})"    class="circulaire" style="background-color:rgb(167, 7, 7) ; color: white;">D</button>
            <button onclick="CompletedTask(${index})"   class="circulaire" style="background-color:rgb(28, 167, 7) ; color: white;">C</button>
            <button onclick="UpdateTask(${index})"  class="circulaire" style="background-color:rgb(7, 18, 167) ; color: white;">E</button>
        
    
          </div>
        </div>
    `
    document.getElementById("tasks").innerHTML += content
    index++
  }

}

getTasks()


function AjouterTask() {
  let taskName = prompt("Ajouter un niveau task")
  taskObj = {
    "title": taskName,
    "date": "12/3/2332",
    "isDone": false

  }
  tasks.push(taskObj)

  let tasksString=JSON.stringify(tasks)
  localStorage.setItem("tasks",tasksString)
  
  getTasks()
  
}

function deleteTask(index){
   let isConfirm=confirm("Esques vous sure de suprime ce task")

   isConfirm ? 
   (()=>{
    tasks.splice(index,1)
    getTasks()
   })()
   :
   getTasks()
  // if(isConfirm){
  //   tasks.splice(index,1)
  //    getTasks()

  // }

}

function UpdateTask(index){
    let task=tasks[index]
    let taskName=prompt("modifie ce task",task.title)

    task.title=taskName
    getTasks()
}



function CompletedTask(index){
   let task=tasks[index]
   task.isDone = !task.isDone

   getTasks()

}
//Localstrage


function storeTask(){
  let taskString=JSON.stringify(tasks)
  localStorage.setItem("tasks",taskString)

}
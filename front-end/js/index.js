document.addEventListener("DOMContentLoaded", ()=>{

    getUserTaskValue();

    handleEventsOnTasks();

});

function getUserTaskValue(){

     const areaDisplayTasks = document.querySelector("#area-display-tasks");

     document.querySelector("#create-task").addEventListener("click", ()=>{

         const areaTask = document.querySelector("#area-text");

         return import("./modules/verify-task-value.mjs").then((module)=>{

               const response = module.verifyTaskValue(areaTask.value)

               if(response === "Entrez une tache."){

                   return alert(response);
               }

               import("./helper-view/create-dom-task.mjs").then((hView)=>{

                      const taskDom = hView.createDomTask(response);

                      import("./helper-view/render.mjs").then((hView)=>{
                            
                            areaDisplayTasks.style.display = "flex";

                            hView.render(areaDisplayTasks,taskDom, "insertAdj").then((result)=>{

                                  const taskNode = result.Data.lastChild;

                                  if(result.Message === "Dom mis a jour"){

                                        areaTask.value = "";

                                        return import("./modules/send-task.mjs").then((module)=>{

                                            return module.sendTask(response).then((responseFetch)=>{

                                                 if(responseFetch.Message === "Tache créée"){

                                                     return taskNode.dataset.id = responseFetch?.Data;

                                                 }
                                            });
                                        });
                                  }
                            });
                      });
                      
               });

         });
        
     });
}

function handleEventsOnTasks(){

    document.querySelector("#area-display-tasks").addEventListener("click", function(event){
         
           if(event.target !== event.currentTarget){

                if(event.target.classList.contains("delete-button") === true){

                     const taskId = event?.target?.parentElement?.dataset?.id;

                     import("./modules/delete-task.mjs").then((module)=>{

                         return module.deleteTask(taskId).then((response)=>{

                                if(response.Message === "Elément effacé"){

                                    event?.target?.parentElement.remove();

                                    if(this.querySelectorAll(".area-task").length <= 0){

                                         return this.style.display = "none";
                                    }
                                }

                                return alert(response.Message);
                         });
                     });
                     
                }

                if(event.target.classList.contains("edit-button") === true){

                }
                
           }

    });
}
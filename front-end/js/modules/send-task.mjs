import fetchData from "../helpers/fetch-data.mjs"

export function sendTask(taskValue){

     return new Promise((resolve)=>{ 
          
          const dataToSend = {

               requestName: "handleTask",

               data:{
                    
                    task: taskValue.trim()

               }

          }
          
          fetchData("http://localhost:1327", dataToSend).then((result)=>{

               if(result.Message === "Tache créée"){

                    return resolve(result);
               }
          })
     })
}
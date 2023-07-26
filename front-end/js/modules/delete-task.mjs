import fetchData from "../helpers/fetch-data.mjs";

export function deleteTask(taskId){

    return new Promise((resolve)=>{

         if([null, undefined].includes(taskId) === true){

              return resolve({Message: "Veuillez entrer un Id de tache a supprimer"});
         }

         const dataToSend = {

             requestName: "deleteTask",
             data: {
                taskId: taskId
             }
         }

         fetchData("http://localhost:1327", dataToSend).then((response)=>{

                return resolve(response);

         })

    });
}
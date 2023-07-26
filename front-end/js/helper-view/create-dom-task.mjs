export function createDomTask(taskValue){

     let taskHtml = `
             
            <div class="area-task">
                <p>${taskValue}</p>
                <button class="button delete-button"> Supprimer la tache</button>
                <button class="button edit-button">Editer une tache</button>
            </div>
          `;

     return taskHtml;
}
export function render(domParent, domNode, innerOrInsert, insertOption = "afterbegin"){

      return new Promise((resolve)=>{

            requestAnimationFrame(()=>{
 
                 if(innerOrInsert === "innerHtml"){

                    domParent.innerHTML = domNode;

                    return resolve({Message: "Dom mis a jour", 
                        Data: {
                              parent: domParent, 
                              lastChild: domParent.firstElementChild
                        }   
                    });
                 }

                 domParent.insertAdjacentHTML(insertOption, domNode);

                 return resolve({Message: "Dom mis a jour", 
                        Data: {
                              parent: domParent, 
                              lastChild: domParent.firstElementChild
                        }   
                 }); 

            }, domParent);
      })
}
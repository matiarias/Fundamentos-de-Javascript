let textTarea = document.querySelector('#text_task');
let cards = document.querySelector('#cards');
let contador = Document.querySelector('#total')

let tareas = [];

const agregarTarea = function () {

    if (textTarea.value) {

        tareas.push(textTarea.value);
        textTarea.value = '';
        textTarea.focus();
        console.log(tareas);
        
    } 
    
}
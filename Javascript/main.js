'use strict';
/* importaciones */
/* Variables */
const d = document;

const $signUp = d.getElementById('signUp');


/* eventos */

d.addEventListener('DOMContentLoaded', ()=>{
    eventListeners();
});

/* funciones */
function eventListeners() {
console.log('works!');
    $signUp.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData($signUp);
    console.log(formData);
}









/* ejecucion codigo */
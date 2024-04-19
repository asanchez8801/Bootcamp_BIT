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
    $signUp.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();
    
    const credentials = {
        id:"fakeId1",
        name: $signUp.name.value,
        email: $signUp.email.value,
        password: $signUp.password.value,
    }
    console.log(credentials);
}









/* ejecucion codigo */
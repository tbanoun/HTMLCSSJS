
function changeBackColor(){
    let cl = document.getElementById('clsOne');
    let body = document.querySelector('body');
    body.style.backgroundColor = cl.value;
}

function changeColor(){
    let cl = document.getElementById('clsTwo');
    let body = document.querySelector('body');
    body.style.color = cl.value;
}

function changeMsg(){
    let msg = document.getElementById('message');
    let title = document.querySelector('h1');
    title.textContent = msg.value;
}
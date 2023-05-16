

// function change color:
function colorSet(){
    let cont = document.getElementsByClassName('container');
    cont[0].setAttribute("class","cl-white container")
}

function colorSet2(){
    let cont = document.getElementsByClassName('container');
    cont[0].setAttribute("class","cl-black container")
}

// function animation titre h1

function AnimationSet(){
    // animate__bounceOut
    let title = document.querySelector('h1');
    title.setAttribute("class", 'animate__animated animate__bounceOut');
}

function AnimationSet2(){
    let title2 = document.querySelector('h1');
    title2.setAttribute("class", 'animate__animated animate__fadeOutBottomRight');
}

// function sum 2 number

function add(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let res = Number(num1) + Number(num2);
    let p = document.getElementById('res');
    let p1 = document.getElementById('p2');
    p1.textContent = 'Bonjour le monde';
    p.value = res;
}
// ajouter plus de details au exercice 1
function enter(){
   let text = document.getElementById('text');
   if (text.value){
    let list = document.getElementById('list');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(text.value));
    list.appendChild(li);
    text.value = "";
   }else{
    alert('Vous ne pauvez pas ajouter une valure nulle');
   }   
}

// event for inpuut 
function eventInput(self){
    if (self.keyCode == 13){
        if (text.value){
            let div2 = document.getElementById('body1'); 
            let list = document.getElementById('list');
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(text.value));
            list.appendChild(li);
            text.value = "";
            // ajouter un msg que c'est fait
            let p = document.createElement('p')
            p.setAttribute('id','bien')
            p.appendChild(document.createTextNode('Ajouter avec success'))
            div2.appendChild(p)
           }else{
            alert('Vous ne pauvez pas ajouter une valure nulle');
           }  
    }
    else{
        let msg = document.getElementById('bien');
        if (msg){
            msg.remove()
        }
    }
 }

// create anthore title:
function createTitle(){
    let cont = document.getElementsByClassName('container')[0];
    let title = document.createElement('h1');
    title.appendChild(document.createTextNode('Je suis le titre 2'));
    cont.appendChild(title);
}


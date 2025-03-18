// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const lst = []
function agregarAmigo(){
    var addFriend = document.getElementById('amigo').value;
    var ul = document.getElementById("listaAmigos");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(addFriend))
    ul.appendChild(li)
    lst.push(addFriend)
};

function sortearAmigo(){
    var alet = lst[Math.floor(Math.random() * lst.length)];
    var ul = document.getElementById("resultado");
    ul.innerHTML = '';
    var li = document.createElement("li");
    li.textContent = `El amigo sorteado es: ${alet}`
    ul.appendChild(li)
}
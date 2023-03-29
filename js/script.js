function hola_mundo(){
    // console.log("Hola!");
    // console.log("Cómo estás?");
    // console.log("Yo estoy excelente!");
    alert("Hola!");
}

function hello_world(nombre) {
    console.log("Hello "+nombre);
}

//hola_mundo();

hello_world("Juana");
var nombre_completo = "Juana de Arco";
hello_world(nombre_completo);

function cambiar_texto(variable){ //variable ->ETIQUETA P
    console.log(variable);
    //variable.innerText = "Escritora, soñadora, bailarina"; //Innertext es para cambiar el texto de adentro
    var nuevotexto = '';
    for(var i=1; i <=10; i++){
        nuevotexto += i;
    }

    variable.innerText = nuevotexto;

}

function elimina(elemento_elim) {
    elemento_elim.remove();
}

function redirecciona() {
   // window.location = "https://google.com";
    window.open("http://google.com", "_blank");
}

function over(boton){
    boton.innerText = "Mouse over";
}

function out(boton, numero, letra) {
    boton.innerText = "Boton "+numero+letra;
}

function modifica_titulo() {
    var titulo = document.querySelector('h1');  //Seleccionamos etiqueta h1
    //var h1 = document.querySelector('#h1'); Seleccionando id h1
    //var h1 = document.querySelector('.h1); Seleccionando clase h1
    titulo.innerHTML = "Picasso";
}

var likes = [0, 0]; //Posicion 0 = 0; Posicion 1 = 0;

function suma_like(boton, numero) {
    likes[numero]++;
    boton.innerText = likes[numero];
}

function cambiar_color() {
    var location = document.querySelector('#locacion');
    location.style.color = "red";
    location.style.backgroundColor = "green";
    location.style.fontStyle = "italic";
    location.style.textDecoration = "underline";
}

function cambiar_imagen() {
    var icono = document.querySelector('.icono_engrane');
    icono.src = "images/icons/map-marker.png";
}

function cambiar_clase() {
    var boton = document.querySelector('#btn');

    if(boton.classList.contains("btn-amarillo")){
        boton.classList.remove("btn-amarillo");
        boton.classList.add("btn-azul");
    } else {
        boton.classList.remove("btn-azul");
        boton.classList.add("btn-amarillo");
    }

}
//Obteniendo todos los elementos ocupados
papel=document.getElementById("pila");
var dibujos_pila = document.getElementById('dibujos_pila');
var apuntadores = document.getElementsByClassName('estilo_apuntador');
var borrar_celda = document.getElementsByClassName("celda");
var fin = document.getElementById('a_fin');
var inicio = document.getElementById('a_inicio');
var operaciones = document.getElementsByClassName("operaciones");
//Variables de uso global
var dato;
var operacion;
var pila=new Array();

class Stack {
    constructor() {
        this.valores = [];
        this.tope = 0;
    }
    push(element) {
        this.valores[this.tope] = element;
        this.tope = this.tope + 1;
    }
    length() {
        return this.tope;
    }
    isEmpty() {return this.tope === 0;}
    peek() {return this.valores[this.tope - 1];}
    pop() {
        if (this.isEmpty() === false) {
            this.tope = this.tope - 1;
            return this.valores.pop();
        }
    }
    print() {
        var tope = this.tope - 1;
        while (tope >= 0) {
            console.log(this.valores[tope]);
            tope--;
        }
    }
}
const stack = new Stack();
//Funcion principal para el dibujo del nuevo stack
function dibujar(){
    dato = document.getElementById('dato').value;
    if(dato==''){
        alert("Aún no ha ingresado el dato")
    }else{
        stack.push(dato);
        stack.print();
        dibujar_celda(dato);
        operacion_insertar(dato);
        return dato;
    }
}
//Agregando nuevos elementos div a nuestro elemento html
function dibujar_celda(dato) {
    var nuevoElemento = document.createElement("div");
    nuevoElemento.classList.add("celda");
    var textoElemento = document.createElement("p");
    textoElemento.classList.add("textoCelda");
    textoElemento.innerHTML = dato;
    nuevoElemento.appendChild(textoElemento);
    dibujos_pila.appendChild(nuevoElemento);
    nuevoElemento.classList.add("fadeDown");
    apuntadores[0].classList.remove('apuntadores');
    apuntadores[1].classList.remove('apuntadores');
}
//Funcion principal para borrar elemento de la pila 
function borrar() {
    if (stack.length() == 0) {
        alert("Pila vacía");
    } else {
        stack.pop();
        stack.print();
        salidaCelda();
        operacion_eliminar();
    }
}

function salidaCelda(){
    borrar_celda[borrar_celda.length - 1].classList.add('lightSpeedIn');
    var tiempo_salida= setTimeout(borrar_dibujo,1000);
    
}

function borrar_dibujo() {
    dibujos_pila.removeChild(borrar_celda[borrar_celda.length - 1]);
    if (stack.length() == 0) {
        fin.classList.add('apuntadores');
        inicio.classList.add('apuntadores');
    } else {
        fin.classList.remove('apuntadores');
        inicio.classList.remove('apuntadores');
    }
    return borrar_celda;
}

function operacion_insertar(element){
    operacion = document.createElement("p");
    operacion.classList.add("salida");
    operaciones[0].appendChild(operacion);
    operacion.classList.add("fadeDown");
    operacion.innerHTML = "push(nodo," + element + ")";
}
function operacion_eliminar(){
    operacion = document.createElement("p");
    operacion.classList.add("salida");
    operaciones[0].appendChild(operacion);
    operacion.classList.add("fadeDown");
    operacion.innerHTML = "pop(nodo)";
}


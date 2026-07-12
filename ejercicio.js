// Variables
let cantidadObras = 0;
let obrasIngresadas = 0;

let consumoTotal = 0;
let mayorTiempo = 0;
let nombreMayorTiempo = "";
let costoMayorTiempo = 0;
let obrasMas20Luces = 0;

// Botones
const btnComenzar = document.getElementById("btnComenzar");
const btnAgregar = document.getElementById("btnAgregar");
const btnCalcular = document.getElementById("btnCalcular");
const btnReiniciar = document.getElementById("btnReiniciar");

// Eventos
btnComenzar.addEventListener("click", comenzar);
btnAgregar.addEventListener("click", agregarObra);
btnCalcular.addEventListener("click", calcularResultados);
btnReiniciar.addEventListener("click", reiniciar);

// Comenzar la carga de obras
function comenzar(){

    cantidadObras = Number(document.getElementById("cantidadObras").value);

    if(cantidadObras <= 0){

        alert("Ingrese una cantidad válida.");
        return;

    }

    document.getElementById("cantidadObras").disabled = true;
    btnComenzar.disabled = true;
    btnAgregar.disabled = false;

}

// Agregar una obra
function agregarObra(){

    let nombre = document.getElementById("nombre").value;
    let luces = Number(document.getElementById("luces").value);
    let horas = Number(document.getElementById("horas").value);
    let consumo = Number(document.getElementById("consumo").value);
    let costo = Number(document.getElementById("costo").value);

    if(nombre.trim()=="" || luces <= 0 || horas <= 0 || consumo <= 0 || costo <= 0){

        alert("Complete todos los datos correctamente.");
        return;

    }

    let consumoObra = luces * horas * consumo;
    consumoTotal += consumoObra;

    if(horas > mayorTiempo){

        mayorTiempo = horas;
        nombreMayorTiempo = nombre;
        costoMayorTiempo = consumoObra * costo;

    }

    if(luces > 20){

        obrasMas20Luces++;

    }

    obrasIngresadas++;

    document.getElementById("nombre").value = "";
    document.getElementById("luces").value = "";
    document.getElementById("horas").value = "";
    document.getElementById("consumo").value = "";
    document.getElementById("costo").value = "";

    if(obrasIngresadas == cantidadObras){

        btnAgregar.disabled = true;
        btnCalcular.disabled = false;

    }

}

// Calcular resultados
function calcularResultados(){

    let promedio = consumoTotal / cantidadObras;
    let porcentaje = (obrasMas20Luces * 100) / cantidadObras;

    document.getElementById("resultado").innerHTML =

    "<p><strong>Consumo total:</strong> " + consumoTotal.toFixed(2) + " kWh</p>" +

    "<p><strong>Consumo promedio:</strong> " + promedio.toFixed(2) + " kWh</p>" +

    "<p><strong>Mayor tiempo:</strong> " + nombreMayorTiempo + "</p>" +

    "<p><strong>Costo diario:</strong> $" + costoMayorTiempo.toFixed(2) + "</p>" +

    "<p><strong>Más de 20 luces:</strong> " + porcentaje.toFixed(2) + "%</p>";

    btnCalcular.disabled = true;
    btnReiniciar.disabled = false;

}

// Reiniciar el ejercicio
function reiniciar(){

    location.reload();

}
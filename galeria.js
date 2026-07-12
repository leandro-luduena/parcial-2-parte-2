// Array con las obras del artista
const obras = [

{
nombre:"Pulse Room",
año:2006,
imagen:"lozano-hemmer-3.jpg"
},

{
nombre:"Sphere Packing: Bach",
año:2001,
imagen:"lozano-hemmer-2.jpg"
},

{
nombre:"Vicious Circular Breathing",
año:1999,
imagen:"lozano-hemmer-1.jpg"
},

{
nombre:"Encode/Decode",
año:2000,
imagen:"lozano-hemmer.jpg"
}

]; 

const galeria = document.getElementById("galeria");
const boton = document.getElementById("cambiarDiseno");

boton.addEventListener("click", mostrarGaleria);

// Muestra la galería
function mostrarGaleria() {

    galeria.innerHTML = "";

    for (let i = 0; i < obras.length; i++) {

        galeria.innerHTML += `
            <div>
                <h3>${obras[i].nombre}</h3>
                <p>${obras[i].año}</p>
                <img src="${obras[i].imagen}" alt="${obras[i].nombre}">
            </div>
        `;

    }

}

let grande = false;

boton.addEventListener("click", cambiarDiseno);

function cambiarDiseno(){

    grande = !grande;

    if(grande){

        galeria.style.backgroundColor = "black";
        galeria.style.color = "white";

    }else{

        galeria.style.backgroundColor = "white";
        galeria.style.color = "black";

    }

}

const imagenes = document.querySelectorAll("#galeria img");

for(let i = 0; i < imagenes.length; i++){

    if(grande){

        imagenes[i].style.maxWidth = "300px";

    }else{

        imagenes[i].style.maxWidth = "600px";

    }

}
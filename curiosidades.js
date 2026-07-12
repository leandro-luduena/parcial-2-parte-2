const datosCuriosos = [

"Rafael Lozano-Hemmer es un artista mexicano-canadiense.",

"Ha expuesto en más de 70 países.",

"Pulse Room utiliza los latidos del público.",

"Vectorial Elevation se controlaba por Internet.",

"Fue ganador del Ars Electronica.",

"Utiliza sensores biométricos.",

"Estudió ingeniería.",

"Trabaja con tecnología en tiempo real.",

"Sus obras necesitan la participación del público.",

"Explora temas de identidad y vigilancia."

];

function mostrarDato(){

let numero=Math.floor(Math.random()*datosCuriosos.length);

document.getElementById("dato").innerHTML=datosCuriosos[numero];

}

mostrarDato();
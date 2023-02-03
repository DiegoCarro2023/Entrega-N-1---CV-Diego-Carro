/* En esta porción de código se define la función ocultarSecciones(),
que luego será utilizada en los botones de "Selección de Secciones",
con la finalidad de reutilizar código.
Asimismo, esta función se redacta de cuatro formas distintas (todas ellas funcionan):
En la primera el ocultamiento de los <section> se realiza en forma exhaustiva.
En las tres siguientes se utilizan iteradores.
Se elige el uso del "for" porque es el más "compacto", menos líneas de código.
La finalidad en sí no es lograr que los botones "funcionen", sino aportar elementos para
la evaluación del Proyecto Final.

function ocultarSecciones() {
    document.getElementById("section1").style.display="none"
    document.getElementById("section2").style.display="none"
    document.getElementById("section3").style.display="none"
    document.getElementById("section4").style.display="none";
}

function ocultarSecciones() {
  let x=1 
  while (x <= 4) {
      document.getElementById("section"+x).style.display="none"
      x++;
  }
}

function ocultarSecciones() {
    let x=1 
    do {
        document.getElementById("section"+x).style.display="none"
        x++;
    } while (x <= 4)
  }
*/

function ocultarSecciones() {
  for (x = 1; x <= 4; x++) {
    document.getElementById("section"+x).style.display="none"
  }
}

document.getElementById("boton1").addEventListener("click", function() {
    document.getElementById("section1").style.display="block"
    document.getElementById("section2").style.display="block"
    document.getElementById("section3").style.display="block"
    document.getElementById("section4").style.display="block";
});

document.getElementById("boton2").addEventListener("click", function() {
    ocultarSecciones()
    document.getElementById("section2").style.display="block";
});

document.getElementById("boton3").addEventListener("click", function() {
    ocultarSecciones()
    document.getElementById("section3").style.display="block";
});

document.getElementById("boton4").addEventListener("click", function() {
    ocultarSecciones()
    document.getElementById("section4").style.display="block";
});

// Obtención de los Datos Personales y Foto de Perfil desde "Random User Generator"

fetch('https://randomuser.me/api/?nat=es&gender=male&noinfo&inc=name,location,email,dob,cell,id,picture')
.then(response => response.json())
//   .then(json => console.log(json))
.then(json => (document.getElementById("nombre_y_apellido").innerHTML = "Nombre y Apellido: "+json.results[0].name.first
+" "+json.results[0].name.last) +
(document.getElementById("edad").innerHTML = "Edad: "+json.results[0].dob.age) +
(document.getElementById("dni").innerHTML = "DNI: "+json.results[0].id.value) +
(document.getElementById("domicilio").innerHTML = "Domicilio: "+json.results[0].location.street.name+" "+
json.results[0].location.street.number+", "+json.results[0].location.city+", "+json.results[0].location.country) +
(document.getElementById("celular").innerHTML = "Celular: "+json.results[0].cell) +
(document.getElementById("email").innerHTML = "Email: "+json.results[0].email) + 
(document.getElementById("img_perfil").src=json.results[0].picture.large))
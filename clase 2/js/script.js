var formulario;

window.addEventListener('load',inicializarEventos);
function inicializarEventos(){
   // formulario=document.getElementsByTagName('form')[0]
   // formulario=document.forms[0];
    //quiero atajar el metodo submit
  //  formulario.addEventListener('submit');
    //queda al final
    document.forms[0].addEventListener('submit',function(e){
    //lo que desencadena es que el formulario haga el evento submit no el boton
    console.log(document.forms[0]);
    e.preventDefault();
    var informacion="";
    informacion += "Nombre: " + document.getElementById('txtnombre').value + "<br>";
    informacion += "Contraseña_ " + document.getElementById('txtClave').value;
    if(document.getElementById('chkjs').checked)
    {
        informacion +="<br>  Sabe javascript"; 

    }
    else {
        informacion += "<br> No sabe javascript";
    }
    document.getElementById('info').innerHTML=informacion;
    });
}

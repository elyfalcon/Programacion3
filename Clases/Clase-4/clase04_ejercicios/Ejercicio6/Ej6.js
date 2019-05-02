function VerificarNombre() {
    var xhttp = new XMLHttpRequest();
    var nombre = document.getElementById("txtName").value;
    xhttp.open("POST", "comprobarDisponibilidad.php", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send("txtName=" + nombre);
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.responseText);
            if (xhttp.responseText === "si") {
                alert("El usuario ya se encuentra registrado!!");
            }
            else {
                alert("Usuario registrado!!");
            }
        }
    };
}

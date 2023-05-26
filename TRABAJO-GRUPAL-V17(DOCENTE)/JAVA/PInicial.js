function cargar()
{
    var usua, contra, c

    usua=document.getElementById("Usuario").value;
    contra=document.getElementById("Contraseña").value;

    if(usua == "docente" && contra == "1234")
    {
        window.location = "EncabeyLat.html";
    }
    if(usua == "alumno" && contra == "4321")
    {
        window.location = "PAlumno.html";
    }
    else{
        alert("Datos incorrectos");
    }
}

function MostrarContraseña()
{
    var most, contra
    most=document.getElementById("Mostrar");
    contra=document.getElementById("Contraseña");

    document.addEventListener("change",(e)=>
    {
        if(e.target === most)
        {
            if(most.checked === false)
            contra.type = "password";
            else contra.type = "text";
        }
    }
    );
}


/*PARA EL REGISTRO DE NUEVO USUARIO*/

function Do()
{
    var x= document.getElementById("Docente");
    var y= document.getElementById("Estudiante");
    var z= document.getElementById("efecto");

    x.style.left="50px";
    y.style.left="450px";
    z.style.left="0px";
}

function Est()
{
    var x= document.getElementById("Docente");
    var y= document.getElementById("Estudiante");
    var z= document.getElementById("efecto");
    var b=document.getElementById("BarraDeFondo");

    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="100px";
}
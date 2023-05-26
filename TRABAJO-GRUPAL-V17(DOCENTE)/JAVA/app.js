/*es de la calificacion de asesoria*/
/*creando una var const con todos los elementos de la clase star*/
const stars = document.querySelectorAll('.star');

/*recorriendo con foreach*/
stars.forEach(function(star, CalificaAseso){
    star.addEventListener('click',function() {
        /*desde el primer hasta el ultim elemento pinta*/
        for (let i=0; i<=CalificaAseso; i++){
            stars[i].classList.add('checked');
        }
        /*despintar*/
        for (let i=CalificaAseso+1; i<stars.length; i++){
            stars[i].classList.remove('checked');
        }
    })
})
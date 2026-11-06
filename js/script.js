// auto-actualización del año en el footer
document.addEventListener('DOMContentLoaded'), ()=>{
    const anioActual = document.getElementById('anio');
    if(anioActual){
        anioActual.textContent = new Date().getFullYear();
    }
// botón Ir Arriba dinámico
    const btnIrArriba = document.getElementById('btn-ir-arriba');
    if(btnIrArriba){
        window.addEventListener('scroll'), ()=>{
            if(window.scrollY > 200){
                btnIrArriba.classList.add('show');
            }
            else {
                btnIrArriba.classList.remove('show');
            }
        };
    }
};



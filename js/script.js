// Auto-actualización del año en el footer
document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('anio');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});

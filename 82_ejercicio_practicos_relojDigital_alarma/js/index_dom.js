import hamburgerMenu from "./dom/menu_hamburgesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";   // destructuracion: importar solo una funcion de un modulo  

const d = document;
d.addEventListener('DOMContentLoaded', (e) => {
    hamburgerMenu('.panel-btn', '.panel', '.menu a');//se invoca la funcion hamburgerMenu con los parametros que se le pasan ('.panel-btn', '.panel')que esta en el archivo menu_hamburgesa.js dentro del archivo menu_hamburgesa.js  al caragar el DOM 
    digitalClock('#reloj', '#activar_reloj', '#desactivar_reloj');
}); 
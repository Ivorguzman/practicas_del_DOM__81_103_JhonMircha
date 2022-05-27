import hamburgerMenu from "./dom/menu_hamburgesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";   // destructuracion: importar solo una funcion de un modulo  

const d = document;
d.addEventListener('DOMContentLoaded', (e) => {
    hamburgerMenu('.panel-btn', '.panel', '.menu a');
    digitalClock('#reloj', '#activar_reloj', '#desactivar_reloj');
    alarm('assets/alarma.mp3', '#activar_alarma', '#desactivar_alarma');
}); 
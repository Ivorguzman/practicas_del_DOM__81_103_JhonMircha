import hamburgerMenu from "./dom/menu_hamburgesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";    
import { shortcuts } from "./dom/teclado.js";

const d = document;
d.addEventListener('DOMContentLoaded', (e) => {
    hamburgerMenu('.panel-btn', '.panel', '.menu a');
    digitalClock('#reloj', '#activar_reloj', '#desactivar_reloj');
    alarm('assets/alarma.mp3', '#activar_alarma', '#desactivar_alarma');

}
); 

d.addEventListener('keydown', (e) => {
    shortcuts(e)
})
// d.addEventListener('keyup', (e) => {
//     shortcuts(e)
// }) 
// d.addEventListener('keypress', (e) => {
//     shortcuts(e)
// })
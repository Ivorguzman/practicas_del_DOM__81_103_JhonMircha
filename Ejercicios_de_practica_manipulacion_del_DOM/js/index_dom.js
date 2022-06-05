import countDown from './dom/cuentaRegresiva.js';
import hamburgerMenu from "./dom/menu_hamburgesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";    
import { shortcuts, moveBall} from "./dom/teclado.js";
// import { id, limitDate, finalMessage }from "./cuentaRegresiva.js"

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
    hamburgerMenu('.panel-btn', '.panel', '.menu a');
    digitalClock('#reloj', '#activar_reloj', '#desactivar_reloj');
    alarm('assets/alarma.mp3', '#activar_alarma', '#desactivar_alarma');
    countDown('countDown','April 01,2023 03:00:00','!Feliz cumpleaños¡  Alexander');

}
); 

d.addEventListener('keydown', (e) => {
    shortcuts(e);
    moveBall(e,".ball",".stage")

})





// d.addEventListener('keyup', (e) => {
//     shortcuts(e)
// }) 
// d.addEventListener('keypress', (e) => {
//     shortcuts(e)
// })
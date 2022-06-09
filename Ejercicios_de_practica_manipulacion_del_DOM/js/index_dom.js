import countDown from './dom/cuentaRegresiva.js';
import hamburgerMenu from "./dom/menu_hamburgesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { shortcuts, moveBall } from "./dom/teclado.js";
import scrollTopButton from "./dom/btn_scroll.js";
import darkTheme from './dom/tema_oscuro.js';

const d = document;

d.addEventListener('DOMContentLoaded', () => {
    hamburgerMenu('.panel-btn', '.panel', '.menu a');
    digitalClock('#reloj', '#activar_reloj', '#desactivar_reloj');
    alarm('assets/alarma.mp3', '#activar_alarma', '#desactivar_alarma');
    countDown('countDown', 'April 01,2023 03:00:00', '!Feliz cumpleaños¡  Alexander');
    scrollTopButton('.scroll__top-bnt');
    darkTheme('.dark__theme-btn', 'dark__mode');


}
);

d.addEventListener('keydown', (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");

});





// d.addEventListener('keyup', (e) => {
//     shortcuts(e)
// })
// d.addEventListener('keypress', (e) => {
//     shortcuts(e)
// })
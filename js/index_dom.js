import countDown from './dom/cuentaRegresiva.js';
import hamburgerMenu from "./dom/menu_hamburgesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { shortcuts, moveBall } from "./dom/teclado.js";
import scrollTopButton from "./dom/btn_scroll.js";
import darkTheme from './dom/tema_oscuro.js';
import responsiveMedia from './dom/objeto_responsinve.js'
import responsiveTester from './dom/prueba_reponsive.js';
import userDiviceInfo from './dom/deteccion_dispositivos.js';

const d = document;

darkTheme('.dark__theme-btn', 'dark__mode');
d.addEventListener('DOMContentLoaded', () => {
    hamburgerMenu('.panel-btn', '.panel', '.menu a');

    digitalClock('#reloj', '#activar_reloj', '#desactivar_reloj');

    alarm('assets/alarma.mp3', '#activar_alarma', '#desactivar_alarma');

    countDown('countDown', 'April 01,2023 03:00:00', '!Feliz cumpleaños¡  Alexander');

    scrollTopButton('.scroll__top-bnt');

    responsiveMedia("youtube","(min-width:1024px)",`<a href="https://www.youtube.com/watch?v=lpVKpaxy0OQ&t=1026s"> Ver Video </a>` , `<iframe width="560" height="315" src="https://www.youtube.com/embed/lpVKpaxy0OQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);b

    responsiveMedia("gmaps","(min-width:1024px)",`<a href="https://goo.gl/maps/uzwJumriXqKCLAjp6">Ver mapa </a>` ,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.3029173400187!2d-72.23341638465219!3d7.757662894408876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e666d286507b0c3%3A0x3e5cfedf10807bec!2sFundaci%C3%B3n%20Pan%20de%20Vida!5e0!3m2!1ses-419!2sve!4v1655121223404!5m2!1ses-419!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);

    responsiveTester("responsive_tester");

    userDiviceInfo("use-device");
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


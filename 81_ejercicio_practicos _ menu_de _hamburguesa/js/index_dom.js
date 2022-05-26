import hamburgerMenu from "./menu_hamburgesa.js";


const d = document;
d.addEventListener('DOMContentLoaded', (e) => {
    hamburgerMenu('.panel-btn', '.panel', '.menu a');//se invoca la funcion hamburgerMenu con los parametros que se le pasan ('.panel-btn', '.panel')que esta en el archivo menu_hamburgesa.js dentro del archivo menu_hamburgesa.js  al caragar el DOM 

}); 
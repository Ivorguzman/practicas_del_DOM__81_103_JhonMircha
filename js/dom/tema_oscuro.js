
/// Los atributos data-  permiten almacenar información adicional sobre un elemento HTML cualquiera 
/// La sintáxis es simple. Un atributo cualquiera cuyo nombre comience con data-es un atributo de datos.

const w = window;
const d = w.document;
const ls = w.localStorage;

//codigode modo oscuro y claro 
/*👉
    const d = document;
    export default function darkTheme(btn, classDark) {
        const btnDataAttributes = d.querySelector(btn);
        const $selectorAtibutoData = d.querySelectorAll("[data-dark]");// se referencia el atributo html data
        console.log($selectorAtibutoData);
        let moon = "🌙";
        let sun = "☀️";
        d.addEventListener('click', e => {
            if (e.target.matches(btn)) {
                console.log(btnDataAttributes.textContent);
                console.log(moon);
                if (btnDataAttributes.textContent === moon) {
                    console.log('Hola dentro if');
                    $selectorAtibutoData.forEach((item) => {
                        item.classList.add(classDark);
                    });
                    btnDataAttributes.textContent = sun;
                } else {
                    console.log('Hola dentro else');
                    $selectorAtibutoData.forEach((item) => {
                        item.classList.remove(classDark);
                    });
                    btnDataAttributes.textContent = moon;
                }
                console.log('Hola fuera del if-else');

            }
        });

    };

👈*/


// codigo refactorizdo de modo oscuro y claro para uso de loacStored

export default function darkTheme(btn, classDark) {
    const btnDataAttributes = d.querySelector(btn);
    const $selectorAtibutoData = d.querySelectorAll("[data-dark]");// se referencia el atributo html data
    // console.log($selectorAtibutoData);
    let moon = "🌙";
    let sun = "☀️";

    const lightMode = () => {
        $selectorAtibutoData.forEach((item) => { item.classList.add(classDark); });
        btnDataAttributes.textContent = sun;
        ls.setItem('theme', 'light');
    };
    const darkMode = () => {
        $selectorAtibutoData.forEach((item) => { item.classList.remove(classDark); });
        btnDataAttributes.textContent = moon;
        ls.setItem('theme', 'dark');
    }
    d.addEventListener('click', e => {
        if (e.target.matches(btn)) {
            // console.log(e.target.matches(btn))
            if (btnDataAttributes.textContent === moon) {
                lightMode();
            } else {
                darkMode();
            }
        }
    });
    d.addEventListener('DOMContentLoaded', (e) => {
        // console.log(ls.getItem('theme '));
        if (ls.getItem('theme') === null) {
            console.log('Dentro del if');
            ls.setItem('theme', 'light');
        };
        if (ls.getItem('theme') === 'light') {
            // console.log('Dentro del if 2');
            ls.setItem('theme', 'dark');
            lightMode();
         }
        if (ls.getItem('theme') === 'dark') {
            console.log('Dentro del if 3');
            darkMode();
        }
    });

};
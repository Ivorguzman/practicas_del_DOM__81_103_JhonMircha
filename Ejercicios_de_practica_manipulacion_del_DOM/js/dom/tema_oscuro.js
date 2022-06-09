
/// Los atributos data-  permiten almacenar información adicional sobre un elemento HTML cualquiera 
/// La sintáxis es simple. Un atributo cualquiera cuyo nombre comience con data-es un atributo de datos.

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

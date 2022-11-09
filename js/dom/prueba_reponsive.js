const d = document;
const w = window;
export default function responsiveTester(form) {
    const $form = d.getElementById(form);
    let tester;
    const $cerrar = d.getElementById('cerrar');
    // console.log($cerrar);
    d.addEventListener('submit', (e) => {
        console.log(form);
        console.log(e.target);
        console.log($form);
        console.log($form.cerrar);
        if (e.target === $form) {
            e.preventDefault();
            console.log('Son Iguales');
            tester = w.open($form.direccion.value,
                '_blank',
                `innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}`);
            console.log(tester);
        }
    });
    d.addEventListener('click', (e) => {
        if (e.target === $form.cerrar) {
            console.log('Entre a cerrar');
            tester.close();

        }

    });


};
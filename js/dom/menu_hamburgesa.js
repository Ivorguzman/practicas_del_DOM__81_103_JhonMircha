export default function hamburgerMenu($panelBtn, $panel,$menu) {
    const d = document;

    // delegacion de eventos
    d.addEventListener('click', (e) => {
        //.target Devuelve el objeto al que se envía el evento (su destino)
        if (e.target.matches($panelBtn) || e.target.matches(`${$panelBtn} *`)) {
            console.log(e.target);
            d.querySelector($panel).classList.toggle('panel_active');
            d.querySelector($panelBtn).classList.toggle('is-active');
        }
        if(e.target.matches($menu) ){
            console.log(e.target);
            d.querySelector($panel).classList.remove('panel_active');
            d.querySelector($panelBtn).classList.remove('is-active');
        }
    });
}

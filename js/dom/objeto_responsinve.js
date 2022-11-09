const d = document;
const w = window;
export default function responsiveMedia(id, mq, mobileContent, destokContent) {
    let breakPoint = w.matchMedia(mq); //El método Window.matchMedia() devuelve un nuevo objeto MediaQueryList que representa los analizados de la media query indicada.
    const reponsive = (e) => {
/*👉        console.log(mq)
        console.log(breakPoint)
        console.log(e.matches);//El método matches() comprueba si el Element sería seleccionable por el selector CSS devolbiendo true si  fue selecionado o false si no es seleccionado👈*/
        if (e.matches) {
            d.getElementById(id).innerHTML = destokContent;
        } else {
            d.getElementById(id).innerHTML = mobileContent;
        }
    };
    breakPoint.addListener(reponsive);

    reponsive(breakPoint)

}

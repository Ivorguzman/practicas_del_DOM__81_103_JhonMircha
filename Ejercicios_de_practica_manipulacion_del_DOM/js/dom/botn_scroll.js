const d = document;
const w = window;
export default function scrollTopButton(btn) {
    const $scrollBtn = d.querySelector(btn);

    w.addEventListener('scroll', (e) => { // aparece o desaparece segun la distacia de Punto (0,0) > 600 aparece < 600 desaparece
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        (scrollTop < 1020) ? $scrollBtn.classList.add('hidden') : $scrollBtn.classList.remove('hidden');
        console.log(w.pageYOffset);
        console.log(d.documentElement.scrollTop);
    });
    d.addEventListener('click', (e) => {// detectar un click en el boton
        // (e.target) ? console.log(e.target) : console.log('No has cliuiadoenel documento. Has clic en algun lado del documento');
        if (e.target.matches(btn)) {
            w.scrollTo(
                {
                    behavior: "smooth",
                    top:0
                }
            )
        }
    });
 // (e.target.matches(btn)) ? ):;

};



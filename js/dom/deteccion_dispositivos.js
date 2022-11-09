const w = window;
const d = document;
const n = navigator;//  oj0 n==> con minuscaula 
const ua = n.userAgent;

console.log(this);// Oj0 No se porque no hay this

export default function userDiviceInfo(id) {
    console.log(this);// Oj0 No se porque no hay this
    console.log(ua);
    const $id = d.getElementById(id);
    // validar si visita de ub sistema operativo mobil;
    const isMobile = {
        android: () => ua.match(/andoid/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        window: () => ua.match(/window phone/i),
        any: function () {
            return this.android() || this.ios() || this.window();
        },
    };
    const isDesktop = { // validar si visita de un sistema operativo de escritorio;
        linux: () => ua.match(/linux/i),
        mac: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any: function () {
            // console.log(this.android());
            return this.linux() || this.mac() || this.windows();
        },
    };
    const isBrowser = { //  validar si navega por un determinado navegador;
        chrome: () => { ua.match(/chrome/i); },
        safari: () => ua.match(/safari/i),
        firefox: () => ua.match(/firefox/i),
        opera: () => ua.match(/opera opera mini/i),
        ie: () => ua.match(/msie|iemobile/i),
        edge: () => ua.match(/edge/i),
        any: function () {
            return this.ie() || this.edge() || this.chrome() || this.safari() || this.firefox() || this.opera();
        },

    };
    console.log(typeof (isMobile));
    console.log(typeof (isDesktop));
    console.log(typeof (isBrowser));
    console.log(typeof (isMobile.any()));
    // let informe = `
    // <ul>
    //     <li>User Agent: <b>${ua}</b></li>
    //     <li> Plataforma:<b> ${isMobile.any() ? isMobile.any() : isBrowser.any()}</b></li>

    // </ul>
    // `;
    // $id.innerHTML = informe;

    $id.innerHTML = `
    <ul>
        <li>User Agent: <b>${ua}</b></li>
        <li> Plataforma:<b> ${(isMobile.any()) ? isMobile.any() : isBrowser.any()}</b></li>

    </ul>
    `;


    ///  Contedios exclusivos de los navegadores ( NO estan validadndo bien)

    if (isBrowser.chrome()) {
        // $id.innerHTML = informe += ` <p><mark>Este contenido solo se ve en Chrome</mark></p>`;
         $id.innerHTML += ` <p><mark>Este contenido solo se ve en Chrome</mark></p>`;
    }
    if (isBrowser.safari()) {
        // $id.innerHTML = informe += ` <p><mark>Este contenido solo se ve en Chrome</mark></p>`;
         $id.innerHTML += ` <p><mark>Este contenido solo se ve en safari</mark></p>`;
    }
    if (isBrowser.firefox()) {
        // $id.innerHTML = informe += ` <p><mark>Este contenido solo se ve en Chrome</mark></p>`;
         $id.innerHTML += ` <p><mark>Este contenido solo se ve en firefox</mark></p>`;
    }
    if (isBrowser.edge()) {
        // $id.innerHTML = informe += ` <p><mark>Este contenido solo se ve en Chrome</mark></p>`;
         $id.innerHTML += ` <p><mark>Este contenido solo se ve en edge</mark></p>`;
    }

// rediereciones
    if (isMobile.ios()) {
        w.location.href = 'https://pandevida.netlify.app/';
    }

};

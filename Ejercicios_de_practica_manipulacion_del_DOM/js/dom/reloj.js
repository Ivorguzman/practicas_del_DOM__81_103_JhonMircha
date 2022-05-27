export function digitalClock($clock, $btnPlay, $btnStop) {
    const d = document;
    let clockTempo; //variable que controla el temporizador
    d.addEventListener('click', (e) => {
        if (e.target.matches($btnPlay)) {
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector($clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);
            e.target.disabled = true;
        }
        if (e.target.matches($btnStop)) {
            clearInterval(clockTempo);
            d.querySelector($clock).innerHTML = null;
            d.querySelector($btnPlay).disabled = false;
        };
    });
};
export function alarm($sound, $btnPlay, $btnStop) {
    console.log($btnPlay)
    let alarmaTempo;//variable que controla el temporizador
    const $alarm = d.createElement("audio");
    // Delegacion de evnto
    d.addEventListener('click', (e) => {
        if (e.target.matches($btnPlay)) {
            alarmaTempo = setTimeout(() => {

            }, 1000);


        }
    });
};


/// PointerEvent{}
// La PointerEventinterfaz representa el estado de un evento DOM producido por un puntero, como la geometría del punto de contacto, el tipo de dispositivo que generó el evento, la cantidad de presión que se aplicó en la superficie de contacto, etc.

// Un puntero es una representación independiente del hardware de los dispositivos de entrada (como un mouse, un lápiz o un punto de contacto en una superficie táctil). El puntero puede apuntar a una coordenada específica (o conjunto de coordenadas) en la superficie de contacto, como una pantalla.

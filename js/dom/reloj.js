const d = document;

export function digitalClock($clock, $btnPlay, $btnStop) {
    let clockTempo; //variable que controla el temporizador
    d.addEventListener('click', (e) => {
        if (e.target.matches($btnPlay)) {
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector($clock).innerHTML = `<h1>${clockHour}</h1>`;
            }, 1000);
            d.querySelector($btnPlay).disabled = true;
        }
        if (e.target.matches($btnStop)) {
            clearInterval(clockTempo);
            d.querySelector($clock).innerHTML = null;
            d.querySelector($btnPlay).disabled = false;
        };
    });
};
export function alarm($sound, $btnPlay, $btnStop) {
    let alarmTempo;//variable que controla el temporizador
    const $alarm = d.createElement("audio");
    $alarm.src = $sound;
    // Delegacion de evnto
    d.addEventListener('click', (e) => {
        if (e.target.matches($btnPlay)) {
            alarmTempo = setTimeout(() => {
                $alarm.play();
            }, 100);
            d.querySelector($btnPlay).disabled = true;
        }
        if (e.target.matches($btnStop)) {
            clearTimeout(alarmTempo);
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector($btnPlay).disabled = false;
        }
    });
};



/// PointerEvent{}
// La PointerEventinterfaz representa el estado de un evento DOM producido por un puntero, como la geometría del punto de contacto, el tipo de dispositivo que generó el evento, la cantidad de presión que se aplicó en la superficie de contacto, etc.

// Un puntero es una representación independiente del hardware de los dispositivos de entrada (como un mouse, un lápiz o un punto de contacto en una superficie táctil). El puntero puede apuntar a una coordenada específica (o conjunto de coordenadas) en la superficie de contacto, como una pantalla.

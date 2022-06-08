
const d = document;

export default function countDown(id, limitDate, finalMessage) {

    console.log(limitDate);
    const $countDown = d.getElementById(id);
    const countDownDate = new Date(limitDate).getTime();


    let countDownTempo = setInterval(() => {
        let now = new Date().getTime();
        let limitTime = countDownDate - now;
        let days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
            hours = ('0' + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2),
            minutes = ('0' + Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2),
            seconds = ('0' + Math.floor(limitTime % (1000 * 60) / (1000))).slice(-2);

        $countDown.innerHTML = `<h3> Faltan: ${days} dias, ${hours} Horas ${minutes} minutos, y  ${seconds} segundos   </h3>`;

        if (limitTime < 0) {
            clearInterval(countDownTempo);
            $countDown.innerHTML = null;
            $countDown.innerHTML = ` <h1>${finalMessage}</h1>`;
        }

    }, 1000);

}

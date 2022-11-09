const d = document;
let x = 0;
let y = 0;
// console.log()




export function moveBall(e, ball, stage) {
    console.log(e);
    console.log(ball);
    console.log(stage);
    
    const $ball = d.querySelector(ball);
    const $stage = d.querySelector(stage);
    let limitBall = $ball.getBoundingClientRect();
    let limitStage = $stage.getBoundingClientRect();
    console.log(limitBall);
    console.log(limitStage);

    console.log($ball.style.transform = `translate(${x}px, ${y}px)`);
    console.log($ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`);
    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    

    switch (e.keyCode) {
        case 37:
            console.log(e.key, e.keyCode);
            console.log(limitBall.left);
            console.log(limitStage.left);
            if (limitBall.left > limitStage.left) {
                e.preventDefault();
                x = x - .3;
            };
            // x--;
            // x = x - .3;
            break;
        case 38:
            console.log(e.key, e.keyCode);
            console.log(limitBall.top);
            console.log(limitStage.top);
            if (limitBall.top > limitStage.top) {
                e.preventDefault();
                y = y - .3;
            };
            // y--
            // y = y - .3;
            break;
        case 39:
            console.log(e.key, e.keyCode);

            console.log(limitBall.right);
            console.log(limitStage.right);
            if (limitBall.right < limitStage.right) {
                e.preventDefault();
                x = x + .3;
            };
            // x++;
            // x = x + .3;
            break;
        case 40:
            console.log(e.key, e.keyCode);
            console.log(limitBall.right);
            console.log(limitStage.right);
            if (limitBall.bottom < limitStage.bottom) {
                e.preventDefault();
                y = y + .3;

            };
            // y++
            // y = y + .3;
            break;
        default:
            break;

    }




};


export function shortcuts(e) {
    // console.log(e);
    // console.log(e.type);
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(e.ctrlKey);
    // console.log(e.altKey);
    // console.log(e.shiftKey);
    // console.log(e);
    // console.log(e.altKey);

    // if (e.key === 'c' && e.ctrlKey=== true) { alert('Presionaste las teclas Ctrl -> c') };
    // if (e.key === 'm' && e.altKey === true) { confirm('Presionaste las teclas Alt ->  m'); };
    // if (e.key === 'p' && e.ctrlKey === true) { prompt('Presionaste las teclas ctrl -> p'); };

    // if (e.key === 'i' && e.ctrlKey === true && e.altKey === true) { confirm('Presionaste las teclas Ctrl + Alt  ->  i'); };
}
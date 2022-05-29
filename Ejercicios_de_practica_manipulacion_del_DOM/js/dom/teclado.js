const d = document;

export function shortcuts(e) {
    // console.log(e);
    // console.log(e.type);
    console.log(e.key);
    // console.log(e.keyCode);
    // console.log(e.ctrlKey);
    // console.log(e.altKey);
    console.log(e.shiftKey);
    // console.log(e);
    // console.log(e.altKey);

    // if (e.key === 'c' && e.ctrlKey=== true) { alert('Presionaste las teclas Ctrl -> c') };
    if (e.key === 'm' && e.altKey === true) { confirm('Presionaste las teclas Alt ->  m'); };
    // if (e.key === 'p' && e.ctrlKey === true) { prompt('Presionaste las teclas ctrl -> p'); };

    if (e.key === 'i' && e.ctrlKey === true && e.altKey === true) { confirm('Presionaste las teclas Ctrl + Alt  ->  i') };
}

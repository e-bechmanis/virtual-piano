// Event listener that registers which key was pressed on keyboard
document.addEventListener('keydown', (e) =>{
    const keys = "ASDFGHJ";
    let key = e.key.toUpperCase();
    keys.includes(key) ? console.log(`The '${key}' Key is pressed.`) : console.error('Unrecognized key!');
})
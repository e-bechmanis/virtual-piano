// The original code I wrote for JetBrains task
/*document.addEventListener('keydown', (e) =>{
    const keys = "ASDFGHJWETYU";
    let key = e.key.toUpperCase();
    let audio = keys.includes(key) ? new Audio(`keys_sounds/${key}.mp3`) : console.error('Unrecognized key!');
    if (audio) audio.play();
})*/

// Updated JS without using keyboard (the original option wasn't user friendly)
document.addEventListener('click', (e) => {
    const keys = ["do", "re", "mi", "fa", "so", "la", "ti", "do-o", "do-s", "re-s", "fa-s", "so-s", "la-s"];
    let key = e.target.id;
    let audio = keys.includes(key) ? new Audio(`keys_sound/${key}.mp3`) : console.error('Unrecognized key!');
    if (audio) audio.play();
})
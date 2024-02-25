const btn = document.getElementById('btn');
const colors = ['green', 'yellow', 'red'];
let colorIndex = 0;
btn.addEventListener('click', changeColor);

function changeColor() {
    btn.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
    resetTimer();
}

let timer = setInterval(changeColor, 10000);

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(changeColor, 10000);
}

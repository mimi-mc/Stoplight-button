const btn = document.getElementById('btn');
const colors = ['green', 'yellow', 'red'];
let colorIndex = 0;

btn.addEventListener('click', function changeColor() {
    btn.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});

const btn = document.getElementById('btn');

let colorIndex = 0;

const colors = ['green', 'yellow', 'red'];

btn.addEventListener('click', function changeColor() {
    btn.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});

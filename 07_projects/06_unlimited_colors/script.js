const start = document.querySelector('#start')

const stop = document.querySelector('#stop')

const body = document.querySelector('body')

const randomHexColorCode = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

console.log(randomHexColorCode());

let changingColors = 0;
function changeColor() {
    let color = randomHexColorCode();
    console.log(color);
    body.style.backgroundColor = color;
}

start.addEventListener('click', function () {
    if (!changingColors) {
        changingColors = setInterval(changeColor, 1000)
    }
})

stop.addEventListener('click', function () {
    clearInterval(changingColors)
    changingColors = null;
})
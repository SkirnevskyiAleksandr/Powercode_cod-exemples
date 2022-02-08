'use strict'
// cod without 'promises'

// const arr = [
//     { x: 50, y: 100 },
//     { x: 0, y: 50 },
//     { x: 50, y: 0 },
//     { x: 100, y: 50 }
// ]
// let i = 0;
// let id = null;
// let mouseInterval = null
// const block = document.querySelector('div')
// function start() {

//     clearTimeout(mouseInterval)
//     clearInterval(id)
//     move(50, 50)
//     i = 0;
//     block.style.display = 'none';

//     mouseInterval = setTimeout(() => {
//         id = setInterval(() => {
//             block.style.display = "block"
//             const { x, y } = arr[i]
//             move(x, y)
//             i++
//             if (arr.length === i) { i = 0 }
//         }, 1000)
//     }, 5000)

// }

// function move(x, y) {
//     block.style.top = `${x}%`;
//     block.style.left = `${y}%`;
// }
// start()
// window.addEventListener('mousemove', start())

const BALL = document.querySelector('div')
const PATH = [
    { x: 50, y: 100 },
    { x: 0, y: 50 },
    { x: 50, y: 0 },
    { x: 100, y: 50 }
]
let i = 0;
let idStart = null;
let mouseInterval = null
let timeLastMove = new Date().getTime()

function move(x, y) {
    BALL.style.top = `${x}%`;
    BALL.style.left = `${y}%`;
}

function sleep(delay = 1000) {
    return new Promise((r) => setTimeout(r, delay))
}

(async function () {
    while (true) {
        await sleep();
        if (new Date().getTime() - timeLastMove < 3000) {
            BALL.style.display = 'none';
            i = 0;
            move(50, 50)
            continue;
        } else {
            BALL.style.display = 'block';
            await sleep(0)
        }
        const { x, y } = PATH[i];
        move(x, y);
        if (++i === PATH.length) {
            i = 0
        }
    }
}
)()
window.addEventListener('mousemove', (e) => {
    timeLastMove = new Date().getTime();
})
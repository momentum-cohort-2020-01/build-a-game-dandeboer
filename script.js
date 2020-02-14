let canvas = document.querySelector("#game-screen")
let gameLoaded = false
let screen = canvas.getContext("2d")
let x = canvas.width / 2
let y = canvas.height / 2

canvas.addEventListener("click", function () {
    if (gameLoaded === false) {
        console.log("loading game")
        new Game()
        gameLoaded = true
    }
})

class Game {
    constructor() {
        this.tick()
        new Keyboarder()
    }
    tick = function tick() {
        //console.log("tick")
        requestAnimationFrame(tick)
        draw()
        update()
    }
}



function draw() {
    screen.clearRect(x-2, y-2, 24, 24)
    screen.beginPath()
    screen.rect(x, y, 20, 20)
    screen.fill()
    screen.closePath()
}

function update() {

}

class Keyboarder {
    constructor() {
        window.addEventListener("keydown", function (e) {
            //console.log(e)
            if (e.keyCode === 65) {
                console.log("left") //65=A
                x = x - 2
            }
            if (e.keyCode === 68) { //68=D
                console.log("right")
                x = x + 2
            }
            if (e.keyCode === 87) { //W=87
                console.log("up")
                y = y - 2
            }
            if (e.keyCode === 83) { //S=83
                console.log("down")
                y = y + 2
            }

        })
        }    
}

class Player {
    constructor() {

    }
}

// class Keyboarder {
//     constructor() {
//         let keyState = {}
//         window.addEventListener("keydown", function(e) {
//             console.log(e)
//             keyState[e.keyCode] = true
//             console.log("keydown")
//         })
//         window.addEventListener("keyup", function(e) {
//             keyState[e.keyCode] = false
//             console.log("keyup")
//         })
//         this.isDown = function(keyCode) {
//             return keyState[keyCode] === true
//         }
//         this.KEYS = {left: 37, right: 39, up: 38, down: 40}
//     }
// }
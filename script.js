let canvas = document.querySelector("#game-screen")
let gameLoaded = false
let screen = canvas.getContext("2d")
let x = canvas.width / 2
let y = canvas.height / 2
let shoot = false
let shootAgain = true
let left
let right
let up
let down

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
    }
    tick = function tick() {
        //console.log("tick")
        player()
        controls()
        gun()
        update()
        requestAnimationFrame(tick)
        zombie()
    }
}

function player() {
    screen.clearRect(x - 3, y - 3, 26, 26)
    screen.beginPath()
    screen.rect(x, y, 20, 20)
    screen.fillStyle = "black"
    screen.fill()
    screen.closePath()
}

function gun() {
    if (shoot === true && shootAgain === true) {
        console.log("bang")
        shootAgain = false
    }
}

function controls() {
    window.addEventListener("keydown", function (e) {
        if (e.keyCode === 65) { 
            left = true
        }
        if (e.keyCode === 68) { 
            right = true
        }
        if (e.keyCode === 87) { 
            up = true
        }
        if (e.keyCode === 83) { 
            down = true
        }
        if (e.keyCode === 32) {
            shoot = true
        }
    })
    window.addEventListener("keyup", function (e) {
        if (e.keyCode === 65) {
            left = false
        }
        if (e.keyCode === 68) { 
            right = false
        }
        if (e.keyCode === 87) { 
            up = false
        }
        if (e.keyCode === 83) { 
            down = false
        }
        if (e.keyCode === 32) {
            shoot = false
            shootAgain = true
        }
    })
}

function update() {
    if (left === true) {
        x = x - 3
    }
    if (right === true) {
        x = x + 3
    }
    if (up === true) {
        y = y - 3
    }
    if (down === true) {
        y = y + 3
    }
}

function zombie() {
    screen.clearRect(50, 50, 20, 20)
    screen.beginPath()
    screen.rect(50, 50, 20, 20)
    screen.fillStyle = "#558000"
    screen.fill()
    screen.closePath()
}
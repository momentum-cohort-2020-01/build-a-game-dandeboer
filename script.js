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
let direction = "left"
let bulletX
let bulletY

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
        hand()
        controls()
        gun()
        update()
        requestAnimationFrame(tick)
        zombie()
    }
}

function player() {
    screen.clearRect(0, 0, canvas.width, canvas.height)
    screen.beginPath()
    screen.rect(x, y, 20, 20)
    screen.fillStyle = "#818181"
    screen.fill()
    screen.closePath()
}

function hand() {
    if (direction === "left") {
        screen.clearRect(0, 0, canvas.width, canvas.heigt)
        screen.beginPath()
        screen.rect(x-4, y+7, 6, 6)
        screen.fillStyle = "black"
        screen.fill()
        screen.closePath()
    }
    if (direction === "right") {
        screen.clearRect(0, 0, canvas.width, canvas.heigt)
        screen.beginPath()
        screen.rect(x+18, y+7, 6, 6)
        screen.fillStyle = "black"
        screen.fill()
        screen.closePath()
    }
    if (direction === "up") {
        screen.clearRect(0, 0, canvas.width, canvas.heigt)
        screen.beginPath()
        screen.rect(x+7, y-4, 6, 6)
        screen.fillStyle = "black"
        screen.fill()
        screen.closePath()
    }
    if (direction === "down") {
        screen.clearRect(0, 0, canvas.width, canvas.heigt)
        screen.beginPath()
        screen.rect(x+7, y+18, 6, 6)
        screen.fillStyle = "black"
        screen.fill()
        screen.closePath()
    }
} 

function gun() {
    if (shoot === true && shootAgain === true) {
        console.log("bang")
        bullet()
        shootAgain = false
    }
}

function bullet() {
    bulletX = x
    bulletY = y
    if (direction === "left") {
        console.log("bullet left")
    }
    if (direction === "right") {
        console.log("bullet right")
    }
    if (direction === "up") {
        console.log("bullet up")
    }
    if (direction === "down") {
        console.log("bullet down")
    }
}

function controls() {
    window.addEventListener("keydown", function (e) {
        if (e.keyCode === 65) {
            left = true
            direction = "left"
        }
        if (e.keyCode === 68) {
            right = true
            direction = "right"
        }
        if (e.keyCode === 87) {
            up = true
            direction = "up"
        }
        if (e.keyCode === 83) {
            down = true
            direction = "down"
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
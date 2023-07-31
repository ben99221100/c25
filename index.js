let arrows = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Arrow_left.svg/1280px-Arrow_left.svg.png', 
    'https://cdn-icons-png.flaticon.com/512/2/2231.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Arrow_right.svg/1280px-Arrow_right.svg.png',
    'https://clipart-library.com/img1/1236729.png',
]

// 0 - left
// 1 - up
// 2 - right
// 3 - down


let arrow = document.getElementById("arrow")

let computerPicked = 0

setInterval(pickImage, 3000)


function pickImage() {

    computerPicked = randomInteger(0, 3)
    arrow.setAttribute("src", arrows[computerPicked])

}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
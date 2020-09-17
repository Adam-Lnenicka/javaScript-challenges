const width = 25
const grid = document.querySelector('.grid')
const scoreDisplay = document.getElementById('score')
let squares = []

const layout = [

    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,
    1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,2,
    1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,
    1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,2,
    1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,2,
    1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,
    1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,
    1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,
    1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,
    1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,
    1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,
    1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,
    1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,
    1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,
    1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,
    1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,
    1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,
    2,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,
    2,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,
    0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,
    2,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,
    2,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
]

//create board
function createBoard() {

    for (let i = 0; i < layout.length; i++) {
        const square = document.createElement('div')
        grid.appendChild(square)
        squares.push(square)

        if (layout[i] === 0) {
            squares[i].classList.add('dot')
        } else if (layout[i] === 1) {
            squares[i].classList.add('wall')
        } else if (layout[i] === 2) {
            squares[i].classList.add('start-finish')
        }
        
    }
}
createBoard()


let movingDotCurrentIndex = 525
squares[movingDotCurrentIndex].classList.add('movingDot')

function control(e) {
    squares[movingDotCurrentIndex].classList.remove('movingDot')
    switch(e.keyCode) {
        case 40:
        console.log('pressed down')
        if (
            !squares[movingDotCurrentIndex + width].classList.contains('wall') &&
            movingDotCurrentIndex + width < width * width
            ) 
            movingDotCurrentIndex += width
        break
        case 38:
        console.log('pressed up')
        if (
            !squares[movingDotCurrentIndex - width].classList.contains('wall') &&
            movingDotCurrentIndex - width >=0
            ) 
            movingDotCurrentIndex -= width
        break
        case 37: 
        console.log('pressed left')
        if( 
            !squares[movingDotCurrentIndex -1].classList.contains('wall') &&
            movingDotCurrentIndex % width !==0
            ) 
            movingDotCurrentIndex -=1
        break
        case 39:
        console.log('pressed right')
        if(
            !squares[movingDotCurrentIndex +1].classList.contains('wall') &&
            movingDotCurrentIndex % width < width -1
            ) 
            movingDotCurrentIndex +=1
        break
    }
    squares[movingDotCurrentIndex].classList.add('movingDot')
}
document.addEventListener('keyup', control)
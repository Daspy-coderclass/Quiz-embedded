input.onButtonPressed(Button.A, function () {
    vraag += 1
})
let vraag = 0
let A = 0
let B = 0
let C = 0
let operator = true
let Juist = "B"
basic.forever(function () {
    if (vraag > 3) {
        Juist = "A"
    }
})

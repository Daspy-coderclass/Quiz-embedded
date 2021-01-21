function on_forever () {
    if (vraag > 3) {
        Juist = "A"
    }
}
input.onButtonPressed(Button.A, function () {
    vraag += 1
})
let vraag = 0
let Juist = ""
let A = 0
let B = 0
let C = 0
let operator = true
Juist = "B"

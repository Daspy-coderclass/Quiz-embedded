enum RadioMessage {
    message1 = 49434,
    wrong = 39922,
    right = 32391
}
input.onButtonPressed(Button.A, function () {
    while (begin) {
        speler = A
        basic.showString("A")
        radio.sendString("A")
    }
})
radio.onReceivedString(function (receivedString) {
    if (begin) {
        if (receivedString == "A") {
            A = true
        } else if (receivedString == "B") {
            B = true
        }
    }
})
input.onButtonPressed(Button.B, function () {
    while (begin) {
        speler = B
        basic.showString("B")
        radio.sendString("B")
    }
})
radio.onReceivedMessage(RadioMessage.right, function () {
    aantal_goed += 1
    aantal_nog += -1
})
radio.onReceivedMessage(RadioMessage.wrong, function () {
    aantal_nog += -1
})
let aantal_nog = 0
let speler = false
let aantal_goed = 0
let score = 0
let Quiz = false
let A = false
let B = false
let begin = false
radio.setGroup(50)
begin = true
let Vraag = 0
B = false
A = false
if (A && B) {
    Quiz = true
    begin = false
}
while (Quiz) {
    let punt = 0
    if (Vraag <= 3) {
        while (Vraag <= 3) {
            if (input.buttonIsPressed(Button.B)) {
                score += punt - aantal_goed
                radio.sendMessage(RadioMessage.right)
                basic.showIcon(IconNames.Yes)
            } else if (input.buttonIsPressed(Button.A)) {
                radio.sendMessage(RadioMessage.wrong)
                basic.showIcon(IconNames.No)
            }
        }
    } else if (Vraag > 4) {
        Quiz = false
    } else {
        if (Vraag == 4) {
            while (Vraag == 4) {
                if (input.buttonIsPressed(Button.A)) {
                    score += punt - aantal_goed
                    radio.sendMessage(RadioMessage.right)
                    basic.showIcon(IconNames.Yes)
                } else if (input.buttonIsPressed(Button.B)) {
                    radio.sendMessage(RadioMessage.wrong)
                    basic.showIcon(IconNames.No)
                }
            }
        }
    }
}
basic.forever(function () {
    while (Quiz) {
        if (aantal_nog == 0) {
            aantal_nog = 2
            aantal_goed = 0
            Vraag += 1
        }
    }
})

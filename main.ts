enum RadioMessage {
    message1 = 49434,
    wrong = 39922,
    right = 32391,
    ready = 31336,
    ready2 = 64034
}
function Vraag_1_3 () {
    if (input.buttonIsPressed(Button.B)) {
        score += punt - aantal_goed
        radio.sendMessage(RadioMessage.right)
        basic.showIcon(IconNames.Yes)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendMessage(RadioMessage.wrong)
        basic.showIcon(IconNames.No)
    }
}
input.onButtonPressed(Button.A, function () {
    if (begin) {
        speler = A
        basic.showString("A")
        radio.sendString("A")
        Aready = true
    }
})
radio.onReceivedMessage(RadioMessage.ready, function () {
    radio.sendMessage(RadioMessage.ready2)
    begin = false
    Quiz = true
})
radio.onReceivedMessage(RadioMessage.ready2, function () {
    begin = false
    Quiz = true
})
radio.onReceivedString(function (receivedString) {
    if (begin) {
        if (receivedString == "A") {
            Aready = true
            Ander_speler = A
        } else if (receivedString == "B") {
            Bready = true
            Ander_speler = B
            radio.sendMessage(RadioMessage.ready)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (begin) {
        speler = B
        basic.showString("B")
        radio.sendString("B")
        Bready = true
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
let B = 0
let Ander_speler = 0
let Quiz = false
let A = 0
let speler = 0
let aantal_goed = 0
let score = 0
let punt = 0
let Aready = false
let Bready = false
let begin = false
radio.setGroup(50)
begin = true
let Vraag = 0
Bready = false
Aready = false
punt = 2
basic.forever(function () {
    if (Quiz) {
        if (aantal_nog == 0) {
            aantal_nog = 2
            aantal_goed = 0
            Vraag += 1
        }
    }
    while (Quiz) {
        basic.clearScreen()
        if (Vraag == Vraag + 1) {
            Vraag_1_3()
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
})

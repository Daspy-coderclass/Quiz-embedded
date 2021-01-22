enum RadioMessage {
    message1 = 49434,
    wrong = 39922,
    right = 32391,
    ready = 31336,
    ready2 = 64034,
    end = 34413
}
radio.onReceivedNumber(function (receivedNumber) {
    ander_score = receivedNumber
})
function Vraag_4 () {
    basic.clearScreen()
    if (input.buttonIsPressed(Button.A)) {
        geweest = true
        score += punt - aantal_goed
        radio.sendMessage(RadioMessage.right)
        basic.showIcon(IconNames.Yes)
    } else if (input.buttonIsPressed(Button.B)) {
        geweest = true
        radio.sendMessage(RadioMessage.wrong)
        basic.showIcon(IconNames.No)
    } else if (geweest) {
        basic.showIcon(IconNames.Chessboard)
    }
    if (ander_geweest && geweest) {
        ander_geweest = false
        geweest = false
        aantal_goed = 0
        punt = 2
        Vraag += 1
        radio.sendNumber(score)
        basic.pause(2000)
        end = true
        Quiz = false
    }
}
input.onButtonPressed(Button.A, function () {
    if (begin) {
        basic.showString("A")
        radio.sendString("A")
        Aready = true
        Jij = "A"
    }
})
radio.onReceivedMessage(RadioMessage.ready, function () {
    radio.sendMessage(RadioMessage.ready2)
    begin = false
    Quiz = true
})
function Vraag_13 () {
    basic.clearScreen()
    if (input.buttonIsPressed(Button.B)) {
        geweest = true
        score += punt - aantal_goed
        radio.sendMessage(RadioMessage.right)
        basic.showIcon(IconNames.Yes)
    } else if (input.buttonIsPressed(Button.A)) {
        geweest = true
        radio.sendMessage(RadioMessage.wrong)
        basic.showIcon(IconNames.No)
    } else if (geweest) {
        basic.showIcon(IconNames.Chessboard)
    }
    if (ander_geweest && geweest) {
        ander_geweest = false
        geweest = false
        aantal_goed = 0
        punt = 2
        Vraag += 1
    }
}
radio.onReceivedMessage(RadioMessage.ready2, function () {
    begin = false
    Quiz = true
})
radio.onReceivedString(function (receivedString) {
    if (begin) {
        Ander = receivedString
        if (receivedString == "A") {
            Aready = true
        } else if (receivedString == "B") {
            Bready = true
            radio.sendMessage(RadioMessage.ready)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (begin) {
        basic.showString("B")
        radio.sendString("B")
        Bready = true
        Jij = "B"
    }
})
radio.onReceivedMessage(RadioMessage.right, function () {
    aantal_goed += 1
    ander_geweest = true
})
radio.onReceivedMessage(RadioMessage.wrong, function () {
    ander_geweest = true
})
let Ander = ""
let Jij = ""
let ander_geweest = false
let aantal_goed = 0
let score = 0
let geweest = false
let ander_score = 0
let punt = 0
let Aready = false
let Bready = false
let end = false
let Quiz = false
let begin = false
radio.setGroup(50)
begin = true
Quiz = false
end = false
let Vraag = 0
Bready = false
Aready = false
punt = 2
basic.forever(function () {
    while (Quiz) {
        basic.clearScreen()
        if (Vraag == 1) {
            Vraag_13()
        } else if (Vraag > 4) {
            Quiz = false
        } else if (Vraag == 4) {
            Vraag_4()
        } else if (Vraag == 2) {
            Vraag_13()
        } else if (Vraag == 3) {
            Vraag_13()
        }
    }
    while (end) {
        if (score > ander_score) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
        }
        basic.pause(2000)
        basic.showString(Jij)
        basic.showNumber(score)
        basic.pause(2000)
        basic.showString(Ander)
        basic.showNumber(ander_score)
    }
})

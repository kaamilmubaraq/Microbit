input.onButtonPressed(Button.A, function () {
    radio.sendString("0")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("2")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("1")
})
radio.setGroup(2)

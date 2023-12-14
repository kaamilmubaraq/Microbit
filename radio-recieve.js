radio.onReceivedString(function (receivedString) {
    if (receivedString == "0") {
        pins.servoWritePin(AnalogPin.P1, 0)
        pins.servoWritePin(AnalogPin.P2, 180)
    }
    if (receivedString == "1") {
        pins.servoWritePin(AnalogPin.P1, 180)
        pins.servoWritePin(AnalogPin.P2, 0)
    }
    if (receivedString == "2") {
        pins.servoWritePin(AnalogPin.P1, 90)
        pins.servoWritePin(AnalogPin.P2, 90)
    }
})
radio.setGroup(2)

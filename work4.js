input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "0") {
        for (let index = 0; index < 2; index++) {
            for (let index = 0; index < 6; index++) {
                l_side = 135 + 45 * Math.cos(time)
                r_side = 45 + 45 * Math.cos(0 - time)
                pins.servoWritePin(AnalogPin.P1, l_side)
                pins.servoWritePin(AnalogPin.P2, r_side)
                basic.pause(500)
                time += 3.14
                l_side = 135 + 45 * Math.cos(time)
                r_side = 45 + 45 * Math.cos(0 - time)
                pins.servoWritePin(AnalogPin.P1, l_side)
                pins.servoWritePin(AnalogPin.P2, r_side)
                basic.pause(460)
                time += 3.14
            }
            pins.servoWritePin(AnalogPin.P2, 180)
            basic.pause(300)
            pins.servoWritePin(AnalogPin.P2, 180)
            pins.servoWritePin(AnalogPin.P1, 0)
            basic.pause(2000)
            pins.servoWritePin(AnalogPin.P1, 90)
            pins.servoWritePin(AnalogPin.P2, 90)
            basic.pause(2000)
            pins.servoWritePin(AnalogPin.P1, 90)
            pins.servoWritePin(AnalogPin.P2, 90)
            a = 300
            pins.servoWritePin(AnalogPin.P2, 0)
            for (let index = 0; index < 200; index++) {
                pins.servoWritePin(AnalogPin.P1, 90)
                basic.pause(15)
                pins.servoWritePin(AnalogPin.P1, 180)
                basic.pause(a)
                a += -25
            }
            pins.servoWritePin(AnalogPin.P1, 90)
            pins.servoWritePin(AnalogPin.P2, 90)
            basic.pause(2000)
            time = 0
            for (let index = 0; index < 5; index++) {
                for (let index = 0; index < 4; index++) {
                    pins.servoWritePin(AnalogPin.P1, 180)
                    pins.servoWritePin(AnalogPin.P2, 0)
                    basic.pause(500)
                }
                pins.servoWritePin(AnalogPin.P1, 0)
                pins.servoWritePin(AnalogPin.P2, 0)
                basic.pause(450)
            }
            pins.servoWritePin(AnalogPin.P1, 90)
            pins.servoWritePin(AnalogPin.P2, 90)
            basic.pause(2000)
        }
    }
})
let a = 0
let r_side = 0
let time = 0
let l_side = 0
radio.setGroup(2)

function Page2 () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
    }
    basic.showArrow(ArrowNames.South)
}
function Page3 () {
    basic.showString("Make a booklet")
    basic.showArrow(ArrowNames.South)
}
function Page1 () {
    basic.showString("Hello")
    basic.showArrow(ArrowNames.South)
}
function Page5 () {
    basic.showIcon(IconNames.Duck)
    basic.showString("About ducks")
    basic.showArrow(ArrowNames.South)
}
function Page6 () {
    basic.showIcon(IconNames.Ghost)
    basic.showString("Or games")
    basic.showArrow(ArrowNames.South)
}
function Page4 () {
    basic.showString("6 pages")
    basic.showArrow(ArrowNames.South)
}
let pins2 = ""
basic.showArrow(ArrowNames.South)
basic.forever(function () {
    pins2 = "" + pins.digitalReadPin(DigitalPin.P0) + pins.digitalReadPin(DigitalPin.P1) + pins.digitalReadPin(DigitalPin.P2)
    if (pins2 == "100") {
        Page1()
    } else if (pins2 == "010") {
        Page2()
    } else if (pins2 == "001") {
        Page3()
    } else if (pins2 == "110") {
        Page4()
    } else if (pins2 == "101") {
        Page5()
    } else if (pins2 == "011") {
        Page6()
    }
})

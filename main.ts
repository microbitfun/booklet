function Page2 () {
    basic.showString("Hello")
    basic.showArrow(ArrowNames.South)
}
function Page3 () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
    }
    basic.showArrow(ArrowNames.South)
}
function Page7 () {
    basic.showIcon(IconNames.Ghost)
    basic.showString("Or games")
    basic.showArrow(ArrowNames.South)
}
function Page5 () {
    basic.showString("6 pages")
    basic.showArrow(ArrowNames.South)
}
function Page6 () {
    basic.showIcon(IconNames.Duck)
    basic.showString("About ducks")
    basic.showArrow(ArrowNames.South)
}
function Page4 () {
    basic.showString("Make a booklet")
    basic.showArrow(ArrowNames.South)
}
let two = 0
let one = 0
let zero = 0
basic.showArrow(ArrowNames.South)
basic.forever(function () {
    zero = pins.digitalReadPin(DigitalPin.P0)
    one = pins.digitalReadPin(DigitalPin.P1)
    two = pins.digitalReadPin(DigitalPin.P2)
    if (zero == 1 && (one == 0 && two == 0)) {
        Page2()
    } else if (zero == 0 && (one == 1 && two == 0)) {
        Page3()
    } else if (zero == 0 && (one == 0 && two == 1)) {
        Page4()
    } else if (zero == 1 && (one == 1 && two == 0)) {
        Page5()
    } else if (zero == 1 && (one == 0 && two == 1)) {
        Page6()
    } else if (zero == 0 && (one == 1 && two == 1)) {
        Page7()
    }
})

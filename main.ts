input.onButtonPressed(Button.A, function () {
    led.plot(2, 2)
    if (number_arr[pos] == 0) {
        number_arr[pos] = 1
    } else {
        number_arr[pos] = 0
    }
    basic.pause(100)
    led.unplot(2, 2)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    for (let index = 0; index <= 8; index++) {
        if (number_arr[index] == 1) {
            number += 2 ** index
        }
    }
    if (number != 0) {
        basic.showNumber(number * 5)
    }
    reset()
})
input.onButtonPressed(Button.B, function () {
    led.plot(2, 2)
    if (pos < 8) {
        pos += 1
    } else {
        pos = 0
    }
    basic.pause(100)
    led.unplot(2, 2)
})
function reset () {
    number = 0
    pos = 0
    number_arr = [0, 0, 0, 0, 0, 0, 0, 0]
    basic.showIcon(IconNames.Diamond)
}
let number = 0
let pos = 0
let number_arr: number[] = []
reset()

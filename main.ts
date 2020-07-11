input.onButtonPressed(Button.A, function () {
    if (number_arr[pos] == 0) {
        list[pos] = 1
    } else {
        list[pos] = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    for (let index = 0; index <= 5; index++) {
        if (list[index] == 1) {
            number += 2 ** index
        }
    }
    if (number != 0) {
        for (let index = 0; index < 2; index++) {
            basic.showNumber(number * 5)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (pos < 5) {
        pos += 1
    } else {
        pos = 0
    }
})
let list: number[] = []
let number_arr: number[] = []
let pos = 0
let number = 0
number = 0
pos = 0
number_arr = [0, 0, 0, 0, 0]
basic.showIcon(IconNames.SmallDiamond)

let 時間 = 0
input.onButtonPressed(Button.A, function () {
    時間 = 5
    for (let index = 0; index < 5; index++) {
        basic.showNumber(時間)
        時間 += -1
        basic.pause(500)
    }
    soundExpression.mysterious.playUntilDone()
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        `)
    basic.pause(500)
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . # . #
        # # . # #
        # . . . #
        `)
    basic.pause(500)
    basic.clearScreen()
})

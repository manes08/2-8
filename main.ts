basic.forever(function () {
    basic.showNumber(input.compassHeading())
    if (input.compassHeading() < 45 || input.compassHeading() > 315) {
        music.playMelody("C D E F G A B C5 ", 120)
    } else {
        music.stopMelody(MelodyStopOptions.All)
    }
})

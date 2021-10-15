input.onGesture(Gesture.Shake, function () {
    nombre_de_pas += 1
})
let nombre_de_pas = 0
basic.forever(function () {
    basic.showNumber(nombre_de_pas)
})

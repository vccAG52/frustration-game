input.onButtonPressed(Button.A, function () {
    if (Sprite.get(LedSpriteProperty.X) == 0) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
input.onButtonPressed(Button.B, function () {
    if (Sprite.get(LedSpriteProperty.X) == 4) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
let Sprite: game.LedSprite = null
Sprite = game.createSprite(2, 2)
basic.forever(function () {
    Sprite.move(1)
    Sprite.ifOnEdgeBounce()
    basic.pause(500)
})

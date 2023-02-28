input.onButtonPressed(Button.A, function () {
    Bullet = game.createSprite(SpaceShip.get(LedSpriteProperty.X), SpaceShip.get(LedSpriteProperty.Y))
    Bullet.turn(Direction.Left, 90)
})
function Crash () {
    if (Bullet.isTouching(Enemy)) {
        game.addScore(1)
        Bullet.delete()
        Enemy.delete()
        Enemy = game.createSprite(randint(0, 4), 0)
    }
}
let Bullet: game.LedSprite = null
let Enemy: game.LedSprite = null
let SpaceShip: game.LedSprite = null
SpaceShip = game.createSprite(2, 4)
Enemy = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    SpaceShip.move(1)
    SpaceShip.ifOnEdgeBounce()
    if (Bullet) {
        Bullet.move(1)
        Crash()
    }
    basic.pause(200)
})

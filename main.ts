input.onButtonPressed(Button.A, function () {
    if (canShoot) {
        Bullet = game.createSprite(SpaceShip.get(LedSpriteProperty.X), SpaceShip.get(LedSpriteProperty.Y))
        Bullet.turn(Direction.Left, 90)
        canShoot = false
    }
})
function Crash () {
    if (Bullet.isTouching(Enemy)) {
        game.addScore(1)
        Bullet.delete()
        Enemy.delete()
        Enemy = game.createSprite(randint(0, 4), 0)
        canShoot = true
    } else if (Bullet.get(LedSpriteProperty.Y) == 0) {
        Bullet.delete()
        canShoot = true
    }
}
let Bullet: game.LedSprite = null
let canShoot = false
let Enemy: game.LedSprite = null
let SpaceShip: game.LedSprite = null
SpaceShip = game.createSprite(2, 4)
Enemy = game.createSprite(randint(0, 4), 0)
canShoot = true
game.startCountdown(20000)
basic.forever(function () {
    SpaceShip.move(1)
    SpaceShip.ifOnEdgeBounce()
    if (Bullet) {
        Bullet.move(1)
        Crash()
    }
    basic.pause(200)
})

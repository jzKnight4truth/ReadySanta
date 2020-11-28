sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Present.setPosition(randint(10, 150), randint(10, 110))
    info.startCountdown(5)
})
let Present: Sprite = null
scene.setBackgroundColor(7)
let Santa = sprites.create(img`
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . 2 2 2 . 1 . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . 1 1 1 1 1 1 1 . . . . . . 
    . . . 1 4 4 4 4 4 1 . . . . . . 
    . . . 1 4 8 4 8 4 1 . . . . . . 
    . . . 1 3 4 2 4 3 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 . . . . . . 
    . 2 2 2 1 1 4 1 1 2 2 2 . . . . 
    . 2 2 2 2 1 1 1 2 2 2 2 . . . . 
    . 2 2 2 2 2 1 2 2 2 2 2 . . . . 
    . 1 1 f f 5 f 5 f f 1 1 . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . 2 2 2 . 2 2 2 . . . . . . 
    . . . 1 1 . . . 1 1 . . . . . . 
    . . . f f . . . f f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Santa)
Present = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 . 5 5 . . . . . . 
    . . . 2 5 2 2 5 2 2 5 2 . . . . 
    . . . 2 2 5 5 1 5 5 2 2 . . . . 
    . . . 2 5 2 2 1 2 2 5 2 . . . . 
    . . . 2 2 2 2 1 2 2 2 2 . . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . 2 2 2 2 1 2 2 2 2 . . . . 
    . . . 2 2 2 2 1 2 2 2 2 . . . . 
    . . . 2 2 2 2 1 2 2 2 2 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)

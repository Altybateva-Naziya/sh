//js/monster.js
import *as dia from  './demon.js'
import * as engin from './engin.js'
import * as fireball from './fireball.js'
const monster = {
    'go': {
        1: 'image/monster/go/m1.png',
        2: 'image/monster/go/m2.png',
        3: 'image/monster/go/m3.png',
        4: 'image/monster/go/m4.png',
        5: 'image/monster/go/m5.png',
        6: 'image/monster/go/m6.png'
    },
    'dead': {
        1: 'image/monster/dead/mo1.png',
        2: 'image/monster/dead/mo2.png',
        3: 'image/monster/dead/mo3.png',
        4: 'image/monster/dead/mo4.png',
        5: 'image/monster/dead/mo5.png',
        6: 'image/monster/dead/mo6.png',
        7: 'image/monster/dead/mo7.png'
        }
}
export let x = 1000
export let y = 335
export let speed = 10
export let ready = false
export let type = 'go'
let frame = 1
export function setType(type1) {
    type=type1
}
export function mframe(frame1) {
    frame=frame1
}
export function drawMonster(ctx) {
    frame +=1
    if (type === 'go' && frame=== 7){
        frame=1
    }
     if (type === 'dead' && frame=== 8){
        frame=0
    }
    if (monster[type][frame]=== undefined)
        frame = 1
    x -= speed
    if (x < 0)
        x = 1000
    ctx.drawImage(monster[type][frame], x, y);
    if (engin.colisionShape(x, fireball.x, y, fireball.y, 60, 58, 60, 84)){
                x = 1000
        fireball.setxy(10000000, 100000000)

    }
    else if (engin.colisionShape(x, dia.x, y, dia.y, 60, 30, 60, 30)) {
        x = 1000
        dia.sxy(10000000, 100000000)
    }
}
export function preload() {
    let types = Object.keys(monster)
    types.forEach(function (type, idx) {
        let frames = Object.keys(monster[type])
        frames.forEach(function (frame, idx1) {
            const image = new Image(60, 60);
            image.onload = function () {
                monster[type][frame] = image;
                if (idx === types.length - 1 && idx1 === frames.length - 1)
                    ready = true

            }
            image.src = monster[type][frame];
        })
    })
}
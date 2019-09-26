//js/hero.js
import * as engin from './engin.js'
import * as monster from './monsters.js'
import * as boss from './boss.js'
const hero = {
    'idle': {
        1: 'image/hero/idle/hi1.png',
        2: 'image/hero/idle/hi2.png',
        3: 'image/hero/idle/hi3.png',
        4: 'image/hero/idle/hi4.png',
        5: 'image/hero/idle/hi5.png',
        6: 'image/hero/idle/hi6.png',
        7: 'image/hero/idle/hi7.png',
        8: 'image/hero/idle/hi8.png',
        9: 'image/hero/idle/hi9.png'
    },
    
    'movie': {
        1: 'image/hero/movie/hiro10.png',
        2: 'image/hero/movie/hiro11.png',
        3: 'image/hero/movie/hiro12.png',
        4: 'image/hero/movie/hiro13.png',
        5: 'image/hero/movie/hiro14.png',
        6: 'image/hero/movie/hiro15.png',
        7: 'image/hero/movie/hiro16.png'
    },
    'attack': {
        1: 'image/hero/attack/1.png',
        2: 'image/hero/attack/2.png',
        3: 'image/hero/attack/2.png',
        4: 'image/hero/attack/4.png',
        5: 'image/hero/attack/5.png',
        6: 'image/hero/attack/6.png',
        7: 'image/hero/attack/7.png',
        8: 'image/hero/attack/8.png',
        9: 'image/hero/attack/9.png',
        10: 'image/hero/attack/10.png',
        11: 'image/hero/attack/11.png',
        12: 'image/hero/attack/12.png'

    },
     'dead': {
        1: 'image/hero/dead/hiro20.png',
        2: 'image/hero/dead/hiro21.png',
        3: 'image/hero/dead/hiro22.png',
        4: 'image/hero/dead/hiro23.png',
        5: 'image/hero/dead/hiro24.png',
        6: 'image/hero/dead/hiro25.png',
        7: 'image/hero/dead/hiro26.png',
        8: 'image/hero/dead/hiro27.png',
        9: 'image/hero/dead/hiro28.png',
        10: 'image/hero/dead/hiro29.png',
         11: 'image/hero/dead/1.png',
    },
    'movel': {
        1: 'image/hero/movel/hir10.png',
        2: 'image/hero/movel/hir11.png',
        3: 'image/hero/movel/hir12.png',
        4: 'image/hero/movel/hir13.png',
        5: 'image/hero/movel/hir14.png',
        6: 'image/hero/movel/hir15.png',
        7: 'image/hero/movel/hir16.png'
    },
    'idlel': {
        1: 'image/hero/idlel/hi1.png',
        2: 'image/hero/idlel/hi2.png',
        3: 'image/hero/idlel/hi3.png',
        4: 'image/hero/idlel/hi4.png',
        5: 'image/hero/idlel/hi5.png',
        6: 'image/hero/idlel/hi6.png',
        7: 'image/hero/idlel/hi7.png',
        8: 'image/hero/idlel/hi8.png',
        9: 'image/hero/idlel/hi9.png'
    },
    'angriff': {
        1: 'image/hero/angriff/1.png',
        2: 'image/hero/angriff/2.png',
        3: 'image/hero/angriff/3.png',
        4: 'image/hero/angriff/4.png',
        5: 'image/hero/angriff/5.png',
        6: 'image/hero/angriff/6.png',
        7: 'image/hero/angriff/7.png',
        8: 'image/hero/angriff/8.png',
        9: 'image/hero/angriff/9.png',
        10: 'image/hero/angriff/10.png',
         11: 'image/hero/angriff/11.png',
         12: 'image/hero/angriff/12.png'
    }

}
export let x = 60
export let y = 315
export let speed = 5
export let direct = 'right'
export let type = 'idle'
export let ready = false
export function setType(type1) {
    type=type1
}
export function setframe(frame1) {
    frame=frame1
}
export function setdirect(direct1) {
    direct=direct1
}
let frame = 1
export function drawImagehero(ctx) {
    console.log(type, frame)
    if (type === 'dead' && frame=== 11){}
    else {
        frame +=1
        if (type === 'attack' && frame=== 12){
            type='idle'
            frame=1
        }
        if (type === 'angriff' && frame=== 12){
            type='idlel'
            frame=1
        }
        if (hero[type][frame]=== undefined)
            frame = 1

        move()
        if (engin.colisionShape(x, monster.x, y, monster.y, 60, 58, 60, 84)){
            type= 'dead'
            frame = 1
        }
        else if (engin.colisionShape(x, boss.x, y, boss.y, 57, 58, 60, 80)){
            type= 'dead'
            frame = 1
        }
    }


    ctx.drawImage(hero[type][frame], x, y);

}
function move() {
    if (type === 'movie'|| type=== 'movel'){
        if (direct === 'right')
            x += speed
        else if (direct === 'left')
            x -= speed

        else if (direct === 'up')
            y += speed
    }
}

export function preload() {
    let types = Object.keys(hero)
    types.forEach(function (type, idx) {
        let frames = Object.keys(hero[type])
        frames.forEach(function (frame, idx1) {
            const image = new Image(58, 84);
            image.onload = function () {
                hero[type][frame] = image;
                if(idx === types.length-1 && idx1 === frames.length-1)
                    ready = true

            }
            image.src = hero[type][frame];
        })
    })
}

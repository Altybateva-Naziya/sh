
import * as engin from './engin.js'
import * as monster from './monsters.js'
import * as boss from './boss.js'
import *as dia from  './demon.js'
const bg = {
    'day': {
        1: 'image/background/03.png'
    },

    'night': {
        1: 'image/background/05.png'
    },

    'gm': {
        1: 'image/background/gm.png'
    }
}
export let type = 'day'
export let ready = false
export let x =0
export let y = 0
export function drawImagebg(ctx) {
    ctx.drawImage(bg[type][1], x, y);
     if (engin.colisionShape(monster.x, dia.x, monster.y, dia.y, 60, 30, 60, 30)){
                type = 'gm'

    }
    else if (engin.colisionShape(boss.x, dia.x, boss.y, dia.y, 57, 30, 80, 30)) {
                type = 'gm'
    }

}
export function setTypebg(type1) {
    type=type1
}
export function preload() {
    let types = Object.keys(bg)
    types.forEach(function (type, idx) {
        let frames = Object.keys(bg[type])
        frames.forEach(function (frame, idx1) {
            const image = new Image(1124, 512);
            image.onload = function () {
                bg[type][frame] = image;
                if(idx === types.length-1 && idx1 === frames.length-1)
                    ready = true

            }
            image.src = bg[type][frame];
        })
    })
}
   setInterval(function () {
              if (type === 'day')
                  type = 'night'
                else if (type === 'night')
                   type = 'day'
                else  if (type === 'gm')
                  stop
            },10000)
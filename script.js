
let speedimgtop = document.querySelector('.speedimgtop')
let speedimgbot = document.querySelector('.speedimgbot')
let toptemp = document.querySelector('.toptemp')
let bottemp = document.querySelector('.bottemp')
let swapdicktop = document.querySelector('.swapdicktop')
let swapdickbot = document.querySelector('.swapdickbot')
let speed = document.querySelector('.speed')
let temp = document.querySelector('.temp')
let disk = document.querySelector('.disk')
let stat = document.querySelector('.totalstatus')
let price = document.querySelector('.totalprice')
let img = document.querySelector('.diskv1')
let img2 = document.querySelector('.diskv2')
let max = document.querySelector('.max')
let min = document.querySelector('.min')
let kmsh = document.querySelector('.kmsh')


speedimgtop.onclick = () => {
    if (Number(speed.innerHTML) < 320) {
        speed.innerHTML = Number(speed.innerHTML) + 5
        stat.innerHTML = Number(stat.innerHTML) - 5
        max.style.display = 'none'
        min.style.display = 'none'
        kmsh.style.display = 'block'
    } else {
        speed.innerHTML = '320'
        max.style.display = 'block'
        kmsh.style.display = 'none'
    }
}


speedimgbot.onclick = () => {
    if (Number(speed.innerHTML) > 0) {
        speed.innerHTML = Number(speed.innerHTML) - 5
        stat.innerHTML = Number(stat.innerHTML) + 5
        min.style.display = 'none'
        max.style.display = 'none'
        kmsh.style.display = 'block'
        

    } else if (Number(speed.innerHTML) === 0) {
        speed.innerHTML = '0'
        min.style.display = 'block'
        kmsh.style.display = 'none'

        
    }
}

toptemp.onclick = () => {
    temp.innerHTML = Number(temp.innerHTML) + 1
    stat.innerHTML = Number(stat.innerHTML) - 3
}

bottemp.onclick = () => {
    temp.innerHTML = Number(temp.innerHTML) - 1
    stat.innerHTML = Number(stat.innerHTML) + 3
}


if (Number(disk.innerHTML) === 18) {
    img2.src = './img/wheel-removebg-preview.png'
    img.src = './img/wheel-removebg-preview.png'
}
swapdicktop.onclick = () => {
    if (Number(disk.innerHTML) <= 16) {
        disk.innerHTML = Number(disk.innerHTML) + 2
        img2.src = './img/wheel-removebg-preview.png'
        img.src = './img/wheel-removebg-preview.png'
        price.innerHTML = Number(price.innerHTML) + 2400
    } else {
    }
}

swapdickbot.onclick = () => {
    if (Number(disk.innerHTML) === 18) {
        disk.innerHTML = Number(disk.innerHTML) - 2
        img2.src = './img/wheel2png-removebg-preview.png'
        img.src = './img/wheel2png-removebg-preview.png'
        price.innerHTML = Number(price.innerHTML) - 2400
    } else {
    }
}

let kondick = document.querySelector('.kondick')
let carversion = document.querySelector('.carversion')

kondick.onclick = () => {
    if (kond.checked == false) {
        stat.innerHTML = Number(stat.innerHTML) + 40
        console.log('asdsad');
    } else {
        stat.innerHTML = Number(stat.innerHTML) - 40
    }
}


carversion.onclick = () => {
    if (carversion.checked == false) {
        stat.innerHTML = Number(stat.innerHTML) + 23
        console.log('asdsad');
    } else {
        stat.innerHTML = Number(stat.innerHTML) - 23
    }
}
kondick.onclick = () => {
    if (kondick.checked == false) {
        stat.innerHTML = Number(stat.innerHTML) + 23
        console.log('asdsad');
    } else {
        stat.innerHTML = Number(stat.innerHTML) - 23
    }
}

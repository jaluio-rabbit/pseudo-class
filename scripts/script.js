let i = 0;

const sound = new Audio();
sound.src = './sound/GTA_SA Mission Completed минус уши (BASSBOOSTED).mp4';

window.addEventListener('mousemove', () => {
    if (i <= 2){
        setTimeout(() => {
            sound.play();
        }, 500);
        console.log('you focused on the window.')
    }
    i++
})

setTimeout(() => {
    const image = document.createElement('img');
    image.src = 'image/scream.png';
    image.classList.add('scream1');
    image.classList.add('scream');
    console.log(image)
    document.body.appendChild(image);
}, 1000);

setTimeout(() => {
    const image = document.createElement('img');
    image.src = 'image/scream.png';
    image.classList.add('scream2');
    image.classList.add('scream');
    console.log(image)
    document.body.appendChild(image);
}, 3500);

setTimeout(() => {
    const image = document.createElement('img');
    image.src = 'image/scream.png';
    image.classList.add('scream3');
    image.classList.add('scream');
    console.log(image)
    document.body.appendChild(image);
}, 6000);

setTimeout(() => {
    const container = document.getElementsByClassName('container')[0];
    container.style.visibility = 'hidden';
}, 10000);

setTimeout(() => {
    const pre = document.getElementById('my_code');
    document.body.style.background = 'white';
    pre.style.visibility = 'visible';
}, 12000);

setTimeout(() => {
    const slidans = document.querySelectorAll('.scream');
    for (let i = 0; i < slidans.length; i++){
        slidans[i].style.opacity = '0';
    }
}, 13500);

setTimeout(() => {
    document.body.style.overflowY = 'auto';
}, 15500);

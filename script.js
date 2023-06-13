const tombol = document.querySelector('#tombol');
const judul = document.querySelector('#judul');

tombol.addEventListener('click', function() {
    judul.classList.toggle('judul');
});


const cRandom = document.createElement('button');
const tRandom = document.createTextNode('Color Random');
cRandom.appendChild(tRandom);
cRandom.setAttribute('type', 'button');
tombol.after(cRandom);

cRandom.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});


const red = document.querySelector('input[name=red]');
red.addEventListener('change', function() {
    const r = red.value;
    const g = green.value;
    const b = blue.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

const green = document.querySelector('input[name=green]');
green.addEventListener('change', function() {
    const r = red.value;
    const g = green.value;
    const b = blue.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

const blue = document.querySelector('input[name=blue]');
blue.addEventListener('change', function() {
    const r = red.value;
    const g = green.value;
    const b = blue.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

document.body.addEventListener('mousemove', function(event) {
    const xPost = Math.round((event.clientX / window.innerWidth) * 255);
    const yPost = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xPost +', '+ yPost +', 100)';
});
























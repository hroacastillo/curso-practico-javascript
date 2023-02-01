const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

h1.innerText = 'Cambiando titulo desde JavaScript';

console.log(h1.getAttribute('class'));

console.log(input.value);

console.log({h1, p, parrafito, pid, input});

// h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');

input.value = '456';

const img = document.createElement('img');
img.setAttribute('src', 'https://e.rpp-noticias.io/xlarge/2020/06/28/225222_963074.jpg');

// pid.append(img);

pid.innerHTML = "";
pid.appendChild(img);

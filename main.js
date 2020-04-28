// localStorage

const pazymiai = [10, 8, 6, 2, 7, 5, 9, 10];

// map, sort, filter, reduce

const dvygubiPazymiai = pazymiai.map( a => a * 2 );

console.log(pazymiai);
console.log(dvygubiPazymiai);

const liekanos = pazymiai.map( g => g % 2 );
console.log(liekanos);

const pazymiaiMinMax = pazymiai.sort( (a, b) => a - b );
console.log(pazymiaiMinMax);

const pazymiaiMore5 = pazymiai.filter( a => a > 5 );
console.log(pazymiaiMore5);

const pazymiaiLess7 = pazymiai.filter( a => a < 7 );
console.log(pazymiaiLess7);

const skaiciai = [1, 2, 3, 4];
const pazymiaiSum = skaiciai.reduce( (total, a) => total - a );
console.log(pazymiaiSum);

let objs = [{a:10}, {a:8}, {a:2}, {a:6}, {a:4}];
const sumObjs = objs.reduce( (total, obj) => total + obj.a, 0 );
console.log(sumObjs);


document.querySelector('body').addEventListener('click', onClickDiv)

function onClickDiv() {

}

localStorage.setItem('test', 'test value :D')

console.log(  localStorage.getItem('test')  );

localStorage.removeItem('test')
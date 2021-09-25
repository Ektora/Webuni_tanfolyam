
let myFirstVar ='Hello';
myFirstVar = 5;

const onlyOnce="World!";

const s1='I am a string';
const s2 ="Also a string";
const s3 =`String between backstrick`;

const age = 27;
const text = `I am ${age} years old`;
const text2 = 'I am ' + age + ' years old';

const n1 = 5;
const n2 = 3.443333;
const n3 = Number('3');
const n4 = Number('not a number');

let isValid = true;
isValid = false;

let num = 5;

const foo = (n) => {
  n = n * 2;
  return n;
};
num = foo(num);
// Objektumok
const o = {
	name: "Zizi",
	favoriteNumber: 5
};
o.name = 'Xz';
o.favoriteNumber= 16;
console.log(o.name);

const a1 = [1,2,3];
const a2 = [1, 'Zizi', true];

a1.push(23);
a1.forEach((item) => {
	console.log(item);
});

const f = (a, b) =>{
	return a + b;
};

function f2 (a,b){
	return a+b;
}
const f3 = i => i.foo();
console.log(f(5,6));
console.log(f('Zi','Zi'));
console.log(f({},{}));

let pet= {
	name: 'Kitty',
	type: 'cat'
};
const bar = p =>{
	p={
		name: 'Doggy',
		type: 'dog'
	};
	return p;
};
console.log('Változó értéke a bar függvény előtt ', pet);
pet = bar(pet);
console.log('Változó értéke a bar függvény után ', pet);

const pet2= {
	name: 'Sanny',
	type: 'snake'
};
const bar2 = p => {
	p.name='Hanny',
	p.type='hamster'
};
console.log('Változó értéke a bar2 függvény előtt ', pet2);
bar2(pet2);
console.log('Változó értéke a bar2 függvény után ', pet2);

let v;
console.log(v);
v=null;
console.log(v);

const a = '5';
const b = 5;
console.log(a == b);
console.log(a === b);

const p1 = { name:'Zizi'};
const p2 = { name:'Zizi'};
console.log(p1 == p2);
console.log(p1 === p2);
const p3 = p1;
console.log(p1 == p3);
console.log(p1 === p3);

const makeClosure = () => {
	const name= 'makeClosure';
	const displayName = () =>{
		alert(name);
	} 
	return displayName;
};
const testFn = makeClosure();
//testFn();

const isPositive = (n) =>{
	if(n>=0){
		console.log('Positive');
	}
	else
		console.log('Negative');
}
isPositive(5);
isPositive(-5);

const mapToStars = n => {
	let res;
	switch(n){
		case 1: res ='*'; break;
		case 2: res ='**'; break;
		case 3: res ='***'; break;
		case 4: res ='****'; break;
		case 5: res ='*****'; break;
		default: res ='-'; break;
	}
	return res;
};
console.log(mapToStars(2));
console.log(mapToStars(4));
console.log(mapToStars(102));

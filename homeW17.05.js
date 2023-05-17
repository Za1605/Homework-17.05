
// Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'

let st = 'hello world';
console.log (st.length);


let st2 = 'lorem ipsum';
console.log(st2.length);

let st3 = 'javascript is cool';

console.log(st3.length);



// Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'

let st4 = 'javascript is cool';

let upperCase4 = st4.toUpperCase();
console.log(upperCase4);

let st5 = 'lorem ipsum';
let upperCase5 = st5.toUpperCase();
console.log(upperCase5);

let st6 = 'hello world';

let upperCase6 = st6.toUpperCase();
console.log(upperCase6);


//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let st7 = 'HELLO WORLD';
let lowerCase7 = st7.toLowerCase();
console.log(lowerCase7);


let st8 = 'LOREM IPSUM';
let lowerCase8 = st8.toLowerCase();
console.log(lowerCase8);




let st9 = 'JAVASCRIPT IS COOL'
let lowerCase9 = st9.toLowerCase();
console.log(lowerCase9);




//- Є "брудна" стрінга

let box = ' dirty string   ' ;//Почистити її від зайвих пробілів.

box.
replaceAll(' ', ' ');
console.log(box);

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
 //let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';
box.stringToarray;
console.log(str);





//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map
// перетворити всі об'єкти в масиві на стрінгові.


let calk  = [10,8,-7, 455, 987, -1011,0, 1050,0];
let mylet = calk.toString();
console.log(mylet);

//створити функцію, яка приймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
 nums.sort(function (a, b){
 return a-b;});
console.log(nums);


let nums1 = [3,11,21];
nums1.sort(function (b, a){
    return a-b;});
console.log(nums1);



let nums2 = [21,11,3];
nums1.sort(function (a, b){
    return b-a;});
console.log(nums2);

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
 const sortNums = (nums,direction) =>{
     switch (direction){
         case 'ascending':
         return nums.sort((b1, b2) => b1-b2);
         case 'descending':
         return nums.sort((b1, b2) => b2-b1);
     }
 };
console.log(sortNums(nums,'ascending'));// [3,11,21])
console.log(sortNums(nums,'descending'));// [3,11,21])





//є масив
//let coursesAndDurationArray = [
   // {title: 'JavaScript Complex', monthDuration: 5},
   // {title: 'Java Complex', monthDuration: 6},
    //{title: 'Python Complex', monthDuration: 6},
    //{title: 'QA Complex', monthDuration: 4},
   // {title: 'FullStack', monthDuration: 7},
   // {title: 'Frontend', monthDuration: 4}
//відсортувати його за спаданням за monthDuration
// відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
 //за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}


let coursesAndDurationArray = [
{title: 'JavaScript Complex', monthDuration: 5},
 {title: 'Java Complex', monthDuration: 6},
{title: 'Python Complex', monthDuration: 6},
{title: 'QA Complex', monthDuration: 4},
 {title: 'FullStack', monthDuration: 7},
 {title: 'Frontend', monthDuration: 4}];

let sort = coursesAndDurationArray.sort((a,b)=> {
    return a.monthDuration - b.monthDuration;
});
console.log(sort);


let sort2 = coursesAndDurationArray.filter((vin)=>
    vin.monthDuration > 5);

console.log(sort2);

let sort3 = coursesAndDurationArray.map((item, index)=>

    ({...item, id:index +1}));
console.log(sort3);

//описати колоду карт (від 6 до туза без джокерів)
//знайти піковий туз
// всі шістки
//всі червоні карти всі буби всі трефи від 9 та більше

//{
    //cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
       // value: '', // '6'-'10', 'ace','jack','queen','king','joker'
   // color:'', // 'red','black'

let cards = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' },
];

const card1 = cards.find((card) => card.cardSuit === `spade` && card.value === `ace`);
console.log(card1);

const card2 = cards.filter((card)=> card.value === `6`);
console.log(card2);

const card3 = cards.filter((card)=> card.color ===`red`);
console.log(card3);

const card4 = cards.filter((card)=> card.cardSuit ===`diamond`);
console.log(card4);

const card5 = cards.filter((card) =>[`9`, `10`, `ace`, `jack`, `qeen`, `kind`].includes(card.value) && card.cardSuit ===`clubs`);
console.log(card5);


  //  Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
//{
    //spades:[],
    //    diamonds:[],
   // hearts:[],
    //clubs:[]}
const card6 = cards.reduce((accumulator, cu) =>{
    switch (cu.cardSuit){
        case `spade`:
            accumulator.spades.push(cu);
            break;
        case `diamond`:
            accumulator.spades.push(cu);
            break;
        case `heart`:
            accumulator.hearts.push(cu);
            break;
        case `clubs`:
            accumulator.clubs.push(cu);
            break;
    }
    return accumulator;
},{spades:[],diamonds:[],hearts:[],clubs:[]});
console.log(card6);
   // взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
//написати пошук всіх об'єктів, в який в modules є sass
//написати пошук всіх об'єктів, в який в modules є docker
// task 1
// Naršyklėje įdėkite 14 h1 tagų su skaičiumi 4 ir 14 h4 tagų su skaičiumi 1. Visi tagai turi rikiuotis į vieną eilutę.
// 14 x h1 su 4 
// 14 x h4 su 1
let qty = 14;

let content_0 = document.querySelector(".first-div h2").textContent;
let content_1 = '';
let content_2 = '';

let first_div = document.querySelector(".first-div"); 
first_div.innerHTML = `<div>labas</div>`;
console.log(first_div);
console.log(first_div);

for(let i = 0; i < qty; i++){
    content_1 += `<h1 class="title-style">4</h1>`
}
console.log(content_1);

for(let i = 0; i < qty; i++){
    content_2 += `<h4 class="title-style">1</h4>`
}
console.log(content_2);


first_div.innerHTML = `${content_0}${content_1} ${content_2}`;

// task 2--------------------------------------------------------------------
// Naudodamiesi funkcija rand() naršyklėje eilute (tarp skaičių turi būti tarpai) 
// surašykite 44 atsitiktinius skaičius nuo 14 iki 44. 
// Skaičius, kurie iš 4 dalinasi be liekanos nuspalvinkite raudonai, o kitus mėlynai.
console.log('--- task 2 ---')
function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let random_from = 14;
let random_to = 44; 
let new_content = '';


for (let i = 0; i < 44; i++){
   let random_num = rand(random_from, random_to);
   if(random_num % 4 == 0){
    new_content += `<p class="title-style" style="color:red">${random_num}</p>`;

   } else {
    new_content += `<p class="title-style" style="color:blue">${random_num}</p>`;
   }
}
// console.log(new_content);
document.querySelector(".second-div").innerHTML = new_content;

//  task 3 -----------------------------------------------------------------
// Naršyklėje nupieškite 14 mėlynų apskritimų, išdėliotų eilute.
console.log('--- task 3 ---');
let circle_qty = 14;
let all_circles = '';

for(let i = 0; i < circle_qty; i++){
    all_circles += `<div class="blue-circle" style="margin-right: 10px";></div>`
}
// console.log(all_circles);
// console.log(document.querySelector(".third-div"));

document.querySelector(".third-div").innerHTML = all_circles;
document.querySelector(".third-div").style = 'display:flex; margin-right: 10px;';

// task 4 ---------------------------------------------------------------------
// Naršyklėje nupieškite 4 mėlynus ir 4 raudonus apskritimus, 
// išdėliotus eilute  “zebru”. (raudonas, mėlynas, raudonas…).

console.log('--- task 4 ---');
let circle_qty_4 = 8;
let all_circles_4 = '';

for(let i = 0; i < circle_qty_4; i++){
    if(i % 2 == 0){
        all_circles_4 += `<div class="red-circle" style="margin-right: 10px";></div>`
    } else {
        all_circles_4 += `<div class="blue-circle" style="margin-right: 10px";></div>`
    }
}

document.querySelector(".fourth-div").innerHTML = all_circles_4;
document.querySelector(".fourth-div").style.display = "flex";


//  task 5 -------------------------------------------------------------
//  Naršyklėje nupieškite daygybos lentelę 4 dauginant iš skaičių nuo 4 iki 14.
// 4 x 4 = 16
//  ...
console.log("--- task 5 ---")
let base_num = 4;
let multiplier_from = 4;
let multiplier_to = 14;
let table = '';

for(let i = multiplier_from; i <= multiplier_to; i++ ){
    let result = base_num * i;
    // console.log(`${base_num} x ${i} = ${result}`);
    table += `<p style="font-size:18px">${base_num} x ${i} = ${result}</p>`;
}

document.querySelector(".fifth-div").innerHTML = table;

//  task 6 -------------------------------------------------------
// Naršyklėje nupieškite linija iš 444 “*” (tarp žvaigždučių tarpų nėra). 
// Programiškai “suskaldykite” (naudodami tagus atskirom žvaigždučių grupėm) žvaigždutes taip, 
// kad vienoje eilutėje nebūtų daugiau nei 44 “*”.

console.log("--- task 6 ---")
let star_count = 444;
let stars_in_row = 44;
let existing_html = document.querySelector(".sixth-div").innerHTML;
let line;

//how many rows - integer
let rows = Math.floor(star_count / stars_in_row);
//how many stars left - remainder
let stars_remainder =  star_count % stars_in_row;
console.log(rows);
console.log(stars_remainder);

for (let i = 0; i < rows; i++){
    line = "*".repeat(stars_in_row);
    // console.log(`eileje yra zvaigzduciu:${line.length}`)
    existing_html += `<div>${line}</div>`;
}
let last_line = `<div>${"*".repeat(stars_remainder)}</div>`
existing_html += last_line;
document.querySelector(".sixth-div").innerHTML = existing_html;



// task 7 ---------------------------------------
// Naršyklėje nupieškite 14 atsitiktinių spalvų kvadratų esančių vienas kitame (“matrioška”).#pamastykKaip

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}

let seventh_div = document.querySelector(".seventh-div");
// console.log(seventh_div);

let seventh_div_content = '';
let width = 600;
let position_counter = 10;

// for(let i = 0; i < 14; i++){
//     width -= 40;
//     seventh_div_content += `<div style="width: ${width}px; height:${width}px; background-color:${randomColor()}; position: absolute; top ${50+width}px; left: ${50+width}px; "></div>`
//     console.log(width)
// }

for(let i = 0; i < 14; i++){
    width -= 40;
    position_counter += 20;
    seventh_div_content += `<div style="width: ${width}px; height:${width}px; background-color:${randomColor()}; position: absolute; top: ${position_counter}px; left: ${position_counter}px; "></div>`
    console.log(width)
}

// console.log(width)
// console.log(seventh_div_content);
seventh_div.innerHTML = seventh_div_content;



// task 8 -------------------------------------
// Iš simbolio &#9632; (kopijuoti visą žalią tekstą su kabliataškiu) sudėliokite žalią kvadratą turintį 41x41 šių simbolių. 
// Kad kvadratas atrodytų “kvadratiškai” panaudokite css stilių ir papildomus tagus. #ciklasCikle
let the_symbol = '&#9632;';
let qty_in_row = 41;
let row_num = 41;
let all_content = '';


for (let i = 0; i < row_num; i++){
        let content_line = "";  // resets the line content for each row  !!!!!!
        for(let r = 0; r < qty_in_row; r++){
        content_line += `<span class="one-symbol" style="display: inline-block;" >${the_symbol}</span>`;
    }
    all_content += `<div class="new-line" style="display: flex; justify-content: space-between; width: 100%;">${content_line}</div>`;
}

document.querySelector(".eight-div").innerHTML = all_content;

document.querySelector(".eight-div").style = "width: 900px; height: 900px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;";

// task 9 -------------------------------------
// Uždavinyje prieš tai nupieštam kvadratui nupieškite geltonas istrižaides (geltonai nudažykite atitinkamus simbolius). #ciklasCikle
let counter = qty_in_row + 1;

for (let i = 1; i <= row_num; i++){
    counter--;
    console.log(counter)
    document.querySelector(`.eight-div > div:nth-child(${i}) > span:nth-child(${i})`).style.color = "yellow";
    document.querySelector(`.eight-div > div:nth-child(${i}) > span:nth-child(${counter})`).style.color = "yellow";

}




// task 10 -------------------------------------
document.querySelector(".tenth-div").innerHTML = `<a href="./task_10.html">Task 10</a>`


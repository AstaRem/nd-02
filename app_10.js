
// task 10 -------------------------------------
// Uždavinį atlikite atskirame html faile. Visame ekrane atsitiktine tvarka “išmėtykite“ 444 pusiau permatomus atsitiktinės spalvos ir atsitiktinio skersmens nuo 44 iki 144 (px) apskritimus. Apskritimai turi tolygiai (pagal funkciją rand()) dengti visą ekraną.#fun
function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}


let tenth_div_extra = document.querySelector(".tenth-div-extra");
let tenth_body = document.querySelector("body");
tenth_div_extra.style.position = "relative";
tenth_div_extra.innerHTML = `<a href="./task_10.html">Task 10</a>`;

let tenth_extra = document.querySelector(".tenth-div-extra");

tenth_body.style= "margin: 0; width:100vw; height:100vh;";



let all_content = '';
for (let i = 0; i < 444; i++){
    let circle_diameter = rand(44,144);
    let random_color = randomColor();
    let one_shape = `<div style="width:${circle_diameter}px; height: ${circle_diameter}px; background-color: ${randomColor()}77; border-radius: 50%; position: absolute; top:${rand(1, 1900)}px; left:${rand(1, 1900)}px;"></div>`;
    all_content += one_shape;
}

tenth_extra.innerHTML = all_content;

tenth_extra.style = "width: 100%; height:100vh; background-color: #458075; margin: 0; padding: 0; position: relative; overflow: hidden; "

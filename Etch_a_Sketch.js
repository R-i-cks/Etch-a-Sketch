let grid = document.querySelector(".grid");

let rows = 16;
let cols = 16;
let colors = false;
function matrix() {
    grid.innerHTML = '';
    for (let i=0; i< rows; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j=0; j<cols; j++){
            let cell = document.createElement('div');
            cell.style.width = ((700 / cols)-2) + 'px';
            cell.style.height = ((700 / rows)-2) + 'px';
            cell.dataset.brightness = 1;
            if (colors){
                let color = '#' + Math.floor(Math.random()*16777215).toString(16);
                cell.addEventListener("mouseover",function(){ ChangeColor(color, cell)});
            }else{
                cell.addEventListener("mouseover",function(){ ChangeColor("black", cell)});
            }
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}
function ChangeColor(color, target){
    target.style.backgroundColor = color;
    let brightness = target.dataset.brightness - 0.1;
    if (brightness < 0) brightness = 0; 
    target.style.filter = `brightness(${brightness})`;
    target.dataset.brightness = brightness;
}


function updateValue(val) {
    document.getElementById('numDisplay').textContent = val;
    rows= val;
    cols=val;
    matrix();
}

function colorSwitch(bol){
    colors = bol;
    matrix();
}

matrix()
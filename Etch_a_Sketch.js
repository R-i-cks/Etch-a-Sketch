let grid = document.querySelector(".grid");

let rows = 16;
let cols = 16;
function matrix() {
    grid.innerHTML = '';
    for (let i=0; i< rows; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j=0; j<cols; j++){
            let cell = document.createElement('div');
            cell.style.width = ((700 / cols)-2) + 'px';
            cell.style.height = ((700 / rows)-2) + 'px';
            cell.addEventListener("mouseover",function(){ ChangeColor("black", cell)});
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}
function ChangeColor(color, target){
    target.style.backgroundColor = color;
}


function updateValue(val) {
    document.getElementById('numDisplay').textContent = val;
    rows= val;
    cols=val;
    matrix();
}
matrix()

function clearGrid() {
    document.querySelectorAll('.grid-container .col').forEach(function (col) {
        col.classList.remove('hover');
    });
}

function deleteGrid() {
    document.getElementById('grid-container').innerHTML = '';
}

function generateGrid(size) {
    deleteGrid();
    for (let _i = 0; _i < size; _i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let _j = 0; _j < size; _j++) {
            let col = document.createElement('div');
            col.classList.add('col');
            //col.textContent = "" + _i + "," + _j;
            row.appendChild(col);
        }
        document.getElementById('grid-container').appendChild(row);
        document.querySelectorAll('.grid-container .col').forEach(function (col) {
            col.addEventListener('mouseover', function () {
                col.classList.add('hover');
            });
        });
    }
}

document.querySelector('#btn-new-grid').addEventListener('click', function () {
    let size = prompt('Enter a number:');
    generateGrid(size);
});

document.querySelector('#btn-clear-grid').addEventListener('click', function () {
    clearGrid();
});
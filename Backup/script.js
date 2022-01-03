const gridContainer = document.querySelector('.grid');
const buttonContainer = document.querySelector('.buttons');
const blackBtn = document.createElement('button');
const greyBtn = document.createElement('button');
const colorBtn = document.createElement('button');
const resetBtn = document.createElement('button');


// create Divs

function createGrid(col, row) {
    for (let i = 1; i <= (col * row); i++) {
        const gridDiv = document.createElement('div');
        gridContainer.appendChild(gridDiv);
        gridContainer.style.display = 'grid';
        gridContainer.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        gridDiv.classList.add('div');
    }
}

// clear grid

function clearGrid() {
    gridContainer.innerHTML = ''
}

// create random grey hex color 
function getRandomGreyHex() {
    let g = Math.floor(Math.random() * 255).toString(16);
    return '#' + g + g + g;
}

// Create random color
function getRandomColorHex() {
    let color = '#';
    let digits = '1234567890ABCDEF';
    for (let i = 0; i < 6; i++) {
        color += digits[Math.floor(Math.random() * 16)];
    }
    return color;
}



// create buttons


function colorButton() {
    const divs = document.querySelectorAll('.div');
    colorBtn.textContent = 'Colour';
    colorBtn.addEventListener('click', () => {
        divs.forEach(div => div.addEventListener('mouseover', () => {
            let color = getRandomColorHex();
            div.style.background = color;
        }))
    })
    buttonContainer.appendChild(colorBtn);
}

function blackButton() {
    const divs = document.querySelectorAll('.div');
    blackBtn.textContent = 'Black';
    blackBtn.addEventListener('click', () => {
        divs.forEach(div => div.addEventListener('mouseover', () => {
            div.style.background = 'black';
        }))
    })
    buttonContainer.appendChild(blackBtn)
}

function greyButton() {
    const divs = document.querySelectorAll('.div');
    greyBtn.textContent = 'Grey';
    greyBtn.addEventListener('click', () => {
        divs.forEach(div => div.addEventListener('mouseover', () => {
            let greyColor = getRandomGreyHex();
            div.style.background = greyColor;
        }))
    })
    buttonContainer.appendChild(greyBtn);
}

// Reset Button

function resetButton() {
    resetBtn.textContent = 'Reset Grid';
    resetBtn.addEventListener('click', () => {
        clearGrid();
        let newGrid = prompt('How many rows & columns would you like?');
        createGrid(newGrid, newGrid);
        blackButton();
        greyButton();
        colorButton();
        resetButton();
    })
    buttonContainer.appendChild(resetBtn);
}


// Run functions

createGrid(16, 16);
blackButton();
greyButton();
colorButton();
resetButton();


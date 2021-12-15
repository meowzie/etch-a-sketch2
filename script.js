let container = document.querySelector('.container');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'center';
container.style.height = '100vh';
container.style.alignItems = 'center';

let divContainer = document.createElement('div');
divContainer.style.border = '2px solid black';
divContainer.style.height = '75vh';
divContainer.style.width = '45vw';
divContainer.style.display = 'flex';
divContainer.style.flexDirection = 'column';
container.appendChild(divContainer);

let divContainerContainer = document.createElement('div');
divContainerContainer.style.height = '75vh';
divContainerContainer.style.width = '45vw';
divContainerContainer.style.display = 'flex';
divContainerContainer.style.flexDirection = 'column';
divContainer.appendChild(divContainerContainer);
let counter=0;

let startButton = document.querySelector('button');
startButton.addEventListener('click', e => {
    
    if (counter>0) {
        divContainer.removeChild(divContainerContainer);
        divContainerContainer = document.createElement('div');
        divContainerContainer.style.height = '75vh';
        divContainerContainer.style.width = '45vw';
        divContainerContainer.style.display = 'flex';
        divContainerContainer.style.flexDirection = 'column';
        divContainer.appendChild(divContainerContainer);
    }
    counter++;

    let gridSize = Number(prompt('How many squares do you want in a side?'));
    for (i=0; i<gridSize; i++) {
        let rowDiv = document.createElement('div');
        let height = 100/gridSize;
        rowDiv.style.height = `${height}%`;
        rowDiv.style.width = '100%';
        rowDiv.style.display = 'flex';
        rowDiv.style.flexDirection = 'row';
        rowDiv.classList.add('rowDiv');
        divContainerContainer.appendChild(rowDiv);
    }

    let rows = document.querySelectorAll('.rowDiv');
    rows.forEach(row => {
        for (i=0; i<gridSize; i++) {
            let square = document.createElement('div');
            square.style.height = '100%';
            let width = 100/gridSize;
            square.style.width = `${width}%`;
            square.classList.add('square');
            row.appendChild(square);
        }
    });
    function chooseColor() {
        let red = Math.floor(Math.random() *256);
        let green = Math.floor(Math.random() *256);
        let blue = Math.floor(Math.random() *256);
        let color = `${red}, ${green}, ${blue}`;
        return color;
    }
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', e => {
        square.style.backgroundColor = `rgb(${chooseColor()})`;
    }));
})
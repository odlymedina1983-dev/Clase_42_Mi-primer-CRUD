import { shuffleArray } from '../utils/shuffle';
import Box from './box';
import Timer from './timer';




class Game{
    #columns;
    #rows;
    #idElement;
    #boxes;
    element;
    timer;
    constructor(columns,rows,idElement = 'game'){
        //console.log('se ha creado un objeto de tipo game');
        this.#columns = columns;
        this.#rows = rows;
        this.#idElement = idElement;
        this.element = document.getElementById(this.#idElement);
        this.#boxes = [];
        this.createBoxes();
        this.paintBoxes();
        this.element.addEventListener('click', () => {
        this.checkOpenBoxes();
        });
        this.initTimer();
        // let rC = this.createRandomColors();
        // console.log(rC);
        //debugger;
    }
    checkOpenBoxes() {       
        let nOpenBoxes = this.#boxes.filter((box) => box.open && box.free);
         console.log(nOpenBoxes);
         if (nOpenBoxes.length == 2) {
            if (nOpenBoxes[0].color === nOpenBoxes[1].color){
                nOpenBoxes.map((box) =>{
                    box.free = false;
                    //box.element.
                });
                this.arrayBoxesToStorage();
            } else {
                setTimeout(() => {
                    nOpenBoxes.map((box) =>{
                        box.resetColor();
                        //box.element.
                    });
                }, 500);
            } 
         }  else {
                this.arrayBoxesToStorage();
            }
            this.checkFinishGame();
    }
    checkFinishGame() {
        let freeBox = this.#boxes.filter(box => box.free );
        if (freeBox.length === 0){
            setTimeout(() =>{
                this.timer.stop();
                alert ('Juego finalizado');
            }), 2000;
           
        }
    }
    createRandomColors(){
        let randomColors =[];
        for (let index = 0;index <this.#columns*this.#rows/2; index++){
            let red = Math.floor(Math.random()*256);
            let green = Math.floor(Math.random()*256);
            let blue = Math.floor(Math.random()*256);
            let color = `rgb(${red},${green},${blue})`
            randomColors.push(color);
        }
        randomColors = [...randomColors,...randomColors];
        shuffleArray(randomColors);
        return randomColors;
    }    
    createBoxes(){
        this.#boxes = [];
        if (localStorage.getItem('boxes') != null) {
            let boxesFromStorage = JSON.parse(localStorage.getItem('boxes'));
            boxesFromStorage.map(box => {
                let newBox = new Box(box.row, box.column, box.color, box.free, box.open);
                this.#boxes.push(newBox);
            });
        } else {
            let randomC = this.createRandomColors();              
            for (let fila =0; fila < this.#rows; fila++){
                for (let col = 0; col < this.#columns; col++){                
                    let color = randomC.shift();                
                    let newBox = new Box(fila, col, color);
                    this.#boxes.push(newBox);
                }
            }
            this.arrayBoxesToStorage();
        }   
    }
    arrayBoxesToStorage(){
        let arrayBoxesToStorage = this.#boxes.map(box => {
            return {
                'row': box.row,
                'column': box.col,
                'color': box.color,
                'free': box.free,
                'open': box.open
            }
        });
        localStorage.setItem('boxes',JSON.stringify(arrayBoxesToStorage));
    }
    paintBoxes(){
        let header = document.createElement('header');
        header.setAttribute('id', 'boxHeader');
        this.element.appendChild(header);
        let boxContainer = document.createElement('div');
        boxContainer.setAttribute('id', 'boxContainer');
        this.element.appendChild(boxContainer);

        this.setCssBoxTemplates(); 
        this.#boxes.map((box) =>{
            let newBoxDiv = document.createElement('div');
            newBoxDiv.classList.add('box');
            if (!box.free || box.open){
                newBoxDiv.style.backgroundColor = box.color;
            }
            // newBoxDiv.dataset.col = box.col;
            // newBoxDiv.dataset.row = box.row;
            box.element = newBoxDiv;
            box.addEventClick();
            //debugger;
            boxContainer.appendChild(newBoxDiv);
            // newBoxDiv.addEventListener('click',(event) => {
            //     console.log(event.target);
            // })
        });
    }
    initTimer() {
        let timerContainer = document.createElement('h2');
        timerContainer.setAttribute('id','timerContainer');
        timerContainer.innerHTML = '<span id="timer">00:00:00</span><br />';

        let header = document.getElementById('boxHeader'); 
        header.appendChild(timerContainer);       
        this.timer = new Timer();
        this.timer.start();
    }
    setCssBoxTemplates(){
        let boxContainer = document.getElementById('boxContainer');
        boxContainer.style.gridTemplateColumns = `repeat(${this.#columns}, 1fr)`;
        boxContainer.style.gridTemplateRows = `repeat(${this.#rows}, 1fr)`;
    }
    static getRowsCols(){
        let rows, columns;

        if (localStorage.getItem('rows') != null && localStorage.getItem('columns') != null){
            rows = parseInt(localStorage.getItem('rows'));
            columns = parseInt(localStorage.getItem('columns'));

        } else {
            rows = parseInt(prompt('Introduzca el numero de filas'));
            columns = parseInt(prompt('Introduzca el numero de columnas'));
            while (rows*columns%2 != 0){
                alert('La multiplicacion de filas por columnas debe ser par. Vuelva a introducir los datos');
                rows = prompt('Introduzca el numero de filas');
                columns = prompt('Introduzca el numero de columnas');
            }
            localStorage.setItem('rows', rows);
            localStorage.setItem('columns', columns);
        }
        
        return {
            'rows': rows,
            'columns': columns
        }
    } 
    static resetGame () {
        localStorage.removeItem('rows');
        localStorage.removeItem('columns');
        localStorage.removeItem('boxes');
        localStorage.removeItem('timer');
        location.reload();
    } 
}
export default Game;
class Box{
    #col;
    #row;
    #color;
    #element;
    #free;
    #open;    
    constructor(row, col, color, free = true, open = false){
        //console.log('se ha creado un objeto de tipo box');
        this.#col = col;
        this.#row = row;
        this.#color = color;
        this.#free = free;
        this.#open = open;
        
    }
    get col(){
        return this.#col;
    }
    get row(){
        return this.#row;
    }    
    set element(element){
        this.#element = element;
    }
    get color(){
        return this.#color;
    } 
    get open(){
        return this.#open;
    } 
    get free(){
        return this.#free;
    } 
    set free(newValue) {
        this.#free = newValue;
    }
    addEventClick() {
        if (!this.#open){
            this.#element.addEventListener('click', (event) =>{
                if (this.#free){
                    this.#element.style.backgroundColor = this.#color;
                    this.#open = true; 
                }
                return false;
           }); 
        }
    }
    resetColor(){
        this.#element.style.backgroundColor = 'black';
        this.#open = false;
    }
}




export default Box;
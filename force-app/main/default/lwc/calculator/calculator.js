import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    numberOne = "";
    numberTwo = "";
    result = 0;

    changeHandlerNumberOne(event){
        this.numberOne = event.target.value;
        console.log("this.numberOne", this.numberOne);
    }

    changeHandlerNumberTwo(event){
        this.numberTwo = event.target.value;
        console.log("this.numberTwo", this.numberTwo);
    }

    addHandler(event){
        this.result = parseInt(this.numberOne) + parseInt(this.numberTwo);
    }
    subHandler(event){
        this.result = parseInt(this.numberOne) - parseInt(this.numberTwo);
    }
    mulHandler(event){
        this.result = parseInt(this.numberOne) * parseInt(this.numberTwo);
    }
    divHandler(event){
        this.result = parseInt(this.numberOne) / parseInt(this.numberTwo);
    }
}
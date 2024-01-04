import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    numberOne = "";
    numberTwo = "";
    result = 0;

    changeHandler(event){
       // this.numberOne = event.target.value;
        //console.log("this.numberOne", this.numberOne);
        let {name, value} = event.target;
        if(name === "number1"){
            this.numberOne = value;
        }else if(name === "number2"){
            this.numberTwo = value;
        }
        
    }
    calculateOutput(event){
        let labelEmement = event.target.label;
        if(labelEmement === "Add"){
            this.result = parseInt(this.numberOne) + parseInt(this.numberTwo);
        }else if(labelEmement === "Sub"){
            this.result = parseInt(this.numberOne) - parseInt(this.numberTwo);
        }else if(labelEmement === "Mul"){
            this.result = parseInt(this.numberOne) * parseInt(this.numberTwo);
        }else if(labelEmement === "Div"){
            this.result = parseInt(this.numberOne) / parseInt(this.numberTwo);
        }
        //reset
        this.numberOne = "";
        this.numberTwo = "";
    }
    
   }
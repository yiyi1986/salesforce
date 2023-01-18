import { LightningElement,track } from 'lwc';

export default class InterestCalculator extends LightningElement {
    @track amount;
    @track rate;
    @track time;
    resultValue;

    handleNumberAmountChange(event) {
        this.amount = event.target.value;
        console.log( this.amount );
    }    
    handleNumberRateChange(event) {
        this.rate = event.target.value;
        console.log( this.rate );
    }
    handleNumberTimeChange(event) {
        this.time = event.target.value;
         console.log( this.time );
    }
    total() {
        this.resultValue = Number(this.amount) * Number(this.rate) * Number(this.time);
        console.log(resultValue);
    }

}
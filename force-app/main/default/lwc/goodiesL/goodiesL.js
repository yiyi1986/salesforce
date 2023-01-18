import { LightningElement,wire } from 'lwc';
import callNewsPoint from "@salesforce/apex/ArticleDataController.callNewsPoint";

export default class GoodiesL extends LightningElement {

    value = '';

    @wire(callNewsPoint)
    newsarticles;
   
    handleChange(event) {
        const selectedOption = event.detail.value;
        console.log('Option selected with value: ' + selectedOption);
    }
}
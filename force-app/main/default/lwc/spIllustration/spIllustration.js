import { LightningElement,api } from 'lwc';


export default class SpIllustration extends LightningElement {

    @api textOnly = false;
    @api action;
    @api heading;
    @api message;
    @api variant;  
    @api imageSize = "small";
    
    get illustrationClass() {
        return `slds-illustration slds-illustration_${this.imageSize}` ;
    } 
   
   
    get headingClass() {
        if(this.imageSize == "Large"){
        return 'slds-illustration__header slds-text-heading_medium';
    }
    else {
        return 'slds-text-heading_medium';

    }

    } 

  

    
  

}
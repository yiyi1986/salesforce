import { LightningElement,api, wire } from 'lwc';

import getAnimales1 from "@salesforce/apex/AnimalController.getAnimales1";



export default class Animalshow extends LightningElement {
    @api recordId;

  
    @wire(getAnimales1, { parkId: '$recordId'})
    animales;

}
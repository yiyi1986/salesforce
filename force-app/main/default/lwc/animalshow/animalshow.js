import { LightningElement,api, wire } from 'lwc';

import getAnimales from "@salesforce/apex/AnimalController.getAnimales";



export default class Animalshow extends LightningElement {
    @api recordId;

  
    @wire(getAnimales, { parkId: '$recordId'})
    animales;

}
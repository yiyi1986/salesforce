import { api, LightningElement, wire } from 'lwc';
import getProducts from "@salesforce/apex/FamiliaController.getProducts";

export default class ProductList extends LightningElement {
   
    @api recordId;

  
    @wire(getProducts, { familiaId: '$recordId'})
    products;

}
import { LightningElement ,api,track} from 'lwc';
import insertGoodie from "@salesforce/apex/ArticleDataController.insertGoodie";

export default class GoodieList extends LightningElement {
    // contactId
    @api contact;

    @api article;
    @track selectedValue ='';
    value = '';
    @api goodie ={};

    get options() {
        
        console.log('viene en article=' +  this.article);
        let optionsValues = [];
   
        let key=0;
        for(const list of this.article){
            optionsValues.push({
                label: list.title,
                value: key
            })
            key++;
        }
       

        return optionsValues;
    }

    handleChange(event) {

        const selectedOption = event.detail.value;
        console.log('selected value=' +  this.article[selectedOption].title );

        this.selectedValue = selectedOption;
        event.preventDefault();

        const selectedEvent = new CustomEvent('selected', { detail: this.article[selectedOption].title });

        this.dispatchEvent(selectedEvent);
    }

    insertValue(event) {
        const selectedValue = this.selectedValue;
       
          alert(JSON.stringify(this.article[selectedValue].title));
 
          this.goodie.Name = this.article[selectedValue].title;
          this.goodie.Image_URL__c = this.article[selectedValue].urlToImage;
          this.goodie.Description__c = this.article[selectedValue].description;
          this.goodie.Contact__c = this.contact;
          
          console.log('selected value a insertar=' +   this.goodie.Contact__c);
         // Object goodie = this.article[selectedValue];
         insertGoodie({ newgoodie : this.goodie})
         .then(result =>{
             console.log('resucltado ok=');
             this.toastEventFire('Success','GoodieRecord is Saved','success')                      
         })
         .catch(error =>{
             this.error = error.message;
             alert(JSON.stringify(error))
         })
     }
}
import { LightningElement,wire,track,api  } from 'lwc';
import callNewsPoint from "@salesforce/apex/ArticleDataController.callNewsPoint";
import insertGoodie from "@salesforce/apex/ArticleDataController.insertGoodie";

export default class GoodiesL extends LightningElement {
// contactId
    @api recordId;
//
    @track selectedValue ='';
    @track options = [];
    @track alldata ='';
    @api goodie ={};
   

    @wire(callNewsPoint)
    newsarticles({error, data}) {
        if(data) {
            this.alldata =data;
            let optionsValues = [];
       
            let key=0;
            for(const list of data){
                optionsValues.push({
                    label: list.title,
                    value: key
                })
                key++;
            }
            this.options = optionsValues;
            window.console.log('optionsValues ===> '+JSON.stringify(optionsValues));
        }
        else if(error) {
            window.console.log('error ===> '+JSON.stringify(error));
        }
       }
   
    

    handleChange(event) {
        // Get the string of the "value" attribute on the selected option
        const selectedOption = event.detail.value;
        console.log('selected value=' +  selectedOption);

        this.selectedValue = selectedOption;
        event.preventDefault();

        // Creates the event with the contact ID data.
        const selectedEvent = new CustomEvent('selected', { detail: this.selectedValue });

        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
    }

    insertValue(event) {
       const selectedValue = this.selectedValue;
      
         alert(JSON.stringify(this.alldata[selectedValue].title));

         this.goodie.Name = this.alldata[selectedValue].title;
         this.goodie.Image_URL__c = this.alldata[selectedValue].urlToImage;
         this.goodie.Description__c = this.alldata[selectedValue].description;
         this.goodie.Contact__c = this.recordId;
         
         console.log('selected value a insertar=' +   this.goodie.Contact__c);
        // Object goodie = this.alldata[selectedValue];
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
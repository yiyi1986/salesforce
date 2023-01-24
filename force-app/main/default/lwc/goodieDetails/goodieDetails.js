import { LightningElement, wire ,api} from 'lwc';
import callNewsPoint from "@salesforce/apex/ArticleDataController.callNewsPoint";

export default class GoodieDetails extends LightningElement {

    @api recordId;
    selectedArticle;


    @wire(callNewsPoint) articles;

    articleSelected(event) {
        const articleTitle = event.detail;
        this.selectedArticle= this.articles.data.find(article => article.title=== articleTitle);
    }

    get listIsNotEmpty() {
        return this.articles && Array.isArray(this.articles.data) && this.articles.data.length > 0;
    }
}
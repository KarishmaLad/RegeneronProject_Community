import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class LinksToPages extends NavigationMixin(LightningElement) {
@track url;
   GoToHematologicalPage(){
        console.log("GoToHematologicalPage");
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'HematologicalPage__c'
            },
        });
    }

    /*GoToHematologicalPage(){
        this[NavigationMixin.GenerateUrl]({
            type: 'comm__namedPage',
            attributes: {
                name: 'HematologicalPage__c'
            }
        }).then((url) => (this.url = url));
    }*/
}
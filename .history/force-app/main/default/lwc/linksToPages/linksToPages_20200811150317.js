import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class LinksToPages extends NavigationMixin(LightningElement) {

    GoToHematologicalPage(){
        console.log("GoToHematologicalPage");
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'HematologicalPage__c'
            },
        });
    }
}
import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class LinksToPages extends NavigationMixin(LightningElement) {
@track url;
   /* GoToHematologicalPage(){
        console.log("GoToHematologicalPage");
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'HematologicalPage__c'
            },
        });
    }*/

    GoToHematologicalPage(){
        this[NavigationMixin.GenerateUrl]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            }
        }).then((url) => (this.url = url));
    }
}
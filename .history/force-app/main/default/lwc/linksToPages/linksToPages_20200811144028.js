import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class LinksToPages extends NavigationMixin(LightningElement) {

    GoToHematologicalPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home'
            },
        });
    }
}
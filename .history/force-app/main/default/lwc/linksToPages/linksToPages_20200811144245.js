import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class LinksToPages extends NavigationMixin(LightningElement) {

    GoToHematologicalPage(){
        c
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'Home'
            },
        });
    }
}
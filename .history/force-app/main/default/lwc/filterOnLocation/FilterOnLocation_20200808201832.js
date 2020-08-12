import { LightningElement,track } from 'lwc';

export default class FilterOnLocation extends LightningElement {
    @track selectedCategory = '';

    get CategoryOptions(){
        return [

        ];
    }
}
import { LightningElement,track } from 'lwc';

export default class FilterOnLocation extends LightningElement {
    @track selectedCategory = '';

    get CategoryOptions(){
        return [
             { label: 'Hematological', value: 'Hematological' },     
             { label: 'Red', value: 'red' },
             { label: 'Green', value: 'green' },
             { label: 'Blue', value: 'blue' },
        ];
    }
}
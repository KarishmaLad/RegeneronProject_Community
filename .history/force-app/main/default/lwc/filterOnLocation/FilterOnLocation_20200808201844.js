import { LightningElement,track } from 'lwc';

export default class FilterOnLocation extends LightningElement {
    @track selectedCategory = '';

    get CategoryOptions(){
        return [
             { label: 'White', value: 'white' },     
             { label: 'Red', value: 'red' },
             { label: 'Green', value: 'green' },
             { label: 'Blue', value: 'blue' },
        ];
    }
}
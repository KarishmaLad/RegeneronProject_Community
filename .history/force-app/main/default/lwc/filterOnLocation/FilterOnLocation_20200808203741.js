import { LightningElement,track } from 'lwc';

export default class FilterOnLocation extends LightningElement {
    @track selectedCategory = '';

    get CategoryOptions(){
        return [
             { label: 'Hematological', value: 'Hematological' },     
             { label: 'Ovarian', value: 'Ovarian' },
             { label: 'Prostrate', value: 'Prostrate' },
             { label: 'Lung', value: 'Lung' },
             { label: 'Cervical', value: 'Cervical' },
             { label: 'Solid Tumors or Skin ', value: 'Solid Tumors or Skin ' }
        ];
    }

    get LocationOptions(){
        return [
             { label: 'New York', value: 'New York' },     
             { label: 'New Jersey', value: 'New Jersey' },
             { label: 'Washington, DC', value: 'Washington, DC' }
            
        ];
    }

    handleChangeCategory(event) {
        this.selectedCategory = event.detail.value;
     }

     handleChangeCategory(event) {
        this.selectedCategory = event.detail.value;
     }
}
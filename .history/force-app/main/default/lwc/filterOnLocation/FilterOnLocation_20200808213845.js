import { LightningElement,track } from 'lwc';

export default class FilterOnLocation extends LightningElement {
    @track selectedCategory = '';
    @track selectedLocation = '';
    @track gendervalue ='';

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

    get Genderoptions(){
        return [
             { label: 'Male', value: 'Male' },     
             { label: 'Female', value: 'Female' }
        ];
    }

    handleChangeCategory(event) {
        this.selectedCategory = event.detail.value;
        console.log("@@@@selectedCategory"+ this.selectedCategory);
     }

     handleChangeLocation(event) {
        this.selectedLocation = event.detail.value;
        console.log("@@@@selectedLocation"+ this.selectedLocation);
     }

     genderChange(event) {
        this.gendervalue = event.detail.value;
        console.log("@@@@gendervalue"+ this.gendervalue);
     }

     findtrials(){
        console.log("@@@@gendervalue"+ this.gendervalue);
     }
}
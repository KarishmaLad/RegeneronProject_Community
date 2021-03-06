import { LightningElement,track ,wire} from 'lwc';
import { ShowToastEvent} from 'lightning/platformShowToastEvent'
import getTrials from '@salesforce/apex/TrialResultsController.getTrials';

export default class FilterOnLocation extends LightningElement {
    @track selectedCategory = '';
    @track selectedLocation = '';
    @track gendervalue ='';
    @track agevalue ='';
    @track searchresults;

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
        console.log("@@@@button pressed"+ this.selectedCategory + "Location" +this.selectedLocation);
        if (this.selectedCategory !==''){
            console.log("!!!!! in If" + this.selectedCategory);
            getTrials({ cat:this.selectedCategory,loc:this.selectedLocation})
            .then(result => {
                this.searchresults = result;
                console.log("$$$$$$$$" + this.searchresults);
            })
            .catch(error => {
                this.error = error;
            });
        }else { 
            console.log("!!!!! in Else ");
            const event = new ShowToastEvent({
                title: 'Warning',
                message: 'Please select an item in the List.',
                variant: 'warning',
                mode: 'sticky'
            });
            this.dispatchEvent(event); 
        }

       
     }
}

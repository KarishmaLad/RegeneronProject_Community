public with sharing class TrialResultsController {
    @AuraEnabled(cacheable=true)
    public static List<Oncology_Trials__c>  getTrials(String cat, String loc){
        if (loc==null || loc ==) {
            
        }
    String query = 'Select id,name, Categories__c, Locations__c, Phase__c from Oncology_Trials__c where Categories__c includes (' + cat + ';)';

    }
}

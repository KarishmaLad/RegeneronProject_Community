public with sharing class TrialResultsController {
    @AuraEnabled(cacheable=true)
    public static List<Oncology_Trials__c>  getTrials(String cat, String loc){
        System.debug('^^^^^^^'+ cat + loc);
        //String slist = '\'' + cat + '\',';

        String query = 'Select id,name, Categories__c, Locations__c, Phase__c from Oncology_Trials__c where Categories__c includes(\+ cat + '\;)';
        System.debug('^^^^^^^'+ query);
        //Select id, name, Categories__c, Locations__c, Phase__c from Oncology_Trials__c where Categories__c includes ('Prostrate;')
        if (loc!=null || loc !='') {
            query += 'AND Locations__c includes (' + loc + ';)';
        }
        System.debug('^^^^^^^'+ query);
        return Database.query(query);  
    }
}

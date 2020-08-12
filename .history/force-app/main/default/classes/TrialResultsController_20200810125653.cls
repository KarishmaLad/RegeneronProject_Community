public with sharing class TrialResultsController {
    @AuraEnabled(cacheable=true)
    public static List<Oncology_Trials__c>  getTrials(String cat, String loc){
        System.debug('^^^^^^^cat:'+ cat + 'loc:' +loc);
       
        String query = 'Select id,name, Categories__c, Locations__c, Phase__c from Oncology_Trials__c where Categories__c includes(' + '\'' +  cat + '\'' + ')';
        System.debug('^^^^^^^'+ query);
        System.debug('^^^^^^^'+ Database.query(query));
     if(loc!=null || loc !='')
     {   
         System.debug('??????? Entered here');
         query+= 'and Locations__c includes (' + '\'' + loc + '\'' + ')';
         System.debug('%%%%%%%'+ query);
         System.debug('%%%%%%%'+ Database.query(query));
     }
        return Database.query(query);  
    }
}

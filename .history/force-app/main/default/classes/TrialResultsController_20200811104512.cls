public with sharing class TrialResultsController {
    @AuraEnabled(cacheable=true)
    public static List<Oncology_Trials__c>  getTrials(String cat, String loc){
        System.debug('^^^^^^^cat:'+ cat + 'loc:' +loc);
       
        String query = 'Select id,name, Categories__c,Description__c, Locations__c, Phase__c from Oncology_Trials__c where Categories__c includes(' + '\'' +  cat + '\'' + ')';
        System.debug('^^^^^^^'+ query);
        System.debug('^^^^^^^'+ Database.query(query));
     if(loc !='')
     {   
         System.debug('??????? Entered here');
         query+= 'and Locations__c includes (' + '\'' + loc + '\'' + ') limit 1';
         System.debug('%%%%%%%'+ query);
         System.debug('%%%%%%%'+ Database.query(query));
     }else {
         query+= 'limit 1';
     }
        return Database.query(query);  
    }

    @AuraEnabled(cacheable=true)
    public static Integer getTrialsCount(String cat, String loc){
        System.debug('^^^^^^^cat:'+ cat + 'loc:' +loc);
       
        String query = 'Select count() from Oncology_Trials__c where Categories__c includes(' + '\'' +  cat + '\'' + ') limit 1';
       
        System.debug('%%%%%%%'+ Database.countQuery(query));
     if(loc !='')
     {   
         System.debug('??????? Entered here');
         query+= 'and Locations__c includes (' + '\'' + loc + '\'' + ') limit 1';
         System.debug('%%%%%%%'+ query);
         System.debug('%%%%%%%'+ Database.countQuery(query));
     }else {
         query+='limit 1';
     }
        return Database.countQuery(query);  
    }
}


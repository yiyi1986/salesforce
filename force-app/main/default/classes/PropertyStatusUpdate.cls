public with sharing class PropertyStatusUpdate {
  
    @AuraEnabled
    public static void updateStage(String PropertyStatus , String recordId){
        Property__c propertySelected = [Select Id ,	Status__c from Property__c where Id=:recordId] ; 
        propertySelected.Status__c = PropertyStatus ; 
        update propertySelected ;  
    }
}
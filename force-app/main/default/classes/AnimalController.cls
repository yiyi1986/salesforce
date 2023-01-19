public with sharing class AnimalController {

    @AuraEnabled(cacheable=true)
    public static List<Park_Sighting__c> getAnimales(Id parkId) {

        List<Park_Sighting__c> animales = [
            SELECT Id, Animal__r.Name, Animal__r.Image_URL__c,Animal__r.Description__c
            FROM Park_Sighting__c
            WHERE
                Park__c = :parkId                
            WITH SECURITY_ENFORCED
        ];
        System.debug(animales);
        return animales;

    }


}

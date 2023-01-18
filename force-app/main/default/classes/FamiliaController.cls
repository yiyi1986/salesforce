public with sharing class FamiliaController {
    @AuraEnabled(Cacheable=true)
    public static  List<Product__c> getProducts(Id familiaId) {

        List<Product__c> cProductFamilyList = [
            SELECT ID, Name, Picture_URL__c, MSRP__c
            FROM Product__c
            WHERE Product_Family__c = :familiaId
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];
        System.debug(cProductFamilyList);
        return cProductFamilyList;

    }
}

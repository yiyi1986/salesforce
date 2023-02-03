@isTest
public with sharing class AnimalControllerTest {
    
    public static void createAnimals(Integer amount) {
        List<Animal__c> animals = new List<Animal__c>();

        for (Integer i = 1; i <= amount; i++) {
            animals.add(
                new Animal__c(
                    Name = 'Animal ' + i,
                    Image_URL__c = 'https://upload.wikimedia.org/wikipedia/commons/8/83/Xenopus_laevis_1.jpg'
                   
                )
            );
        }

        insert animals;
    }

    public static void createParks(Integer amount) {
        List<Park__c> parks = new List<Park__c>();

        for (Integer i = 1; i <= amount; i++) {
            parks.add(
                new Park__c(
                    Name = 'Parks ' + i
                   
                )
            );
        }

        insert parks;
    }
    public static void createParkSighting(Integer amount) {
        List<Park_Sighting__c> parkSighting = new List<Park_Sighting__c>();

        List<Animal__c> animals= [
            SELECT Id
            FROM Animal__c               
            WITH SECURITY_ENFORCED
        ];

        List<Park__c> parks= [
            SELECT Id
            FROM Park__c                           
            WITH SECURITY_ENFORCED
        ];
       
       
        for (Integer i = 1; i <= amount; i++) {
         
            parkSighting.add(
                new Park_Sighting__c(
                    Name = 'ParksSighting ' + i,
                    Animal__c = animals[i-1].Id,
                    Park__c = parks[i-1].Id
                   
                )
            );
        }

        insert parkSighting;
    }

    
   
 @isTest
    static void getAnimales() {
        AnimalControllerTest.createAnimals(10);
        AnimalControllerTest.createParks(10);
        AnimalControllerTest.createParkSighting(10);

        List<Park__c> parks= [
            SELECT Id
            FROM Park__c                           
            WITH SECURITY_ENFORCED
        ];
        Id idPark = parks[3].Id;
        Test.startTest();
        List<Park_Sighting__c> animales = AnimalController.getAnimales(idPark);
        Test.stopTest();
        System.debug(animales);
        System.assertEquals(
            animales[0].Animal__r.Name,
            'Animal 4',
            'The Animal 4 es devuelto'
        );
    }

}
public with sharing class ContactAccountController 
{
    @AuraEnabled
    public static List<Contact> getRelatedList(Id recordId)
    {
        List<Contact> Conlist = [Select id, name,firstname,lastname from Contact where AccountId=: recordId ];
        return Conlist;
    }
    
      @AuraEnabled
    public static List<Contact> searchNameContacts(String searchKey)
    {
        String seach = '%'+searchKey+'%';
        List<Contact> Conlist = [Select id, name,firstname,lastname from Contact where Name LIKE: seach ];
        return Conlist;
    }
    
    
}
global with sharing class VisualforceController {
  

    global static String getAccount() {
        return JSON.serialize([select name
            from account ]);
    }

    @RemoteAction
    public static List<Contact> getContact(String accountId) {

        List<Contact> lstContact = [SELECT id,name, email FROM Contact WHERE accountId=:accountId];
        return lstContact;
    }
}
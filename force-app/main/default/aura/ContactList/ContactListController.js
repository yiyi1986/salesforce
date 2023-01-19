({
    doInit: function(component, event, helper) {
        helper.getContactList(component);
    },
    searchKeyChange: function(component, event) {
        var searchKey = component.find("searchKey").get("v.value");
        console.log('searchKey:::::'+searchKey);
        var action = component.get("c.searchNameContacts");
        action.setParams({
            "searchKey": searchKey
        });
        action.setCallback(this, function(a) {
            component.set("v.ContactList", a.getReturnValue());
        });
        $A.enqueueAction(action);
    }   
})
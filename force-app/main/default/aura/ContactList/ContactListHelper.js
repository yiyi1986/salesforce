({      
    getContactList: function(component) {
        var action = component.get('c.getRelatedList');
        action.setParams
        ({
            recordId: component.get("v.recordId")
        });
       
        action.setCallback(this, function(actionResult) {
            component.set('v.ContactList', actionResult.getReturnValue());
        });
        $A.enqueueAction(action);
       
    }
})
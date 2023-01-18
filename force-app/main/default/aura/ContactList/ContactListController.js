({
 myAction : function(component, event, helper) 
    {
        var ConList = component.get("c.getRelatedList");
        ConList.setParams
        ({
            recordId: component.get("v.recordId")
        });
        
        ConList.setCallback(this, function(data) 
                           {
                               component.set("v.ContactList", data.getReturnValue());
                           });
        $A.enqueueAction(ConList);
 },
    SearchAction : function(component, event, helper) 
    {
        var ConList = component.get("c.searchContacts");
        ConList.setParams
        ({
            searchTerm: component.get("v.searchTerm")
        });
     
        ConList.setCallback(this, function(data) 
                           {
                               component.set("v.ContactList", data.getReturnValue());
                           });
            console.log('searchKey:::::'+ConList);
        $A.enqueueAction(ConList);
 }
     
/*onSearchTermChange: function( component, event, helper ) {
        // search anytime the term changes
        var searchTerm = component.get( "v.searchTerm" );
        // to improve performance, particularly for fast typers,
        // we wait a small delay to check when user is done typing
        var delayMillis = 500;
        // get timeout id of pending search action
        var timeoutId = component.get( "v.searchTimeoutId" );
        // cancel pending search action and reset timer
        clearTimeout( timeoutId );
        // delay doing search until user stops typing
        // this improves client-side and server-side performance
        timeoutId = setTimeout( $A.getCallback( function() {
            helper.handleSearch( component, searchTerm );
        }), delayMillis );
        component.set( "v.searchTimeoutId", timeoutId );
    }*/
})
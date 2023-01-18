({
    bmiMethod : function(component, event, helper) {     
        //Add numbers
        var height = component.get("v.height");
        var weight = component.get("v.weight");
        console.log(height);
        console.log(weight);
        var bmiResult = weight /(height * height);
        component.set('v.bmi', bmiResult);
        
    }
})
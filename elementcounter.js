/* eslint no-console: "off" */
/* exported tryQuerySelector */
'use strict';

// eslint-disable-next-line
var xIsTheNumber = 12;

function tryQuerySelector() {
    var foodInputs = document.querySelectorAll('input[name="food"]');

    for(var i = 0; i < foodInputs.length; i++) {
        var input = foodInputs[i];
        console.log(input.value, input.id, input.checked);
    }

    var selectedFoodInput = document.querySelector('input[name="food"]:checked');

    if(selectedFoodInput) {
        console.log(selectedFoodInput.value);
    }
    else {
        console.log('no food selected');
    }
    
    console.log(xIsTheNumber);
}
/* exported checkAboutMe, resetAboutMe */
'use strict';
var aboutMeForm = document.getElementById('about-me-form');
var aboutMeResponse = document.getElementById('about-me-response');


function checkAboutMe() {
    var elements = aboutMeForm.elements;

    var pizzaInput = elements.pizza;
    var likePizza = pizzaInput.value;
    
    var cheeseburgersInput = elements.cheeseburgers;
    var likeCheeseburgers = cheeseburgersInput.value;
    
    var sushiInput = elements.sushi;
    var likeSushi = sushiInput.value;
    
    var spaghettiInput = elements.sushi;
    var likeSpaghetti = spaghettiInput.value;
    
    var correct = 0;
    //console.log('pizza');

    if(likePizza.toLowerCase() === 'yes') {
        // let's run this code if i like pizza
        correct = correct + 1;
        pizzaInput.classList.add('correct');
        pizzaInput.classList.remove('incorrect');
        
    }
    else if(likePizza !== '') {
        pizzaInput.classList.add('incorrect');
        pizzaInput.classList.remove('correct');
    }

    if(likeCheeseburgers.toLowerCase() === 'yes') {
        // let's run this code if i like pizza
        correct = correct + 1;
        cheeseburgersInput.classList.add('correct');
        cheeseburgersInput.classList.remove('incorrect');
        
    }
    else if(likeCheeseburgers !== '') {
        cheeseburgersInput.classList.add('incorrect');
        cheeseburgersInput.classList.remove('correct');
    }
    if(likeSushi.toLowerCase() === 'yes') {
        // let's run this code if i like pizza
        correct = correct + 1;
        sushiInput.classList.add('correct');
        sushiInput.classList.remove('incorrect');
        
    }
    else if(likeSushi !== '') {
        sushiInput.classList.add('incorrect');
        sushiInput.classList.remove('correct');
    }
    if(likeSpaghetti.toLowerCase() === 'yes') {
        // let's run this code if i like pizza
        correct = correct + 1;
        spaghettiInput.classList.add('correct');
        spaghettiInput.classList.remove('incorrect');
        
    }
    else if(likeSpaghetti !== '') {
        spaghettiInput.classList.add('incorrect');
        spaghettiInput.classList.remove('correct');
    }

    aboutMeResponse.textContent = 'You got ' + correct + ' out of 4';
}

function resetAboutMe() {
    var elements = aboutMeForm.elements;
    var pizzaInput = elements.pizza;
    var cheeseburgersInput = elements.cheeseburgers;
    var sushiInput = elements.sushi;
    var spaghettiInput = elements.spaghetti;

    //var likePizza = pizzaInput.value;

    pizzaInput.classList.remove('correct');
    pizzaInput.classList.remove('incorrect');
    cheeseburgersInput.classList.remove('correct');
    cheeseburgersInput.classList.remove('incorrect');
    sushiInput.classList.remove('correct');
    sushiInput.classList.remove('incorrect');
    spaghettiInput.classList.remove('correct');
    spaghettiInput.classList.remove('incorrect');

    aboutMeResponse.textContent = '';

}


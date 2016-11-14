
(function ($, localStorage, location) {
    // var currentIterations = 0;
    var intervalCount = $("#countTimes");
    var submittedTimes = $("#submittedTimes");
    var valueInput = $("#inputValue");
    var valueInput_td = $("#inputValue_td");
    var valueForm = $("#localstorage-form");
    var hashValue = $("#hash");

    window.setInterval(function () {
        if(!localStorage['countTimes']){
            localStorage['countTimes'] = 1;	
        } else {
            localStorage['countTimes']++;	
        }
        intervalCount.text(localStorage['countTimes']);
    }, 1500);

    valueForm.submit(function (event) {
        if(!localStorage['submittedTimes']) {
            localStorage['submittedTimes'] = 1;
        } else {
            localStorage['submittedTimes']++;
        }
        submittedTimes.text(localStorage['submittedTimes']);

        valueInput_td.text(valueInput.val());
        event.preventDefault();
    })
    
    window.onhashchange = function () {
        hashValue.text(window.location.hash);
    }
    
        
})(jQuery, window.localStorage, window.location); // jQuery is exported as $ and jQuery

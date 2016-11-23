(function ($) {
    // Let's start writing AJAX calls!

    
    var nextButton = $("#next-button"),
        title = $("#title"),
        date = $("#time"),
        summary = $("#summary"),
        body = $("#body");

    nextButton.click(function (event) {
        event.preventDefault();
        var requestConfig = {
                method: "POST",
                url: "/note/next",
                contentType: 'application/json',
                data: JSON.stringify({
                    testField: 12,
                    testBool: true
                })
            };
            $.ajax(requestConfig).then(function (responseMessage) {
                console.log(responseMessage);
                title.text(responseMessage.title);
                date.text(responseMessage.time);
                summary.text(responseMessage.summary);
                body.text(responseMessage.body);
                //                alert("Data Saved: " + msg);
            });
    });
})(window.jQuery);
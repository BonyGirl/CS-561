(function ($) {
    // Let's start writing AJAX calls!

    
    var nextButton = $("#next-button"),
        myNewTaskForm = $("#new-item-form"),
        newNameInput = $("#new-task-name"),
        newDecriptionArea = $("#new-task-description");

    nextButton.click(function (event) {
        event.preventDefault();
        var requestConfig = {
                method: "POST",
                url: "/note",
                contentType: 'application/json',
                data: JSON.stringify({
                    testField: 12,
                    testBool: true
                })
            };
            $.ajax(requestConfig).then(function (responseMessage) {
                console.log(responseMessage);
                newContent.html(responseMessage.message);
                //                alert("Data Saved: " + msg);
            });
    });

    myNewTaskForm.submit(function (event) {
        event.preventDefault();

        var newName = newNameInput.val();
        var newDescription = newDecriptionArea.val();
        var newContent = $("#new-content");

        if (newName && newDescription) {
            var requestConfig = {
                method: "POST",
                url: "/api/todo",
                contentType: 'application/json',
                data: JSON.stringify({
                    name: newName,
                    description: newDescription,
                    testField: 12,
                    testBool: true
                })
            };

            $.ajax(requestConfig).then(function (responseMessage) {
                console.log(responseMessage);
                newContent.html(responseMessage.message);
                //                alert("Data Saved: " + msg);
            });
        }
    });
})(window.jQuery);

(function ($) {

    var title = $("#new-note-title"),
        dueDate = $("#new-note-due-date"),
        summary = $("#new-note-summary"),
        body = $("#new-note-summary"),
        myNewTaskForm = $("#new-note-form");


    myNewTaskForm.submit(function (event) {
        event.preventDefault();
        if (title.val() && dueDate.val() && summary.val() && body.val()) {

                var requestConfig = {
                method: "POST",
                url: "/new/newNote",
                contentType: 'application/json',
                data: JSON.stringify({
                    title: title.val(),
                    dueDate: dueDate.val(),
                    summary: summary.val(),
                    body: body.val()
                })
            };

            $.ajax(requestConfig).then(function (responseMessage) {
                console.log(responseMessage);
                window.location="/note/"
                //                alert("Data Saved: " + msg);
            });
        }
    });
})(window.jQuery);
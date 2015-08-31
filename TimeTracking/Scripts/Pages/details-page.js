$(function () {
    $.post("/Activities/Index/" + $("#ProjectID").val(), function (data) {
        $("#activities").html(data);
    });
});
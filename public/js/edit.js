var id;
$(document).ready(function () {

    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    var sParameterName = sURLVariables[0].split('=');
    id = sParameterName[1]

    var contentPostToEdit, titlePostToEdit;
    $.ajax({
        url: "/post",
        success: function (data) {
            var titlePost = data.posts[id - 1].title,
                contentPost = data.posts[id - 1].content;
            titlePostToEdit = $("#titlePostToEdit").val(titlePost)
            contentPostToEdit = $("#contentPostToEdit").val(contentPost)
            $("#hiddenid").val(id);
        }
    });

    $("#edit").click(function () {
        locate.href("/editok")
    })



})

$(document).ready(function () {



    $.ajax({
        url: "/post",
        dataType: "JSON",
        success: function (data) {
            var len = data.posts.length
            for (i = len - 1; i >= 0; i--) {
                var postTitle = data.posts[i].title;
                var postContent = data.posts[i].content;
                var id = data.posts[i].id;
                $(".posts").append("<li><a href='/edit?id=" + id + "'>Edit </a><h3>" + postTitle + "</h3><p>" + postContent + "</p></li><br><hr>")
            }
        },

        error: function () {
            alert("something bad happened!")
        }

    });





});

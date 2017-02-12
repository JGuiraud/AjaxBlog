$(document).ready(function () {

	$.ajax({
		url: "/menu",
		dataType: "JSON",
		success: function (data) {
			for (i = 0; i < data.menu.length; i++) {
				var title = data.menu[i].title;
				var link = data.menu[i].link;
				$(".nav").append("<a class= 'nav-link' href=" + link + "><li>" + title + "</li></a>")
			}
		}
	});


	$.ajax({
		url: "/post",
		dataType: "JSON",
		success: function (data) {
			var posts = data.posts
			for (var i = 0; i < posts.length; i++) {
				var titlepost = posts[i].title;
				var contentpost = posts[i].content

			}
		},
		error: function () { alert("something bad happened!") }
	});


});




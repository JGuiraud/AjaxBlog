$(document).ready(function () {

	$.ajax({
		url: "example.md",
		success: function (data) {
			var target = $("#md"),
				converter = new showdown.Converter(),
				dataToHtml = converter.makeHtml(data);
			target.html(dataToHtml)
		}
	})
});

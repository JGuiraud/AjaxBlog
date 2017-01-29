// (function(){
// 	"use strict";
// 	var app = {
// 		init:function(){

// 		},
// 	};


// 	$(document).ready(function(){
// 		app.init();
// 	});
// })();
$(document).ready(function(){
	$("#runBtn").click(function(){
		var text = document.getElementById('sourceTA').value,
		target = document.getElementById('targetDiv'),
		converter = new showdown.Converter(),
		html = converter.makeHtml(text);
  		target.innerHTML = html;
	});	
});

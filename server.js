var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var urlJSONmenu = require('./data/menu.json');
var urlJSONpost = require('./data/post.json');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get("/", function (req, res) {
	res.redirect("/home");
})

app.get("/home", function (req, res) {
	res.sendFile(path.join(__dirname, 'public/pages', 'index.html'));
})

app.get("/edit", function (req, res) {
	res.sendFile(path.join(__dirname, 'public/pages', 'edit.html'));
})

app.get("/editok", function (req, res) {
	res.sendFile(path.join(__dirname, 'public/pages', 'editok.html'));
})

app.get("/new", function (req, res) {
	res.sendFile(path.join(__dirname, 'public/pages', 'newpost.html'));
})

app.post("/editpost", function (req, res) {
	fs.readFile('./data/post.json', 'utf-8', function (err, res) {
		if (err) {
			throw err
		};
		var tab = [];
		var database = JSON.parse(res);

		for (i = 0; i < database.posts.length; i++) {
			var idTot = database.posts[i].id;
			tab.push(idTot)
		}

		var updatedPost = req.body;
		var id = updatedPost.id
		var x = tab.indexOf(id)
		database.posts[x] = updatedPost;

		var newDatabase = JSON.stringify(database, null, 2)

		fs.writeFile('./data/post.json', newDatabase, function (err) {
			if (err) {
				throw err
			}
		});
	});
})

app.get("/menu", function (req, res) {
	res.send(urlJSONmenu);
})

app.get("/post", function (req, res) {
	res.send(urlJSONpost);
})

app.post('/addnew', function (req, res) {
	fs.readFile("data/post.json", 'utf-8', function (err, res) {
		if (err) {
			throw err
		};
		var database = JSON.parse(res);
		var len = database.posts.length;

		var newPost = req.body;

		newPost.id = (len + 1).toString();
		database.posts.push(req.body);

		var newDatabase = JSON.stringify(database, null, 2)

		fs.writeFile("data/post.json", newDatabase, function (err) {
			if (err) {
				throw err
			}
		});
	});
});

app.listen(1337, function () {
	console.log('Listening on port 1337!');
});

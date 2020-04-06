// Require dependencies
const express = require("express")

const app = express()

// Set our port to 8080
const PORT = process.env.PORT || 8080;
// var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts our server.
app.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});
// var server = http.createServer(handleRequest);

// function handleRequest(req, res) {

//     // Capture the url the request is made to
//     var path = req.url;

//     // When we visit different urls, read and respond with different files
//     switch (path) {

//         case "/notes":
//             return fs.readFile(__dirname + "/public/notes.html", function (err, data) {
//                 if (err) throw err;
//                 res.writeHead(200, { "Content-Type": "text/html" });
//                 res.end(data);
//             });
//         // default to rendering index.html, if none of above cases are hit
//         default:
//             return fs.readFile(__dirname + "/public/index.html", function (err, data) {
//                 if (err) throw err;
//                 res.writeHead(200, { "Content-Type": "text/html" });
//                 res.end(data);
//             });
//     }
// }

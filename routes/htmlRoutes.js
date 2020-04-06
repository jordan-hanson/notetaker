const path = require("path")

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // SHOULD IT BE / OR A * FOR HOME PAGE
    app.get("*", function (req, res) {
        res.sendFile(path.join(_dirname, "../public/index.html"));
    });

    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    })
}


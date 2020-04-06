const noteData = require("../db/noteDb");

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.json(noteData);
    });

    app.post("/api/notes", function (req, res) {
        res.json(noteData);
    });

    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        noteData.length = 0;
        // what does res.json ok: true mean
        res.json({ ok: true });
    });
};

let noteData = require("../db/noteDb");

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.json(noteData);
    });

    app.post("/api/notes", function (req, res) {
        console.log("body", req.body)
        req.body.id = noteData.length
        noteData.push(req.body)
        res.json(noteData);
    });

    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        noteData.length = 0;
        // what does res.json ok: true mean
        res.json({ ok: true });
    });

    app.delete("/api/notes/:id", function (req, res) {
        console.log("about to delete", req.params)
        var newNoteData = [];
        for (var i = 0; i < noteData.length; i++) {
            if (noteData[i].id != req.params.id) {
                newNoteData.push(noteData[i])
            }
        }
        noteData = newNoteData
        res.json(noteData)
    })
};

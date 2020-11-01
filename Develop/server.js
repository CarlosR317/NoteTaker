const path = require("path")
const express = require("express");
const app = express();
const db = require("/Develop/db/db.json")
const fs = require('fs');
const bodyParser = require('body-parser')

const PORT = 8000;
// create application/json parser
var jsonParser = bodyParser.json()
 
let notes= []

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes
app.use(express.static(path.join(__dirname + "Develop/public/index.html")));

// GET /api/notes

app.get("/api/notes", (req, res) => {
    return res.json(db);
});


// POST /api/notes
app.post("/api/notes", jsonParser, (req, res) => {
     var noteEntry = req.body;
     noteEntry.id = note.length+1;
    notes.push(noteEntry)
    console.log(notesEntry)
    //add old note array (from db.json) to the notes array
    var read = fs.readFile(path.join(__dirname + "/Develop/db/db.json"), "utf8", err => {
        if (err) console.log("Error writing file:", err);
    });
    notes.concat(read);
     fs.writeFile(path.join(__dirname + "/Develop/db/db.json"), JSON.stringify(notes), err => {
         if (err) console.log("Error writing file:", err);
      }); 
      return res.end()
});
// receive JSON obj from the front end


// DELETE /api/notes/:id
app.delete("/api/notes/:id", function (req, res) {
    var id = req.params.id;
    console.log(id);

});

// HTML routes

app.use(express.static("public"));

// GET /notes = notes.html
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/Develop/public/notes.html"));
});

// GET * = index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/Develop/public/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});



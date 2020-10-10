const path = require("path")
const express = require("express");
const app = express();
const db = require("./Develop/db/db.json")

const PORT = 8000;

// API routes

// GET /api/notes
// get data somehow from db.json
//  return res.json(data);
app.get("/api/notes", (req, res) => {
    return res.json(db);
});


// POST /api/notes
app.post("/api/notes", (req, res) => {
   var note = req.body; 
   console.log(note);
 
});
// receive JSON obj from the front end
// return res.end()

// DELETE /api/notes/:id


// HTML routes
app.use(express.static("public"));
// GET /notes = notes.html
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "Develop/public/notes.html"));
});

// GET * = index.html
app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "Develop/public/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});


